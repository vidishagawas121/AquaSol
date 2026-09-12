import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide product title'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please provide product slug'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please specify category'],
      enum: [
        'Solar Water Heater',
        'Solar PV',
        'Heat Pump',
        'Solar Street Light',
        'Water Purifier',
        'Bathroom Fittings',
        'Accessories & Components',
      ],
      default: 'Solar Water Heater',
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    features: [
      {
        type: String,
      },
    ],
    specifications: [
      {
        label: String,
        value: String,
      },
    ],
    capacities: [
      {
        capacity: String,
        idealFor: String,
      },
    ],
    warranty: {
      type: String,
      default: 'Standard Manufacturer Warranty',
    },
    images: [
      {
        url: String,
        alt: String,
        isPrimary: Boolean,
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ category: 1, isPublished: 1 });

const Product = mongoose.model('Product', productSchema);
export default Product;
