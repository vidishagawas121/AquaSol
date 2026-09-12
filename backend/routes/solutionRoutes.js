import express from 'express';
import {
  getSolutions,
  getSolutionBySlug,
  createSolution,
  updateSolution,
  deleteSolution,
} from '../controllers/solutionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getSolutions);
router.get('/:slug', getSolutionBySlug);
router.post('/', protect, createSolution);
router.put('/:id', protect, updateSolution);
router.delete('/:id', protect, deleteSolution);

export default router;
