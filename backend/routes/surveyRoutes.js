import express from 'express';
import {
  bookSurvey,
  getSurveys,
  updateSurveyStatus,
} from '../controllers/surveyController.js';
import { protect } from '../middleware/authMiddleware.js';
import { leadLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', leadLimiter, bookSurvey);
router.get('/', protect, getSurveys);
router.put('/:id', protect, updateSurveyStatus);

export default router;
