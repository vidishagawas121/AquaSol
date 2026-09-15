import mongoose from 'mongoose';

/**
 * Global cache across serverless function invocations
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // If no MONGODB_URI is provided, Aqua-Sol operates in zero-database standalone mode
  if (!process.env.MONGODB_URI) {
    return null;
  }

  // If already connected, reuse existing connection
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  const mongoUri = process.env.MONGODB_URI;

  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false, // In serverless, disable buffering to catch disconnected state quickly
    };

    cached.promise = mongoose
      .connect(mongoUri, opts)
      .then((conn) => {
        console.log(`[MongoDB] Connected: ${conn.connection.host}`);
        return conn;
      })
      .catch((error) => {
        cached.promise = null; // Reset on failure so next request can retry
        console.error(`[MongoDB Connection Error]: ${error.message}`);
        console.log('[MongoDB] Ensure MONGODB_URI environment variable is configured in Vercel.');
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

