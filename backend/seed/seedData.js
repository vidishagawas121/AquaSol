import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';
import Product from '../models/Product.js';
import Solution from '../models/Solution.js';
import Service from '../models/Service.js';
import Project from '../models/Project.js';
import Blog from '../models/Blog.js';
import FAQ from '../models/FAQ.js';
import Testimonial from '../models/Testimonial.js';
import GalleryItem from '../models/GalleryItem.js';
import WebsiteSettings from '../models/WebsiteSettings.js';
import Lead from '../models/Lead.js';

dotenv.config();

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/aqua_sol_energy';
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
    console.log('[Seed] Connected to MongoDB');

    // 1. Admin User
    await User.deleteMany();
    await User.create({
      name: 'Aqua-Sol Administrator',
      email: 'admin@aquasol.com',
      password: 'AquaSol@2026!',
      role: 'admin',
      isActive: true,
    });
    console.log('[Seed] Admin user created (admin@aquasol.com / AquaSol@2026!)');

    // 2. Website Settings
    await WebsiteSettings.deleteMany();
    await WebsiteSettings.create({
      companyName: 'Aqua-Sol Energy',
      tagline: 'Power Your Future With Clean Solar Energy',
      marathiTagline: 'घराच्या छतावर सोलर बसवा, वीजबिलातून कायमची सुटका मिळवा!',
      primaryPhone: '+91 8275067701',
      displayPhone: '8275067701',
      whatsappNumber: '+918275067701',
      primaryEmail: 'aquasolpune@gmail.com',
      officeAddress: 'Office No. 05, Laxmi Kunj (Laxmikunj), Chandan Nagar, Pune, Maharashtra 411014',
      workingHours: 'Monday – Saturday: 9:00 AM – 7:30 PM',
      msmeRegistration: 'Registered under Micro, Small & Medium Enterprises (MSME)',
      isOfficialVendor: true,
      pmSuryaGhar: {
        schemeName: 'PM Surya Ghar: Muft Bijli Yojana',
        schemeMarathiName: 'प्रधानमंत्री सूर्यघर मोफत वीज योजना',
        maxSubsidyAmount: 78000,
        freeUnitsPerMonth: 300,
        subsidyMatrix: [
          {
            capacity: '1 kW System',
            subsidyAmount: 30000,
            description: 'Central government direct benefit transfer subsidy for 1 kW rooftop solar installation.',
          },
          {
            capacity: '2 kW System',
            subsidyAmount: 60000,
            description: 'Direct subsidy of ₹60,000 credited to customer bank account for 2 kW systems.',
          },
          {
            capacity: '3 kW to 10 kW',
            subsidyAmount: 78000,
            description: 'Maximum eligible residential central subsidy of ₹78,000 under PM Surya Ghar Yojana.',
          },
        ],
        officialPortalUrl: 'https://pmsuryaghar.gov.in',
        loanPartnerInfo: 'Special tie-up assistance with Union Bank of India and nationalised banks for low-interest collateral-free solar loans.',
      },
      calculatorConfig: {
        avgTariffPerUnit: 8.5,
        unitsGeneratedPerKwPerYear: 1450,
        sqftNeededPerKw: 100,
        systemCostPerKwApprox: 60000,
      },
    });
    console.log('[Seed] Website Settings created');

    // 3. Products
    await Product.deleteMany();
    await Product.create([
      {
        title: 'Aqua-Sol Solar Water Heater (ETC / FPC)',
        slug: 'solar-water-heater',
        category: 'Solar Water Heater',
        shortDescription: 'Heavy-duty insulated stainless steel solar water heating systems for residential bungalows, apartments, and commercial institutions.',
        fullDescription: 'Aqua-Sol Solar Water Heaters deliver high thermal efficiency through advanced evacuated tube collectors (ETC) and flat plate collectors (FPC). Built with high-grade rust-proof inner tanks and high-density PUF insulation to maintain hot water even during chilly monsoon and winter days. Complete with corrosion-resistant powder-coated stand framing.',
        features: [
          'Food-grade high-purity stainless steel (SS 304 / SS 316) inner tank',
          'High-density PUF insulation for 48+ hours heat retention',
          'Triple-layer high-absorption Borosilicate glass vacuum tubes',
          'Compatible with hard water and overhead pressure setups',
          'Zero electricity consumption for daily bathing & kitchen hot water',
        ],
        specifications: [
          { label: 'Collector Type', value: 'Evacuated Tube Collector (ETC) / Flat Plate (FPC)' },
          { label: 'Inner Tank Material', value: 'High-Grade Stainless Steel (SS 304/316)' },
          { label: 'Insulation', value: '50mm Injected Polyurethane Foam (PUF)' },
          { label: 'Outer Cladding', value: 'Pre-coated Galvanized Steel / SS' },
          { label: 'Max Temperature', value: 'Up to 85°C' },
        ],
        capacities: [
          { capacity: '100 LPD', idealFor: 'Families of 2 to 3 persons' },
          { capacity: '150 LPD', idealFor: 'Families of 3 to 4 persons' },
          { capacity: '200 LPD', idealFor: 'Families of 4 to 6 persons' },
          { capacity: '300 LPD', idealFor: 'Large families & duplex bungalows' },
          { capacity: '500 LPD+', idealFor: 'Hostels, hotels, hospitals & societies' },
        ],
        warranty: '5 Years Comprehensive Manufacturer Warranty',
        images: [
          { url: '/uploads/solar_water_heater.png', alt: 'Aqua-Sol Solar Water Heater System', isPrimary: true },
        ],
        isFeatured: true,
        isPublished: true,
        order: 1,
      },
      {
        title: 'On-Grid Rooftop Solar PV System (PM Surya Ghar Approved)',
        slug: 'rooftop-solar-pv-system',
        category: 'Solar PV',
        shortDescription: 'High-efficiency Tier-1 Mono PERC / TOPCon rooftop solar power generation systems eligible for up to ₹78,000 subsidy under PM Surya Ghar Yojana.',
        fullDescription: 'Generate your own clean electricity directly on your rooftop and slash your monthly electricity bills by up to 90%+. Aqua-Sol Energy is an approved solar vendor providing turnkey execution including DISCOM net-metering approvals, structural engineering, Tier-1 solar modules, and cloud-connected inverters.',
        features: [
          'Eligible for PM Surya Ghar central subsidy up to ₹78,000',
          'Tier-1 Mono PERC & TOPCon high-efficiency bifacial/monofacial panels',
          'Smart WiFi-enabled On-Grid Inverter with real-time phone monitoring',
          'End-to-end MSEDCL net metering and DISCOM liaisoning',
          'Union Bank of India low-interest solar financing assistance',
        ],
        specifications: [
          { label: 'Module Efficiency', value: '> 21.5%' },
          { label: 'Inverter Type', value: 'Grid-Tied String Inverter with MPPT' },
          { label: 'Monitoring', value: 'Mobile App WiFi / Cloud Portal' },
          { label: 'Mounting Structure', value: 'Hot-Dip Galvanized / Anodized Aluminum' },
          { label: 'System Lifespan', value: '25+ Years Designed Operation' },
        ],
        capacities: [
          { capacity: '1 kW System', idealFor: '1-2 BHK flats (Saves ~120-140 units/month)' },
          { capacity: '2 kW System', idealFor: '2-3 BHK homes (Saves ~240-280 units/month)' },
          { capacity: '3 kW System', idealFor: 'Bungalows & large homes (Saves ~360-420 units/month)' },
          { capacity: '5 kW to 10 kW', idealFor: 'Villas, societies & commercial spaces' },
        ],
        warranty: '25 Years Linear Power Output Warranty on Panels | 5-10 Years on Inverter',
        images: [
          { url: '/uploads/pm_surya_ghar_family.png', alt: 'Aqua-Sol PM Surya Ghar Rooftop Solar', isPrimary: true },
        ],
        isFeatured: true,
        isPublished: true,
        order: 2,
      },
      {
        title: 'Commercial & Residential Heat Pump Water Heating System',
        slug: 'heat-pump-water-heater',
        category: 'Heat Pump',
        shortDescription: 'Energy-saving thermodynamic heat pump systems that save up to 75% power compared to conventional electric geysers, delivering 24x7 hot water.',
        fullDescription: 'Aqua-Sol Energy Heat Pumps extract latent heat from ambient air to heat water with remarkable efficiency. Ideal for high-demand residential bungalows, apartments, hotels, resorts, hostels, and healthcare centres requiring constant hot water in all seasons without depending purely on direct sunlight.',
        features: [
          'Saves up to 75% on electricity compared to traditional electric boilers/geysers',
          'Operates 24 hours a day, regardless of rain, clouds, or night-time',
          'High COP (Coefficient of Performance) up to 4.2',
          'Smart digital temperature controller with automated timers',
          'Eco-friendly R410A / R134a refrigerant',
        ],
        specifications: [
          { label: 'Operating Air Temp Range', value: '-7°C to 45°C' },
          { label: 'Hot Water Output Temp', value: 'Up to 60°C - 75°C' },
          { label: 'Refrigerant', value: 'Eco-Friendly R410A / R134a' },
          { label: 'Compressor', value: 'High-Efficiency Rotary / Scroll' },
        ],
        capacities: [
          { capacity: '150 LPD / 200 LPD', idealFor: 'Luxury villas & residential duplexes' },
          { capacity: '300 LPD / 500 LPD', idealFor: 'Large bungalows & small hotels' },
          { capacity: '1000 LPD to 5000 LPD+', idealFor: 'Commercial hotels, hospitals, and resorts' },
        ],
        warranty: '2 Years Comprehensive | 5 Years Compressor Warranty',
        images: [
          { url: '/uploads/heat_pump.png', alt: 'Aqua-Sol Heat Pump Unit', isPrimary: true },
        ],
        isFeatured: true,
        isPublished: true,
        order: 3,
      },
      {
        title: 'All-In-One Integrated Solar LED Street Light',
        slug: 'solar-street-light',
        category: 'Solar Street Light',
        shortDescription: 'Autonomous dusk-to-dawn solar street lighting with integrated monocrystalline solar panel, long-life LiFePO4 battery, and smart motion sensor.',
        fullDescription: 'Designed for residential layouts, gated communities, farms, industrial premises, village gram panchayats, and factory perimeters. Complete with zero wiring, automatic dusk-to-dawn switching, radar motion dimming, and weather-proof IP65/IP66 enclosure.',
        features: [
          'Integrated All-In-One compact design with zero cable trenching',
          'High-lumen energy-efficient Philips / Bridgelux LED chip array',
          'Built-in Grade-A Lithium Ferro Phosphate (LiFePO4) battery pack',
          'Smart PIR radar motion sensing with auto power-saving modes',
          'Heavy-duty weatherproof, rust-proof die-cast aluminum housing',
        ],
        specifications: [
          { label: 'LED Wattage', value: '15W / 24W / 40W / 60W / 90W' },
          { label: 'Battery Chemistry', value: 'LiFePO4 (2000+ Cycles)' },
          { label: 'Ingress Protection', value: 'IP65 / IP66 Weatherproof' },
          { label: 'Backup Autonomy', value: '2 Rainy / Cloudy Days' },
        ],
        capacities: [
          { capacity: '15W - 24W', idealFor: 'Internal society roads & garden pathways' },
          { capacity: '40W - 60W', idealFor: 'Main township gates, parking lots & farmhouses' },
          { capacity: '90W - 120W', idealFor: 'Industrial perimeter roads & public highways' },
        ],
        warranty: '3 Years Comprehensive Replacement Warranty',
        images: [
          { url: '/uploads/solar_street_light.png', alt: 'Aqua-Sol Solar Street Light', isPrimary: true },
        ],
        isFeatured: true,
        isPublished: true,
        order: 4,
      },
    ]);
    console.log('[Seed] Products created');

    // 4. Services (Directly verified from Brochure)
    await Service.deleteMany();
    await Service.create([
      {
        title: 'Solar Water Heater Servicing',
        marathiTitle: 'सोलर वॉटर हिटर सर्व्हिसिंग',
        slug: 'solar-water-heater-servicing',
        shortDescription: 'Complete descaling, collector flushing, and thermal performance restoration for all brands and capacities of solar water heaters.',
        fullDescription: 'Hard water scale deposits inside solar water heater tubes and tanks reduce heating efficiency drastically over time. Aqua-Sol Energy provides specialized chemical-free descaling, manifold flushing, rubber seal replacement, and vacuum tube cleaning to restore boiling hot water output.',
        processSteps: [
          { stepNumber: 1, title: 'Inspection', description: 'Thermal loss measurement, glass tube condition assessment, and leakage check.' },
          { stepNumber: 2, title: 'Flushing & Descaling', description: 'Safe removal of hard calcium and magnesium scale from tubes and inner tank.' },
          { stepNumber: 3, title: 'Gasket & Seal Replacement', description: 'Installing fresh food-grade silicon grommets to prevent water loss.' },
          { stepNumber: 4, title: 'Final Testing', description: 'Pressure test, refilling, and heat retention verification.' },
        ],
        benefits: [
          'Immediate 30-40% increase in water temperature',
          'Eliminates scale buildup and extends tank life',
          'Genuine replacement parts and silicon grommets',
          'Fast doorstep service across Pune and PCMC',
        ],
        isAMC: false,
        image: '/uploads/solar_water_heater.png',
        order: 1,
      },
      {
        title: 'Solar Tank Repairing',
        marathiTitle: 'सोलर टँक रिपेअरिंग',
        slug: 'solar-tank-repairing',
        shortDescription: 'Expert inner and outer tank repairs, weld leak mending, flange restoration, and replacement for damaged or corroded solar tanks.',
        fullDescription: 'Don’t throw away your entire solar water heater because of a damaged tank. Our specialized technicians repair stainless steel inner tank fractures, replace corroded nipple connections, fix electrical backup elements, and reconstruct damaged PUF insulation to make your system work like new.',
        processSteps: [
          { stepNumber: 1, title: 'Damage Diagnosis', description: 'Precise location of micro-cracks, pinhole leaks, and rust zones.' },
          { stepNumber: 2, title: 'TIG / Argon Welding', description: 'High-precision stainless steel welding with argon gas shielding.' },
          { stepNumber: 3, title: 'Re-Insulation', description: 'Restoration of compromised PUF insulation layer.' },
          { stepNumber: 4, title: 'Hydrostatic Pressure Test', description: 'Testing up to 4 bar pressure to ensure zero leaks.' },
        ],
        benefits: [
          'Saves 70% cost compared to purchasing a new solar water heater',
          'Restores full structural strength and pressure rating',
          'Specialist argon welding for food-grade stainless steel',
        ],
        isAMC: false,
        image: '/uploads/solar_water_heater.png',
        order: 2,
      },
      {
        title: 'Tank & Solar Panel Leakage Removal Work',
        marathiTitle: 'टँक आणि सोलर पॅनल लिकेज रिमुव्हल वर्क',
        slug: 'tank-solar-leakage-removal',
        shortDescription: 'Emergency troubleshooting and permanent leak stoppage for solar tanks, pipe manifolds, vacuum tube joints, and rooftop plumbing.',
        fullDescription: 'Water leakage from rooftop solar installations wastes precious water and causes roof seepage and ceiling dampness. Aqua-Sol Energy offers fast leak detection and rectification service for all piping, collector gaskets, air vents, cold water inlet non-return valves (NRV), and tank seams.',
        processSteps: [
          { stepNumber: 1, title: 'Rapid Site Arrival', description: 'Quick dispatch of trained technicians across Pune.' },
          { stepNumber: 2, title: 'Leak Isolation', description: 'Pinpointing joint failure, tube seal breakage, or cracked fitting.' },
          { stepNumber: 3, title: 'Seal & Pipe Replacement', description: 'Installing high-temperature CPVC/composite plumbing and UV-resistant seals.' },
          { stepNumber: 4, title: 'Rooftop Waterproofing Check', description: 'Ensuring structural safety and leak-free operation.' },
        ],
        benefits: [
          'Prevents structural dampness and terrace ceiling damage',
          'High-temperature UV-resistant silicon and Teflon sealing',
          'Same-day service available in Pune and surrounding regions',
        ],
        isAMC: false,
        image: '/uploads/solar_water_heater.png',
        order: 3,
      },
      {
        title: 'Annual Maintenance Contract (AMC) for Solar Water Heater',
        marathiTitle: 'We Undertake AMC for Solar Water Heater',
        slug: 'solar-water-heater-amc',
        shortDescription: 'Peace of mind with scheduled quarterly servicing, priority breakdown visits, preventive maintenance, and discounted spare parts.',
        fullDescription: 'Keep your solar water heating system operating at peak performance year-round. Our AMC packages cover regular descaling visits, tube cleaning, sacrificial anode replacement, plumbing checks, electrical backup inspection, and zero emergency visit charges for societies, bungalows, and institutions.',
        processSteps: [
          { stepNumber: 1, title: 'Periodic Scheduled Visits', description: 'Pre-scheduled preventive checkups before winter and summer.' },
          { stepNumber: 2, title: 'Scale Prevention Treatment', description: 'Regular descaling and sacrificial magnesium anode replenishment.' },
          { stepNumber: 3, title: 'Free Emergency Breakdown Calls', description: 'Priority response within 24 hours without service visit fees.' },
          { stepNumber: 4, title: 'Comprehensive Service Report', description: 'Documented health log of your heating asset.' },
        ],
        benefits: [
          'Ensures guaranteed hot water 365 days a year',
          'Significantly prolongs solar tank and collector lifespan',
          'Priority VIP support with discounted spare parts',
          'Special customized AMC packages for cooperative housing societies (CHS)',
        ],
        isAMC: true,
        image: '/uploads/solar_water_heater.png',
        order: 4,
      },
      {
        title: 'Rooftop Solar PV Installation & Net Metering',
        marathiTitle: 'रूफटॉप सोलर पीव्ही इंस्टॉलेशन आणि नेट मीटरिंग',
        slug: 'rooftop-solar-pv-installation',
        shortDescription: 'Turnkey solar panel installation with complete MSEDCL DISCOM approvals, structure fabrication, and PM Surya Ghar subsidy processing.',
        fullDescription: 'From initial 3D shadow analysis and roof structure engineering to panel installation, inverter commissioning, net meter testing, and subsidy release into your bank account, Aqua-Sol Energy handles every single step seamlessly.',
        processSteps: [
          { stepNumber: 1, title: 'Engineering Site Survey', description: 'Measuring roof area, shadow analysis, and electrical load sanction verification.' },
          { stepNumber: 2, title: 'Structural Mounting', description: 'Installing heavy-duty wind-resistant hot-dip galvanized mounting structures.' },
          { stepNumber: 3, title: 'Electrical Commissioning', description: 'Tier-1 panel wiring, inverter sync, DCDB/ACDB surge protection, and earthing.' },
          { stepNumber: 4, title: 'DISCOM Net Metering', description: 'Liaisoning with MSEDCL for bi-directional net meter installation & subsidy clearance.' },
        ],
        benefits: [
          'Official vendor credentials with certified solar engineers',
          'Hassle-free documentation and subsidy credit into bank account',
          'Top-tier Tier-1 solar modules with 25-year performance warranty',
        ],
        isAMC: false,
        image: '/uploads/pm_surya_ghar_family.png',
        order: 5,
      },
    ]);
    console.log('[Seed] Services created');

    // 5. Solutions
    await Solution.deleteMany();
    await Solution.create([
      {
        title: 'Residential Rooftop Solar (PM Surya Ghar)',
        slug: 'residential-rooftop-solar',
        subtitle: 'Zero electricity bills for homes with direct central government subsidy up to ₹78,000.',
        category: 'Residential',
        shortDescription: 'Customized 1 kW to 10 kW rooftop solar solutions for independent bungalows, row houses, and apartments with net-metering and bank loan support.',
        fullDescription: 'Harness Maharashtra’s abundant sunshine to power your lighting, fans, ACs, refrigerators, and washing machines. Any excess electricity generated flows back into the MSEDCL power grid through net metering, spinning your meter backwards.',
        keyBenefits: [
          'Up to ₹78,000 direct subsidy into your bank account under PM Surya Ghar',
          'Save up to 90% on your monthly MSEDCL electricity bills',
          'Union Bank low-interest collateral-free loan assistance',
          '25-year lifespan with payback in under 3 to 4 years',
        ],
        applications: ['Individual Bungalows', 'Row Houses', 'Duplexes', 'Cooperative Housing Society common areas'],
        image: '/uploads/pm_surya_ghar_family.png',
        iconName: 'Home',
        order: 1,
      },
      {
        title: 'Commercial & Industrial Solar PV',
        slug: 'commercial-industrial-solar',
        subtitle: 'Accelerated tax depreciation & massive operational cost reductions for enterprises.',
        category: 'Commercial',
        shortDescription: 'High-capacity on-grid and captive solar power plants for factories, educational campuses, hospitals, shopping malls, and offices.',
        fullDescription: 'Electricity is often one of the largest operational expenses for commercial and industrial operations. By installing commercial solar PV from Aqua-Sol Energy, businesses benefit from Section 32 40% accelerated depreciation, hedge against rising tariff rates, and meet green sustainability mandates.',
        keyBenefits: [
          'Drastic operational cost reduction per unit of power',
          'Accelerated depreciation (AD) tax benefits under IT Section 32',
          'Rapid ROI within 2.5 to 3.5 years',
          'Heavy-duty industrial elevated and shed-mount structures',
        ],
        applications: ['Manufacturing Plants', 'Warehouses', 'Hospitals', 'Schools & Colleges', 'Hotels & Banquet Halls'],
        image: '/uploads/pm_surya_ghar_family.png',
        iconName: 'Building',
        order: 2,
      },
      {
        title: 'Solar Water Heating Infrastructure',
        slug: 'solar-water-heating-solutions',
        subtitle: 'Zero electricity hot water systems from 100 LPD to 10,000+ LPD capacity.',
        category: 'Universal',
        shortDescription: 'Residential, institutional, and commercial solar water heating setups engineered for maximum heat retention and zero electricity dependency.',
        fullDescription: 'Heating water using standard electric geysers accounts for up to 30% of a home’s monthly power bill. Aqua-Sol Energy provides durable stainless steel systems that harness solar thermal energy to give hot water at zero operational cost.',
        keyBenefits: [
          '100% savings on water heating electricity expenses',
          '48+ hours heat retention with high-density polyurethane insulation',
          'Food-grade inner tank compatible with Pune city water conditions',
          'Backed by Aqua-Sol repair and AMC maintenance specialists',
        ],
        applications: ['Bungalows', 'Housing Societies', 'Hostels', 'Hotels & Lodges', 'Dairies & Food Processing'],
        image: '/uploads/solar_water_heater.png',
        iconName: 'Flame',
        order: 3,
      },
      {
        title: 'Energy-Efficient Heat Pump Solutions',
        slug: 'heat-pump-solutions',
        subtitle: 'Thermodynamic water heating saving up to 75% energy 24 hours a day in all weather.',
        category: 'Universal',
        shortDescription: 'Ideal for villas, hotels, and hospitals needing high volumes of hot water regardless of cloudy skies, night hours, or cold weather.',
        fullDescription: 'By transferring heat from ambient air into water rather than generating heat from electric elements, Aqua-Sol heat pumps deliver a Coefficient of Performance (COP) of up to 4.2. That means for every 1 unit of power used, you get over 4 units of thermal heating.',
        keyBenefits: [
          'Works round the clock 24x7 in rain, cold, and cloudy weather',
          '75% energy reduction compared to conventional geysers',
          'Centralized hot water supply for all bathrooms and kitchens',
          'Compact footprint suitable for terraces and service balconies',
        ],
        applications: ['Luxury Residences', 'Boutique Hotels & Resorts', 'Hospitals', 'Spas & Health Clubs'],
        image: '/uploads/heat_pump.png',
        iconName: 'Zap',
        order: 4,
      },
      {
        title: 'Solar Street & Perimeter Lighting',
        slug: 'solar-street-lighting',
        subtitle: 'Self-sustaining autonomous outdoor illumination with zero cabling.',
        category: 'Universal',
        shortDescription: 'Smart solar LED street lighting for townships, gated communities, farms, industrial parks, and village gram panchayats.',
        fullDescription: 'Aqua-Sol solar street lights offer complete off-grid reliability with built-in lithium batteries and solar panels on every pole. No underground trenching, no cabling expenses, and zero electricity bills.',
        keyBenefits: [
          'Zero wiring or cabling infrastructure required',
          'Automatic dusk-to-dawn operation with smart dimming sensors',
          'High-output LED lumens with 50,000+ hours lamp life',
          'Reliable LiFePO4 battery pack designed for Indian climate',
        ],
        applications: ['Gated Societies', 'Farmhouses & Plots', 'Factory Compounds', 'Public Roads & Parks'],
        image: '/uploads/solar_street_light.png',
        iconName: 'SunMedium',
        order: 5,
      },
    ]);
    console.log('[Seed] Solutions created');

    // 6. FAQs
    await FAQ.deleteMany();
    await FAQ.create([
      {
        question: 'What is PM Surya Ghar Muft Bijli Yojana, and how much subsidy can I get?',
        answer: 'PM Surya Ghar: Muft Bijli Yojana is the Central Government scheme offering direct financial assistance to households for installing rooftop solar. Eligible residential consumers receive a direct bank subsidy of ₹30,000 for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW and higher systems, helping you get up to 300 units of free electricity every month.',
        category: 'PM Surya Ghar',
        order: 1,
      },
      {
        question: 'How do I apply for the PM Surya Ghar subsidy, and will Aqua-Sol assist me?',
        answer: 'Yes, Aqua-Sol Energy handles the complete process from end to end! We register your application on the official national portal (pmsuryaghar.gov.in), obtain MSEDCL DISCOM technical feasibility approvals, complete the installation with approved components, coordinate net-meter commissioning, and submit documentation for direct subsidy transfer to your bank account.',
        category: 'PM Surya Ghar',
        order: 2,
      },
      {
        question: 'Is bank loan financing available for rooftop solar in Pune?',
        answer: 'Yes! As highlighted in our promotional brochure, special low-interest collateral-free solar loans are facilitated through Union Bank of India and partner public sector banks under PM Surya Ghar Yojana. The EMI is often lower than your current electricity bill savings!',
        category: 'PM Surya Ghar',
        order: 3,
      },
      {
        question: 'Do you repair leaking or old solar water heaters in Pune?',
        answer: 'Yes, absolutely! Aqua-Sol Energy specializes in all types of Solar Water Heater Servicing, Solar Tank Repairing (including argon welding of stainless steel inner tanks), and Tank & Solar Panel Leakage Removal Work across Pune and PCMC.',
        category: 'Solar Water Heaters & Servicing',
        order: 4,
      },
      {
        question: 'What is included in Aqua-Sol’s Solar Water Heater AMC?',
        answer: 'Our Annual Maintenance Contract (AMC) covers scheduled pre-winter and seasonal servicing, chemical-free tube descaling, gasket inspections, sacrificial anode replacement to protect against hard water rust, plumbing integrity checks, and priority breakdown attendance with zero inspection fees.',
        category: 'Solar Water Heaters & Servicing',
        order: 5,
      },
      {
        question: 'How much shadow-free roof area is required for 1 kW of solar PV?',
        answer: 'Typically, 1 kW of rooftop solar panels requires approximately 80 to 100 square feet of shadow-free rooftop area. A standard 3 kW residential system requires around 250 to 300 sq. ft.',
        category: 'Rooftop Solar PV',
        order: 6,
      },
    ]);
    console.log('[Seed] FAQs created');

    // 7. Blogs
    await Blog.deleteMany();
    await Blog.create([
      {
        title: 'PM Surya Ghar Muft Bijli Yojana: Complete Step-by-Step Guide for Pune Homeowners',
        slug: 'pm-surya-ghar-subsidy-guide-pune',
        category: 'Government Schemes & Subsidies',
        summary: 'Learn how to claim up to ₹78,000 direct subsidy and secure 300 free electricity units per month under the Central Government solar scheme.',
        content: `The PM Surya Ghar: Muft Bijli Yojana has transformed rooftop solar accessibility across Maharashtra. Homeowners in Pune can now install solar panels with direct subsidy credits directly transferred to their Aadhaar-linked bank accounts.\n\n### Subsidy Breakdown\n- **1 kW System**: ₹30,000 direct subsidy (ideal for small 1-2 BHK flats)\n- **2 kW System**: ₹60,000 direct subsidy (ideal for 2-3 BHK homes)\n- **3 kW & Above**: ₹78,000 maximum direct subsidy\n\n### Why Choose an Authorized Vendor?\nTo receive the subsidy, the solar system must be installed by an authorized vendor using DCR (Domestic Content Requirement) certified modules and BIS-approved inverters. Aqua-Sol Energy assists you throughout the MSEDCL net metering and portal approval steps.`,
        featuredImage: '/uploads/pm_surya_ghar_family.png',
        author: 'Aqua-Sol Technical Editorial Team',
        readTimeMinutes: 5,
        tags: ['PM Surya Ghar', 'Solar Subsidy', 'Pune Solar', 'MSEDCL'],
      },
      {
        title: 'Why Regular Descaling & Servicing Is Essential for Your Solar Water Heater in Pune',
        slug: 'solar-water-heater-servicing-descaling-tips',
        category: 'Solar Water Heater Tips',
        summary: 'Hard water in Pune can reduce solar water heating efficiency by over 40%. Here is why regular servicing and tank maintenance saves you money.',
        content: `Many residents notice that after 2-3 years of trouble-free operation, their solar water heater does not produce the same boiling hot water it once did. In most cases, the issue is not cloudy weather—it is hard water scale deposition.\n\n### What Happens Inside the Tubes?\nCalcium and magnesium salts form a thick white crust inside evacuated glass tubes and copper manifolds. This crust acts as a thermal insulator, preventing solar radiation from transferring into the water.\n\n### How Aqua-Sol Helps\nOur specialized technician team performs chemical-safe descaling, replaces worn silicon seals, and performs leak testing to restore maximum heating capability.`,
        featuredImage: '/uploads/solar_water_heater.png',
        author: 'Aqua-Sol Service Engineering',
        readTimeMinutes: 4,
        tags: ['Solar Servicing', 'Water Heater Repair', 'Pune Maintenance'],
      },
    ]);
    console.log('[Seed] Blogs created');

    // 8. Testimonials
    await Testimonial.deleteMany();
    await Testimonial.create([
      {
        name: 'Sachin Patil',
        location: 'Wagholi, Pune',
        systemType: '3 kW Rooftop Solar PV',
        rating: 5,
        feedback: 'Installed 3 kW solar with Aqua-Sol Energy under PM Surya Ghar. The ₹78,000 subsidy was credited directly to my bank account, and our MSEDCL bill dropped from ₹3,400 to almost zero! Highly recommended in Pune.',
        isVerified: true,
        isPublished: true,
      },
      {
        name: 'Dr. Ramesh Kulkarni',
        location: 'Kalyani Nagar, Pune',
        systemType: '200 LPD Solar Water Heater & Servicing',
        rating: 5,
        feedback: 'Aqua-Sol serviced and repaired our old leaking solar water heater tank with argon welding and complete descaling. Saved us having to buy a whole new unit. Excellent technical knowledge and prompt response.',
        isVerified: true,
        isPublished: true,
      },
      {
        name: 'Pooja Deshmukh',
        location: 'Chandan Nagar, Pune',
        systemType: 'Solar Street Lights & Heat Pump',
        rating: 5,
        feedback: 'We procured all-in-one solar street lights for our society road and a heat pump for our clubhouse. Professional installation and genuine local Pune team with great customer support.',
        isVerified: true,
        isPublished: true,
      },
    ]);
    console.log('[Seed] Testimonials created');

    // 9. Initial Sample Leads (so CRM dashboard displays meaningful graphs right away)
    await Lead.deleteMany();
    await Lead.create([
      {
        name: 'Vikas Jadhav',
        phone: '9822014589',
        email: 'vikas.jadhav@example.com',
        city: 'Pune',
        propertyType: 'Residential',
        interestedProduct: 'PM Surya Ghar Rooftop Solar',
        monthlyBill: 3200,
        estimatedCapacity: '3 kW',
        source: 'PM Surya Ghar Hub',
        status: 'New',
        message: 'Interested in PM Surya Ghar 3 kW installation for bungalow in Kharadi.',
      },
      {
        name: 'Amol Shinde',
        phone: '9422501234',
        email: 'amol.shinde@example.com',
        city: 'Pune',
        propertyType: 'Residential',
        interestedProduct: 'Solar Water Heater',
        interestedService: 'Solar Water Heater Servicing',
        source: 'Website Hero',
        status: 'Contacted',
        message: 'Need servicing and descaling for 200 LPD solar water heater.',
      },
      {
        name: 'Green Heights Cooperative Housing Society',
        phone: '9890123456',
        email: 'secretary.greenheights@example.com',
        city: 'Pune',
        propertyType: 'Housing Society/RWA',
        interestedProduct: 'Commercial Solar PV',
        estimatedCapacity: '15 kW',
        source: 'Contact Form',
        status: 'Site Survey',
        message: 'Looking for rooftop solar on society common terrace for lift and water pumps.',
      },
      {
        name: 'Manoj Gaikwad',
        phone: '9765432109',
        city: 'Pune',
        propertyType: 'Residential',
        interestedProduct: 'Solar Water Heater',
        interestedService: 'Solar Tank Repairing',
        source: 'WhatsApp Enquiry',
        status: 'Quotation Sent',
        message: 'Tank is leaking from the bottom nipple. Need repair estimate.',
      },
      {
        name: 'Sunil Bhosale',
        phone: '9823098765',
        city: 'Pune',
        propertyType: 'Residential',
        interestedProduct: 'PM Surya Ghar Rooftop Solar',
        monthlyBill: 2400,
        estimatedCapacity: '2 kW',
        source: 'Solar Calculator',
        status: 'Converted',
        message: 'Calculator estimate generated: 2 kW system. Completed installation and net meter.',
      },
    ]);
    console.log('[Seed] Sample Leads for CRM created');

    console.log('[Seed] Database initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('[Seed Error]:', error);
    process.exit(1);
  }
};

seedDB();
