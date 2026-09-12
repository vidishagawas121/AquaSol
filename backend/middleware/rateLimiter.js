import rateLimit from 'express-rate-limit';

export const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // max 20 enquiries per IP per 15 min
  message: {
    success: false,
    message: 'Too many requests submitted from this network. Please try again after 15 minutes or call us directly at +91 8275067701.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 120, // 120 requests per min
  standardHeaders: true,
  legacyHeaders: false,
});
