import mongoose from 'mongoose';

const galleryItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        'Solar Rooftop PV',
        'Solar Water Heater',
        'Solar Street Light',
        'Heat Pump',
        'Repairs & Servicing',
        'Installation Highlights',
      ],
      default: 'Solar Rooftop PV',
    },
    imageUrl: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: 'Aqua-Sol Energy Installation',
    },
    caption: {
      type: String,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

galleryItemSchema.index({ category: 1 });

const GalleryItem = mongoose.model('GalleryItem', galleryItemSchema);
export default GalleryItem;
