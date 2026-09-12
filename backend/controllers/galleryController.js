import GalleryItem from '../models/GalleryItem.js';

export const getGallery = async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = { isPublished: true };
    if (category && category !== 'All') filter.category = category;

    const items = await GalleryItem.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: items.length, items });
  } catch (error) {
    next(error);
  }
};

export const createGalleryItem = async (req, res, next) => {
  try {
    const item = await GalleryItem.create(req.body);
    res.status(201).json({ success: true, item });
  } catch (error) {
    next(error);
  }
};

export const deleteGalleryItem = async (req, res, next) => {
  try {
    await GalleryItem.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Image deleted from gallery' });
  } catch (error) {
    next(error);
  }
};
