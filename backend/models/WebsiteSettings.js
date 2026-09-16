import mongoose from 'mongoose';

const websiteSettingsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      default: 'Aqua-Sol Energy',
    },
    tagline: {
      type: String,
      default: 'Power Your Future With Clean Solar Energy',
    },
    marathiTagline: {
      type: String,
      default: 'घराच्या छतावर सोलर बसवा, वीजबिलातून कायमची सुटका मिळवा!',
    },
    primaryPhone: {
      type: String,
      default: '+91 8275067701',
    },
    displayPhone: {
      type: String,
      default: '8275067701',
    },
    secondaryPhone: {
      type: String,
      default: '+91 7391037702',
    },
    secondaryDisplayPhone: {
      type: String,
      default: '7391037702',
    },
    secondaryContactName: {
      type: String,
      default: '',
    },
    whatsappNumber: {
      type: String,
      default: '+918275067701',
    },
    primaryEmail: {
      type: String,
      default: 'aquasolpune@gmail.com',
    },
    officeAddress: {
      type: String,
      default: 'Office No. 05, Laxmi Kunj, Chandan Nagar, Pune, Maharashtra 411014',
    },
    workingHours: {
      type: String,
      default: 'Monday – Saturday: 9:00 AM – 7:30 PM',
    },
    msmeRegistration: {
      type: String,
      default: 'Registered under Micro, Small & Medium Enterprises (MSME)',
    },
    isOfficialVendor: {
      type: Boolean,
      default: true,
    },
    googleMapsUrl: {
      type: String,
      default: 'https://maps.google.com/?q=Chandan+Nagar+Pune',
    },
    // PM Surya Ghar Centralized Subsidy Scheme Settings
    pmSuryaGhar: {
      schemeName: {
        type: String,
        default: 'PM Surya Ghar: Muft Bijli Yojana',
      },
      schemeMarathiName: {
        type: String,
        default: 'प्रधानमंत्री सूर्यघर मोफत वीज योजना',
      },
      maxSubsidyAmount: {
        type: Number,
        default: 78000,
      },
      freeUnitsPerMonth: {
        type: Number,
        default: 300,
      },
      subsidyMatrix: [
        {
          capacity: { type: String, default: '1 kW' },
          subsidyAmount: { type: Number, default: 30000 },
          description: { type: String, default: '' },
        },
      ],
      officialPortalUrl: {
        type: String,
        default: 'https://pmsuryaghar.gov.in',
      },
      loanPartnerInfo: {
        type: String,
        default: 'Union Bank of India collateral-free solar loans up to 3 kW with easy EMI facilitation.',
      },
    },
    // Centralized Solar Calculator Assumptions
    calculatorConfig: {
      avgTariffPerUnit: {
        type: Number,
        default: 8.5, // Average residential unit tariff in Maharashtra (MSEDCL)
      },
      unitsGeneratedPerKwPerYear: {
        type: Number,
        default: 1450, // Average annual kWh generated per kW in Pune/Maharashtra region
      },
      sqftNeededPerKw: {
        type: Number,
        default: 100, // ~100 sq ft shadow-free roof area per kW
      },
      systemCostPerKwApprox: {
        type: Number,
        default: 60000, // Average gross installation cost before subsidy
      },
    },
  },
  {
    timestamps: true,
  }
);

const WebsiteSettings = mongoose.model('WebsiteSettings', websiteSettingsSchema);
export default WebsiteSettings;
