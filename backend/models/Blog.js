import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      enum: [
        'Government Schemes & Subsidies',
        'Solar PV Guides',
        'Solar Water Heater Tips',
        'Energy Conservation',
        'Company & Industry News',
      ],
      default: 'Government Schemes & Subsidies',
    },
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
    },
    author: {
      type: String,
      default: 'Aqua-Sol Technical Editorial Team',
    },
    readTimeMinutes: {
      type: Number,
      default: 4,
    },
    tags: [String],
    isPublished: {
      type: Boolean,
      default: true,
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
