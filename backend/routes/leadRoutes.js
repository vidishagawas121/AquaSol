import express from 'express';
import {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
  addLeadNote,
  deleteLead,
  getLeadStats,
} from '../controllers/leadController.js';
import { protect } from '../middleware/authMiddleware.js';
import { leadLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', leadLimiter, createLead);
router.get('/stats/dashboard', protect, getLeadStats);
router.get('/', protect, getLeads);
router.get('/:id', protect, getLeadById);
router.put('/:id/status', protect, updateLeadStatus);
router.post('/:id/notes', protect, addLeadNote);
router.delete('/:id', protect, deleteLead);

export default router;
