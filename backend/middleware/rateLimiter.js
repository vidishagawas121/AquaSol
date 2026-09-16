import rateLimit from 'express-rate-limit';

const leadWindowMs = process.env.LEAD_RATE_LIMIT_WINDOW_MS
  ? parseInt(process.env.LEAD_RATE_LIMIT_WINDOW_MS, 10)
  : 15 * 60 * 1000;

const leadMax = process.env.LEAD_RATE_LIMIT_MAX
  ? parseInt(process.env.LEAD_RATE_LIMIT_MAX, 10)
  : 20;

const apiWindowMs = process.env.RATE_LIMIT_WINDOW_MS
  ? parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10)
  : 60 * 1000;

const apiMax = process.env.RATE_LIMIT_MAX
  ? parseInt(process.env.RATE_LIMIT_MAX, 10)
  : 120;

const supportPhone = process.env.WHATSAPP_NUMBER || '+91 8275067701';

export const leadLimiter = rateLimit({
  windowMs: leadWindowMs,
  max: leadMax,
  message: {
    success: false,
    message: `Too many requests submitted from this network. Please try again later or contact us directly at ${supportPhone}.`,
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const apiLimiter = rateLimit({
  windowMs: apiWindowMs,
  max: apiMax,
  standardHeaders: true,
  legacyHeaders: false,
});
