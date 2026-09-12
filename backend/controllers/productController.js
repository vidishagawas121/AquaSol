import slugify from 'slugify';
import Product from '../models/Product.js';

// @desc    Get all products (public gets published only, admin gets all)
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res, next) => {
  try {
    const { category, featured, search, includeUnpublished } = req.query;
    const filter = {};

    if (!includeUnpublished) {
      filter.isPublished = true;
    }
    if (category && category !== 'All') {
      filter.category = category;
    }
    if (featured === 'true') {
      filter.isFeatured = true;
    }
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { shortDescription: { $regex: search, $options: 'i' } },
      ];
    }

    const products = await Product.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, count: products.length, products });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product by slug
// @route   GET /api/products/:slug
// @access  Public
export const getProductBySlug = async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Get related products in same category
    const relatedProducts = await Product.find({
      category: product.category,
      _id: { $ne: product._id },
      isPublished: true,
    }).limit(3);

    res.json({ success: true, product, relatedProducts });
  } catch (error) {
    next(error);
  }
};

// @desc    Create product
// @route   POST /api/products
// @access  Private (Admin)
export const createProduct = async (req, res, next) => {
  try {
    const { title, category, shortDescription, fullDescription, features, specifications, capacities, warranty, images, isFeatured, isPublished } = req.body;

    if (!title || !shortDescription) {
      return res.status(400).json({ success: false, message: 'Title and short description are required' });
    }

    const slug = req.body.slug || slugify(title, { lower: true, strict: true });

    const product = await Product.create({
      title,
      slug,
      category,
      shortDescription,
      fullDescription: fullDescription || shortDescription,
      features: features || [],
      specifications: specifications || [],
      capacities: capacities || [],
      warranty: warranty || 'Standard Manufacturer Warranty',
      images: images || [],
      isFeatured: Boolean(isFeatured),
      isPublished: isPublished !== undefined ? Boolean(isPublished) : true,
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private (Admin)
export const updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    if (req.body.title && !req.body.slug) {
      req.body.slug = slugify(req.body.title, { lower: true, strict: true });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private (Admin)
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    await product.deleteOne();
    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};
