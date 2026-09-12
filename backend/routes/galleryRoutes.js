import express from 'express';
import {
  getGallery,
  createGalleryItem,
  deleteGalleryItem,
} from '../controllers/galleryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getGallery);
router.post('/', protect, createGalleryItem);
router.delete('/:id', protect, deleteGalleryItem);

export default router;
