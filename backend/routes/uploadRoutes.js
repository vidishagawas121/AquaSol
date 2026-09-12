import express from 'express';
import { upload, handleFileUpload } from '../controllers/uploadController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, upload.single('file'), handleFileUpload);

export default router;
