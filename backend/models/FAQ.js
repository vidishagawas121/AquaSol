import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['PM Surya Ghar', 'Rooftop Solar PV', 'Solar Water Heaters & Servicing', 'Heat Pumps', 'Financial & Subsidies', 'General'],
      default: 'General',
    },
    order: {
      type: Number,
      default: 0,
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

faqSchema.index({ category: 1, order: 1 });

const FAQ = mongoose.model('FAQ', faqSchema);
export default FAQ;
