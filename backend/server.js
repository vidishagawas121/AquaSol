import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables with multi-path resolution, override: true, and loose syntax parsing
const envPathCandidates = [
  path.resolve(__dirname, '.env'),
  path.resolve(process.cwd(), '.env'),
  path.resolve(__dirname, '..', '.env'),
];

for (const envPath of envPathCandidates) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath, override: true });
    
    // Robust manual parser to support loose syntax like `port =5111` or `PORT = 5111`
    try {
      const rawContent = fs.readFileSync(envPath, 'utf8');
      const lines = rawContent.split(/\r?\n/);
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const match = trimmed.match(/^([a-zA-Z0-9_]+)\s*=\s*(.*)$/);
        if (match) {
          const key = match[1].trim();
          let value = match[2].trim();
          value = value.replace(/^["'](.*)["']$/, '$1');
          if (key.toUpperCase() === 'PORT') {
            process.env.PORT = value;
          } else if (process.env[key] === undefined) {
            process.env[key] = value;
          }
        }
      }
    } catch (parseErr) {
      // Ignore manual parse error
    }
    break;
  }
}
dotenv.config({ override: true }); // Fallback standard dotenv search

// Configure DNS servers for reliable MongoDB Atlas SRV resolution
try {
  const dnsServers = process.env.DNS_SERVERS
    ? process.env.DNS_SERVERS.split(',').map((s) => s.trim()).filter(Boolean)
    : ['8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1'];

  if (dnsServers.length > 0) {
    dns.setServers(dnsServers);
  }

  if (typeof dns.setDefaultResultOrder === 'function') {
    dns.setDefaultResultOrder('ipv4first');
  }
} catch (dnsErr) {
  console.warn('[DNS Configuration Notice]:', dnsErr.message);
}

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { apiLimiter } from './middleware/rateLimiter.js';

// Route Imports
import authRoutes from './routes/authRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import surveyRoutes from './routes/surveyRoutes.js';
import productRoutes from './routes/productRoutes.js';
import solutionRoutes from './routes/solutionRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import faqRoutes from './routes/faqRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import settingRoutes from './routes/settingRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

const app = express();

// Application Constants from Environment (Defaults to Port 5111)
const rawPort = (process.env.PORT || process.env.port || process.env.SERVER_PORT || '5111').toString().trim();
const PORT = parseInt(rawPort, 10) || 5111;
const NODE_ENV = process.env.NODE_ENV || 'production';
const MAX_BODY_SIZE = process.env.MAX_BODY_SIZE || '10mb';

// Connect to Database on startup (only if MONGODB_URI is configured)
if (process.env.MONGODB_URI) {
  connectDB();
} else {
  console.log('[Aqua-Sol Backend] Running in zero-database standalone mode (no MongoDB required).');
}

// Enable Trust Proxy for Vercel/reverse-proxy edge servers & rate limiters
app.set('trust proxy', 1);

// Security & Utility Middleware
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// Flexible CORS setup for Vercel deployments & production domains
const rawClientUrls = process.env.CLIENT_URL || process.env.CORS_ORIGIN || '';
const configuredClients = rawClientUrls
  ? rawClientUrls.split(',').map((url) => url.trim().replace(/\/+$/, ''))
  : [];

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  ...configuredClients,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, server-to-server, curl, postman)
      if (!origin) return callback(null, true);

      // Allow explicitly configured origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow any Vercel deployment preview / production domain (*.vercel.app)
      if (origin.endsWith('.vercel.app')) {
        return callback(null, true);
      }

      // In local development mode, allow all origins
      if (NODE_ENV === 'development') {
        return callback(null, true);
      }

      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: MAX_BODY_SIZE }));
app.use(express.urlencoded({ extended: true, limit: MAX_BODY_SIZE }));

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Ensure database connection is ready for incoming requests if MONGODB_URI is set
app.use(async (req, res, next) => {
  if (req.path === '/api/health' || !process.env.MONGODB_URI) return next();
  try {
    await connectDB();
  } catch (err) {
    console.error('[DB Middleware Connection Error]:', err.message);
  }
  next();
});

// Serve uploaded files statically (from /tmp in serverless or local uploads/ in standard node)
const staticUploadsDir = process.env.VERCEL
  ? path.join(path.sep, 'tmp', 'uploads')
  : path.join(__dirname, 'uploads');
app.use('/uploads', express.static(staticUploadsDir));

// Apply General Rate Limiter to API
app.use('/api', apiLimiter);

// Root Welcome Route
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'Aqua-Sol Energy Production API',
    healthCheck: '/api/health',
    port: PORT,
    endpoints: [
      '/api/health',
      '/api/products',
      '/api/services',
      '/api/solutions',
      '/api/projects',
      '/api/blogs',
      '/api/faqs',
      '/api/leads',
      '/api/site-surveys',
    ],
  });
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Aqua-Sol Energy Production API',
    location: 'Pune, Maharashtra',
    environment: process.env.VERCEL ? 'vercel-serverless' : NODE_ENV,
    port: PORT,
    database: process.env.MONGODB_URI ? 'connected' : 'not required (standalone mode)',
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/site-surveys', surveyRoutes);
app.use('/api/products', productRoutes);
app.use('/api/solutions', solutionRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/settings', settingRoutes);
app.use('/api/uploads', uploadRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// In Vercel serverless, Vercel invokes the exported handler; in standalone node, start HTTP server
if (!process.env.VERCEL && NODE_ENV !== 'test') {
  const server = app.listen(PORT, () => {
    console.log(`[Aqua-Sol Backend] Running in ${NODE_ENV} mode on port ${PORT}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`\n❌ [Fatal Error]: Port ${PORT} is already in use by another process on your server.`);
      console.error(`💡 Quick Fix Options:`);
      console.error(`   Option 1: Free port ${PORT} with: fuser -k ${PORT}/tcp  (or: npx kill-port ${PORT})`);
      console.error(`   Option 2: Change PORT in your .env file (e.g., PORT=5112 or PORT=8000)\n`);
      process.exit(1);
    } else {
      console.error(`[Server Listen Error]:`, error.message);
    }
  });
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`[Unhandled Rejection]: ${err.message}`);
});

export default app;
