import slugify from 'slugify';
import Blog from '../models/Blog.js';

export const getBlogs = async (req, res, next) => {
  try {
    const { category, search } = req.query;
    const filter = { isPublished: true };
    if (category && category !== 'All') filter.category = category;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { summary: { $regex: search, $options: 'i' } },
      ];
    }

    const blogs = await Blog.find(filter).sort({ publishedAt: -1 });
    res.json({ success: true, count: blogs.length, blogs });
  } catch (error) {
    next(error);
  }
};

export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }
    const recentBlogs = await Blog.find({ _id: { $ne: blog._id }, isPublished: true }).limit(3);
    res.json({ success: true, blog, recentBlogs });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const slug = req.body.slug || slugify(req.body.title, { lower: true, strict: true });
    const blog = await Blog.create({ ...req.body, slug });
    res.status(201).json({ success: true, blog });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, blog });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Article removed' });
  } catch (error) {
    next(error);
  }
};
