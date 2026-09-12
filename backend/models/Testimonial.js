import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      default: 'Pune',
      trim: true,
    },
    systemType: {
      type: String,
      default: 'Solar Water Heater',
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    feedback: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: true,
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

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
