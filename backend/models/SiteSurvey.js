import mongoose from 'mongoose';

const siteSurveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide full name'],
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
    propertyType: {
      type: String,
      enum: ['Independent Bungalow/Villa', 'Apartment/Flat', 'Commercial Building', 'Industrial Shed', 'Housing Society/RWA', 'Hospital/School/College', 'Other'],
      default: 'Independent Bungalow/Villa',
    },
    address: {
      type: String,
      required: [true, 'Please provide installation address/location'],
      trim: true,
    },
    city: {
      type: String,
      default: 'Pune',
      trim: true,
    },
    pincode: {
      type: String,
      trim: true,
    },
    requirement: {
      type: String,
      enum: ['PM Surya Ghar Rooftop Solar', 'Commercial Rooftop Solar', 'Solar Water Heater Installation', 'Solar Water Heater Servicing/Repair', 'Heat Pump System', 'Solar Street Lighting', 'Other'],
      default: 'PM Surya Ghar Rooftop Solar',
    },
    preferredDate: {
      type: String,
      required: [true, 'Please select preferred survey date'],
    },
    preferredTime: {
      type: String,
      enum: ['Morning (10 AM - 1 PM)', 'Afternoon (1 PM - 4 PM)', 'Evening (4 PM - 7 PM)', 'Any Time'],
      default: 'Morning (10 AM - 1 PM)',
    },
    notes: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Requested', 'Confirmed', 'Completed', 'Cancelled'],
      default: 'Requested',
    },
  },
  {
    timestamps: true,
  }
);

siteSurveySchema.index({ status: 1, preferredDate: 1 });

const SiteSurvey = mongoose.model('SiteSurvey', siteSurveySchema);
export default SiteSurvey;
