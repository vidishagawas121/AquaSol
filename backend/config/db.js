import mongoose from 'mongoose';
import dns from 'dns';

// Ensure DNS servers resolve MongoDB Atlas SRV records
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
  // Graceful fallback if environment disallows custom DNS mutation
}

/**
 * Global cache across serverless function invocations
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // If no MONGODB_URI is provided, Aquasol operates in zero-database standalone mode
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    return null;
  }

  // If already connected, reuse existing connection
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  const serverSelectionTimeoutMS = process.env.MONGODB_TIMEOUT_MS
    ? parseInt(process.env.MONGODB_TIMEOUT_MS, 10)
    : 5000;

  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS,
      bufferCommands: false, // In serverless, disable buffering to catch disconnected state quickly
      maxPoolSize: process.env.MONGODB_MAX_POOL_SIZE ? parseInt(process.env.MONGODB_MAX_POOL_SIZE, 10) : 10,
    };

    cached.promise = mongoose
      .connect(mongoUri, opts)
      .then((conn) => {
        console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
        return conn;
      })
      .catch((error) => {
        cached.promise = null; // Reset on failure so next request can retry
        console.error(`[MongoDB Connection Error]: ${error.message}`);
        console.log('[MongoDB] Ensure MONGODB_URI environment variable is configured in Vercel / .env.');
        return null;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    return null;
  }
};

export default connectDB;
