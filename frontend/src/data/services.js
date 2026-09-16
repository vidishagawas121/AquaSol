import waterHeaterImg from '../assets/solar_water_heater_1.jpg';
import rooftopSolarImg from '../assets/rooftop_solar_1.jpg';
import maintenanceCleaningImg from '../assets/solar_maintenance_cleaning.jpg';
import maintenance2Img from '../assets/solar_maintenance_2.jpg';
import maintenance3Img from '../assets/solar_maintenance_3.jpg';
import maintenance4Img from '../assets/solar_maintenance_4.jpg';
import maintenance5Img from '../assets/solar_maintenance_5.jpg';
import maintenance6Img from '../assets/solar_maintenance_6.jpg';
import maintenance7Img from '../assets/solar_maintenance_7.jpg';
import maintenance8Img from '../assets/solar_maintenance_8.jpg';
import maintenance9Img from '../assets/solar_maintenance_9.jpg';
import maintenance10Img from '../assets/solar_maintenance_10.png';
import maintenance11Img from '../assets/solar_maintenance_11.jpg';

export const services = [
  {
    id: 'solar-water-heater-servicing',
    slug: 'solar-water-heater-servicing',
    title: 'Solar Water Heater Servicing & Descaling',
    marathiTitle: 'सोलर वॉटर हिटर सर्व्हिसिंग',
    category: 'Repair & Maintenance',
    image: waterHeaterImg,
    shortDescription: 'Complete descaling, collector flushing, and thermal performance restoration for all brands and capacities of solar water heaters.',
    fullDescription: 'Hard water scale deposits inside solar water heater tubes and tanks reduce heating efficiency drastically over time. Aqua-Sol Energy provides specialized chemical-free descaling, manifold flushing, rubber seal replacement, and vacuum tube cleaning to restore boiling hot water output.',
    features: [
      'Immediate 30-40% increase in water temperature',
      'Safe removal of hard calcium and magnesium scale from tubes',
      'Food-grade high-temperature silicon grommet replacement',
      'Full manifold pressure flush and leak prevention',
      'Doorstep technician visit across Pune, PCMC & surrounding regions',
    ],
    processSteps: [
      { stepNumber: 1, title: 'Inspection', description: 'Thermal loss measurement, glass tube condition assessment, and leakage check.' },
      { stepNumber: 2, title: 'Flushing & Descaling', description: 'Safe removal of hard calcium and magnesium scale from tubes and inner tank.' },
      { stepNumber: 3, title: 'Gasket & Seal Replacement', description: 'Installing fresh food-grade silicon grommets to prevent water loss.' },
      { stepNumber: 4, title: 'Final Testing', description: 'Pressure test, refilling, and heat retention verification.' },
    ],
    startingPrice: '₹799',
    priceUnit: 'per service visit',
    isAMC: false,
  },
  {
    id: 'solar-tank-repairing',
    slug: 'solar-tank-repairing',
    title: 'Solar Tank Repairing (Argon Arc Welding)',
    marathiTitle: 'सोलर टँक रिपेअरिंग',
    category: 'Specialized Repair',
    image: maintenance2Img,
    shortDescription: 'Expert inner and outer tank repairs, weld leak mending with food-grade Argon Arc Welding, flange restoration, and nipple replacement.',
    fullDescription: 'Don’t throw away your entire solar water heater because of a damaged tank. Our specialized technicians repair stainless steel inner tank fractures, replace corroded nipple connections, fix electrical backup elements, and reconstruct damaged PUF insulation to make your system work like new.',
    features: [
      'High-precision food-grade Argon Arc (TIG) Welding on stainless steel',
      'Saves 70% cost compared to buying a completely new solar water heater',
      'Hydrostatic pressure testing up to 4 bar to guarantee zero leaks',
      'Corrosion-resistant nipple and socket replacement',
      'Thermal PUF insulation restoration',
    ],
    processSteps: [
      { stepNumber: 1, title: 'Damage Diagnosis', description: 'Precise location of micro-cracks, pinhole leaks, and rust zones.' },
      { stepNumber: 2, title: 'TIG / Argon Welding', description: 'High-precision stainless steel welding with argon gas shielding.' },
      { stepNumber: 3, title: 'Re-Insulation', description: 'Restoration of compromised PUF insulation layer.' },
      { stepNumber: 4, title: 'Hydrostatic Pressure Test', description: 'Testing up to 4 bar pressure to ensure zero leaks.' },
    ],
    startingPrice: '₹1,499',
    priceUnit: 'per repair job',
    isAMC: false,
  },
  {
    id: 'tank-solar-leakage-removal',
    slug: 'tank-solar-leakage-removal',
    title: 'Tank & Solar Panel Leakage Removal Work',
    marathiTitle: 'टँक आणि सोलर पॅनल लिकेज रिमुव्हल वर्क',
    category: 'Emergency Repair',
    image: maintenance3Img,
    shortDescription: 'Emergency troubleshooting and permanent leak stoppage for solar tanks, pipe manifolds, vacuum tube joints, and rooftop plumbing.',
    fullDescription: 'Water leakage from rooftop solar installations wastes precious water and causes roof seepage and ceiling dampness. Aqua-Sol Energy offers fast leak detection and rectification service for all piping, collector gaskets, air vents, cold water inlet non-return valves (NRV), and tank seams.',
    features: [
      'Rapid emergency dispatch across Pune and PCMC',
      'Prevents structural dampness and terrace ceiling damage',
      'High-temperature UV-resistant silicon and Teflon sealing',
      'Replacement of broken or chipped vacuum glass tubes',
      'Non-return valve (NRV) and air vent pipe servicing',
    ],
    processSteps: [
      { stepNumber: 1, title: 'Rapid Site Arrival', description: 'Quick dispatch of trained technicians across Pune.' },
      { stepNumber: 2, title: 'Leak Isolation', description: 'Pinpointing joint failure, tube seal breakage, or cracked fitting.' },
      { stepNumber: 3, title: 'Seal & Pipe Replacement', description: 'Installing high-temperature CPVC/composite plumbing and UV-resistant seals.' },
      { stepNumber: 4, title: 'Rooftop Waterproofing Check', description: 'Ensuring structural safety and leak-free operation.' },
    ],
    startingPrice: '₹999',
    priceUnit: 'per job',
    isAMC: false,
  },
  {
    id: 'solar-water-heater-amc',
    slug: 'solar-water-heater-amc',
    title: 'Annual Maintenance Contract (AMC) for Solar Water Heater',
    marathiTitle: 'We Undertake AMC for Solar Water Heater',
    category: 'Maintenance AMC',
    image: maintenance4Img,
    shortDescription: 'Peace of mind with scheduled quarterly servicing, priority breakdown visits, preventive maintenance, and discounted spare parts.',
    fullDescription: 'Keep your solar water heating system operating at peak performance year-round. Our AMC packages cover regular descaling visits, tube cleaning, sacrificial anode replacement, plumbing checks, electrical backup inspection, and zero emergency visit charges for societies, bungalows, and institutions.',
    features: [
      'Ensures guaranteed hot water 365 days a year',
      'Significantly prolongs solar tank and collector lifespan',
      'Scheduled preventive checkups before winter and summer',
      'Free emergency breakdown visits with zero inspection fees',
      'Special discounted rates for Cooperative Housing Societies (CHS)',
    ],
    processSteps: [
      { stepNumber: 1, title: 'Periodic Scheduled Visits', description: 'Pre-scheduled preventive checkups before winter and summer.' },
      { stepNumber: 2, title: 'Scale Prevention Treatment', description: 'Regular descaling and sacrificial magnesium anode replenishment.' },
      { stepNumber: 3, title: 'Free Emergency Breakdown Calls', description: 'Priority response within 24 hours without service visit fees.' },
      { stepNumber: 4, title: 'Comprehensive Service Report', description: 'Documented health log of your heating asset.' },
    ],
    startingPrice: '₹1,999',
    priceUnit: 'per year',
    isAMC: true,
  },
  {
    id: 'solar-panel-brush-cleaning',
    slug: 'solar-panel-brush-cleaning',
    title: 'Solar Panel Brush Cleaning & Washing Work',
    marathiTitle: 'सोलर पॅनल ब्रश क्लिनिंग व वॉशिंग वर्क',
    category: 'Cleaning & Efficiency',
    image: maintenanceCleaningImg,
    shortDescription: 'Professional scratch-free telescopic rotary brush cleaning and demineralized washing to boost solar power generation by up to 25-30%.',
    fullDescription: 'Dust, bird droppings, soot, pollution, and dirt buildup form an opaque layer on solar panels, severely obstructing sunlight and causing up to 30% power generation loss (soiling loss). Aqua-Sol Energy provides specialized telescopic rotary brush cleaning, soft-bristle water-fed pole cleaning, and chemical-free demineralized water washing that removes stubborn grime safely without scratching anti-reflective glass coatings or voiding module warranties.',
    features: [
      'Restores up to 20-30% lost electricity power generation immediately',
      'Ultra-soft scratch-resistant rotary and telescopic solar brush equipment',
      'TDS-controlled demineralized water prevents hard mineral scaling on glass',
      'Micro-crack inspection and thermal hotspot detection included',
      'One-time deep cleaning visits & recurring monthly/quarterly maintenance plans',
    ],
    processSteps: [
      { stepNumber: 1, title: 'Pre-Cleaning Generation Check', description: 'Assessing inverter generation readings and soiling loss percentage.' },
      { stepNumber: 2, title: 'Dry Brush Dusting', description: 'Loosening coarse dust and abrasive debris with soft-fiber solar brushes.' },
      { stepNumber: 3, title: 'Water-Fed Rotary Brush Wash', description: 'Deep scrubbing using low-pressure demineralized water to dissolve stains and bird droppings.' },
      { stepNumber: 4, title: 'Squeegee Wipe & Performance Verification', description: 'Streak-free drying and re-checking generation increase on the inverter app.' },
    ],
    startingPrice: '₹499',
    priceUnit: 'per cleaning visit / plan',
    isAMC: false,
  },
  {
    id: 'rooftop-solar-pv-installation',
    slug: 'rooftop-solar-pv-installation',
    title: 'Rooftop Solar PV Installation & Net Metering',
    marathiTitle: 'रूफटॉप सोलर पीव्ही इंस्टॉलेशन आणि नेट मीटरिंग',
    category: 'Turnkey Installation',
    image: rooftopSolarImg,
    shortDescription: 'Turnkey solar panel installation with complete MSEDCL DISCOM approvals, structure fabrication, and PM Surya Ghar subsidy processing.',
    fullDescription: 'From initial 3D shadow analysis and roof structure engineering to panel installation, inverter commissioning, net meter testing, and subsidy release into your bank account, Aqua-Sol Energy handles every single step seamlessly.',
    features: [
      'Official authorized vendor credentials with certified solar engineers',
      'Direct central subsidy up to ₹78,000 under PM Surya Ghar Yojana',
      'Hassle-free MSEDCL net metering and DISCOM liaisoning included',
      'Heavy-duty wind-resistant hot-dip galvanized mounting structures',
      'Union Bank of India solar loan facilitation assistance',
    ],
    processSteps: [
      { stepNumber: 1, title: 'Engineering Site Survey', description: 'Measuring roof area, shadow analysis, and electrical load sanction verification.' },
      { stepNumber: 2, title: 'Structural Mounting', description: 'Installing heavy-duty wind-resistant hot-dip galvanized mounting structures.' },
      { stepNumber: 3, title: 'Electrical Commissioning', description: 'Tier-1 panel wiring, inverter sync, DCDB/ACDB surge protection, and earthing.' },
      { stepNumber: 4, title: 'DISCOM Net Metering', description: 'Liaisoning with MSEDCL for bi-directional net meter installation & subsidy clearance.' },
    ],
    startingPrice: 'Custom Quote',
    priceUnit: 'Turnkey with Subsidy',
    isAMC: false,
  },
];

// Dedicated Authentic Field Maintenance & On-Site Servicing Gallery
export const maintenanceGallery = [
  {
    id: 'mg-1',
    title: 'Solar Collector Panel Cleaning & Hard-Water Descaling',
    marathiTitle: 'सोलर पॅनल व कलेक्टर केमिकल-फ्री क्लिनिंग',
    category: 'Collector Washing',
    image: maintenanceCleaningImg,
    description: 'Technician conducting high-pressure foam wash, brush scrubbing, and scale removal on flat-plate solar collectors on a Pune terrace.'
  },
  {
    id: 'mg-7',
    title: 'Aqua-Sol Heavy Stainless Steel Solar Tank Installation',
    marathiTitle: 'अ‍ॅक्वा-सोल ब्रँडेड स्टेनलेस स्टील सोलर टँक',
    category: 'Tank Fitting & Brand',
    image: maintenance7Img,
    description: 'Official Aqua-Sol Energy insulated stainless steel solar water heater tank with electric backup element mounted on heavy-duty rooftop frame.'
  },
  {
    id: 'mg-2',
    title: 'Stainless Steel Solar Tank Mounting & Argon Arc Weld Repair',
    marathiTitle: 'सोलर टँक फिटिंग व आर्गॉन वेल्डिंग',
    category: 'Tank Repair & Fitting',
    image: maintenance2Img,
    description: 'Aqua-Sol engineering team installing and repairing a heavy-duty stainless steel insulated solar water heater storage tank on rooftop structure.'
  },
  {
    id: 'mg-8',
    title: 'Precision Rooftop Rope Rigging & Tank Hoisting',
    marathiTitle: 'सोलर टँक सुरक्षित रोपिंग व रूफटॉप लिफ्टिंग',
    category: 'On-Site Rigging & Hoisting',
    image: maintenance8Img,
    description: 'Technicians safely hoisting and maneuvering heavy stainless steel solar hot water tanks onto elevated multi-story building terraces in Pune.'
  },
  {
    id: 'mg-3',
    title: 'Commercial Flat Plate Collector (FPC) Bank Servicing',
    marathiTitle: 'कमर्शियल एफपीसी वॉटर हिटर सर्व्हिसिंग',
    category: 'FPC Servicing',
    image: maintenance3Img,
    description: 'Rooftop inspection, manifold leak testing, rubber grommet replacement, and thermal restoration for multi-panel Flat Plate Collector systems.'
  },
  {
    id: 'mg-9',
    title: 'Multi-Bank Flat Plate Solar Thermal Array Maintenance',
    marathiTitle: 'मोठ्या क्षमतेची सोलर कलेक्टर बँक मेंटेनन्स',
    category: 'FPC Servicing',
    image: maintenance9Img,
    description: 'Large-scale commercial solar water heating collector array servicing and pipe pressure testing overlooking modern IT towers in Pune.'
  },
  {
    id: 'mg-4',
    title: 'Multi-Unit Housing Society Rooftop Solar Network & AMC',
    marathiTitle: 'सोसायटी सोलर वॉटर हिटर मेंटेनन्स व एएमसी',
    category: 'Housing Society AMC',
    image: maintenance4Img,
    description: 'Large-scale residential apartment complex rooftop solar water heating system installation and annual preventive maintenance in Pune.'
  },
  {
    id: 'mg-10',
    title: 'Rooftop Staging of High-Density Insulated Solar Tanks',
    marathiTitle: 'इन्सुलेटेड सोलर टँक रूफटॉप स्टेजिंग',
    category: 'Housing Society AMC',
    image: maintenance10Img,
    description: 'Crew staging and preparing high-density PUF insulated solar water heater tanks for multi-flat society distribution on a Pune terrace.'
  },
  {
    id: 'mg-5',
    title: 'Hybrid Rooftop Solar PV & Solar Water Heater Care',
    marathiTitle: 'रूफटॉप सोलर पीव्ही आणि वॉटर हिटर मेंटेनन्स',
    category: 'Hybrid Solar PV Care',
    image: maintenance5Img,
    description: 'Combined rooftop solar power generation modules and solar hot water systems under regular technical inspection and panel cleaning.'
  },
  {
    id: 'mg-6',
    title: 'Direct Field Logistics & New Tank Unloading',
    marathiTitle: 'ओरिजिनल स्पेअर पार्ट्स व टँक डिलिव्हरी',
    category: 'Delivery & Genuine Spares',
    image: maintenance6Img,
    description: 'On-site logistics crew safely unloading fresh insulated solar tanks, collectors, and components directly from transport truck at customer site.'
  },
  {
    id: 'mg-11',
    title: 'Ground Staging & Safe Lifting of Insulated Tanks',
    marathiTitle: 'ग्राउंड लेव्हल स्टेजिंग व सेफ लिफ्टिंग',
    category: 'Delivery & Genuine Spares',
    image: maintenance11Img,
    description: 'Ground-level staging and rope rigging of bubble-wrapped insulated solar tanks ready for multi-story rooftop installation.'
  }
];

export default services;
