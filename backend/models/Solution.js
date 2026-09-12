import mongoose from 'mongoose';

const solutionSchema = new mongoose.Schema(
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
    subtitle: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: ['Residential', 'Commercial', 'Industrial', 'Institutional', 'Universal'],
      default: 'Universal',
    },
    shortDescription: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    keyBenefits: [String],
    applications: [String],
    image: {
      type: String,
    },
    iconName: {
      type: String,
      default: 'Sun',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Solution = mongoose.model('Solution', solutionSchema);
export default Solution;
