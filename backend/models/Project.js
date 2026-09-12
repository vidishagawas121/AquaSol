import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
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
    systemType: {
      type: String,
      required: true,
      enum: [
        'Solar Rooftop PV',
        'Solar Water Heater',
        'Heat Pump System',
        'Solar Street Lighting',
        'Water Treatment / Purifier',
        'Commercial Solar Project',
      ],
      default: 'Solar Rooftop PV',
    },
    sector: {
      type: String,
      enum: ['Residential', 'Commercial', 'Industrial', 'Institutional', 'Public/Infrastructure'],
      default: 'Residential',
    },
    location: {
      type: String,
      required: true,
      default: 'Pune, Maharashtra',
    },
    capacity: {
      type: String,
      default: 'Custom System',
    },
    overview: {
      type: String,
      required: true,
    },
    clientRequirement: {
      type: String,
    },
    solutionDelivered: {
      type: String,
    },
    images: [
      {
        url: String,
        caption: String,
        isCover: Boolean,
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
  },
  {
    timestamps: true,
  }
);

projectSchema.index({ sector: 1, systemType: 1 });

const Project = mongoose.model('Project', projectSchema);
export default Project;
