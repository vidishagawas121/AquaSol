export const companyInfo = {
  name: 'Aqua-Sol Energy',
  legalName: 'Aqua-Sol Energy Pune',
  tagline: 'Empowering Maharashtra with Clean Solar Energy & Water Heating Solutions',
  marathiTagline: 'घराच्या छतावर सोलर बसवा, वीजबिलातून कायमची सुटका मिळवा!',
  officeAddress: 'Office No. 05, Ground Floor, Laxmi Kunj, Near Ganpati Mandir, Chandan Nagar, Pune - 411014, Maharashtra',
  primaryPhone: '+91 8275067701',
  displayPhone: '8275067701',
  secondaryPhone: '+91 7391037702',
  secondaryDisplayPhone: '7391037702',
  whatsappNumber: '918275067701',
  primaryEmail: 'aquasolpune@gmail.com',
  workingHours: 'Monday – Saturday: 9:00 AM – 7:30 PM (Sun By Appointment)',
  msmeRegistration: 'Registered under Micro, Small & Medium Enterprises (MSME), Govt of India',
  isOfficialVendor: true,
  vendorStatus: 'Authorized PM Surya Ghar Muft Bijli Yojana Vendor Partner',
  bankTieUp: 'Special low-interest collateral-free solar loans with Nationalised Banks',
  googleMapsUrl: 'https://maps.google.com/?q=Chandan+Nagar+Pune+411014',

  pmSuryaGhar: {
    schemeName: 'PM Surya Ghar: Muft Bijli Yojana',
    schemeMarathiName: 'प्रधानमंत्री सूर्यघर मोफत वीज योजना',
    maxSubsidyAmount: 78000,
    freeUnitsPerMonth: 300,
    subsidyMatrix: [
      {
        capacity: '1 kW System',
        subsidyAmount: 30000,
        description: 'Direct Benefit Transfer (DBT) subsidy of ₹30,000 credited to bank account.',
        idealFor: '1-2 BHK Flats & Small Homes (~120 units/mo)',
      },
      {
        capacity: '2 kW System',
        subsidyAmount: 60000,
        description: 'Direct subsidy of ₹60,000 for 2 kW rooftop systems.',
        idealFor: '2-3 BHK Homes & Duplexes (~240 units/mo)',
      },
      {
        capacity: '3 kW to 10 kW',
        subsidyAmount: 78000,
        description: 'Maximum eligible residential central subsidy of ₹78,000 under PM Surya Ghar.',
        idealFor: 'Bungalows, Villas & Large Homes (~360+ units/mo)',
      },
    ],
    officialPortalUrl: 'https://pmsuryaghar.gov.in',
    loanPartnerInfo: 'Special tie-up assistance with Nationalised Banks for low-interest collateral-free solar loans.',
  },

  calculatorConfig: {
    avgTariffPerUnit: 8.5,
    unitsGeneratedPerKwPerDay: 4.2,
    unitsGeneratedPerKwPerYear: 1500,
    sqftNeededPerKw: 100,
    systemCostPerKwApprox: 60000,
  },
};

export default companyInfo;
