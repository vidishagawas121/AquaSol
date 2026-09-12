import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide customer name'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide phone number'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    city: {
      type: String,
      trim: true,
      default: 'Pune',
    },
    propertyType: {
      type: String,
      enum: ['Residential', 'Commercial', 'Industrial', 'Institutional', 'Housing Society/RWA', 'Other'],
      default: 'Residential',
    },
    interestedProduct: {
      type: String,
      trim: true,
    },
    interestedService: {
      type: String,
      trim: true,
    },
    monthlyBill: {
      type: Number,
    },
    estimatedCapacity: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      enum: [
        'Website Hero',
        'Product Enquiry',
        'Contact Form',
        'Solar Calculator',
        'WhatsApp Enquiry',
        'Site Survey',
        'PM Surya Ghar Hub',
        'Direct Call',
        'Other',
      ],
      default: 'Website Hero',
    },
    status: {
      type: String,
      enum: [
        'New',
        'Contacted',
        'Site Survey',
        'Quotation Sent',
        'Negotiation',
        'Converted',
        'Lost',
      ],
      default: 'New',
    },
    notes: [
      {
        text: String,
        author: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    assignedTo: {
      type: String,
      default: 'Unassigned',
    },
  },
  {
    timestamps: true,
  }
);

leadSchema.index({ status: 1, createdAt: -1 });
leadSchema.index({ phone: 1 });

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;
