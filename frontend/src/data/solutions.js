import rooftopImg from '../assets/pm_surya_ghar_family.png';
import waterHeaterImg from '../assets/solar_water_heater.png';
import heatPumpImg from '../assets/heat_pump.png';
import streetLightImg from '../assets/solar_street_light.png';

export const solutions = [
  {
    id: 'residential-rooftop-solar',
    slug: 'residential-rooftop-solar',
    title: 'Residential Rooftop Solar (PM Surya Ghar)',
    subtitle: 'Zero electricity bills for homes with direct central government subsidy up to ₹78,000.',
    category: 'Residential',
    image: rooftopImg,
    shortDescription: 'Customized 1 kW to 10 kW rooftop solar solutions for independent bungalows, row houses, and apartments with net-metering and bank loan support.',
    fullDescription: 'Harness Maharashtra’s abundant sunshine to power your lighting, fans, ACs, refrigerators, and washing machines. Any excess electricity generated flows back into the MSEDCL power grid through net metering, spinning your meter backwards.',
    keyBenefits: [
      'Up to ₹78,000 direct subsidy into your bank account under PM Surya Ghar',
      'Save up to 90% on your monthly MSEDCL electricity bills',
      'Union Bank low-interest collateral-free loan assistance',
      '25-year lifespan with payback in under 3 to 4 years',
    ],
    features: [
      'Tier-1 Mono PERC & Bifacial solar panels',
      'Smart mobile WiFi monitoring app for daily generation tracking',
      'End-to-end MSEDCL net metering and DISCOM clearance',
      'Heavy-duty elevated aluminum / GI mounting structures',
    ],
    applications: ['Independent Bungalows', 'Row Houses', 'Duplexes', 'Cooperative Housing Society common areas'],
  },
  {
    id: 'commercial-industrial-solar',
    slug: 'commercial-industrial-solar',
    title: 'Commercial & Industrial Solar PV',
    subtitle: 'Accelerated tax depreciation & massive operational cost reductions for enterprises.',
    category: 'Commercial',
    image: rooftopImg,
    shortDescription: 'High-capacity on-grid and captive solar power plants for factories, educational campuses, hospitals, shopping malls, and offices.',
    fullDescription: 'Electricity is often one of the largest operational expenses for commercial and industrial operations. By installing commercial solar PV from Aqua-Sol Energy, businesses benefit from Section 32 40% accelerated depreciation, hedge against rising tariff rates, and meet green sustainability mandates.',
    keyBenefits: [
      'Drastic operational cost reduction per unit of power',
      'Accelerated depreciation (AD) tax benefits under IT Section 32',
      'Rapid ROI within 2.5 to 3.5 years',
      'Heavy-duty industrial elevated and shed-mount structures',
    ],
    features: [
      'High-capacity string inverters with remote SCADA monitoring',
      'Custom sheet metal shed mounting without roof punctures',
      'Zero-export device integration for captive diesel generator setups',
      'Preventive electrical audit and safety earthing mesh',
    ],
    applications: ['Manufacturing Plants', 'Warehouses', 'Hospitals', 'Schools & Colleges', 'Hotels & Banquet Halls'],
  },
  {
    id: 'solar-water-heating-solutions',
    slug: 'solar-water-heating-solutions',
    title: 'Solar Water Heating Infrastructure',
    subtitle: 'Zero electricity hot water systems from 100 LPD to 10,000+ LPD capacity.',
    category: 'Universal',
    image: waterHeaterImg,
    shortDescription: 'Residential, institutional, and commercial solar water heating setups engineered for maximum heat retention and zero electricity dependency.',
    fullDescription: 'Heating water using standard electric geysers accounts for up to 30% of a home’s monthly power bill. Aqua-Sol Energy provides durable stainless steel systems that harness solar thermal energy to give hot water at zero operational cost.',
    keyBenefits: [
      '100% savings on water heating electricity expenses',
      '48+ hours heat retention with high-density polyurethane insulation',
      'Food-grade inner tank compatible with Pune city water conditions',
      'Backed by Aqua-Sol repair and AMC maintenance specialists',
    ],
    features: [
      '3-layer borosilicate vacuum tubes',
      'Grade SS 304/316 inner food-safe tank',
      'Compatible with pressure pump booster lines',
      'Anti-scale sacrificial anode bar protection',
    ],
    applications: ['Bungalows', 'Housing Societies', 'Hostels', 'Hotels & Lodges', 'Dairies & Food Processing'],
  },
  {
    id: 'heat-pump-solutions',
    slug: 'heat-pump-solutions',
    title: 'Energy-Efficient Heat Pump Solutions',
    subtitle: 'Thermodynamic water heating saving up to 75% energy 24 hours a day in all weather.',
    category: 'Universal',
    image: heatPumpImg,
    shortDescription: 'Ideal for villas, hotels, and hospitals needing high volumes of hot water regardless of cloudy skies, night hours, or cold weather.',
    fullDescription: 'By transferring heat from ambient air into water rather than generating heat from electric elements, Aqua-Sol heat pumps deliver a Coefficient of Performance (COP) of up to 4.2. That means for every 1 unit of power used, you get over 4 units of thermal heating.',
    keyBenefits: [
      'Works round the clock 24x7 in rain, cold, and cloudy weather',
      '75% energy reduction compared to conventional geysers',
      'Centralized hot water supply for all bathrooms and kitchens',
      'Compact footprint suitable for terraces and service balconies',
    ],
    features: [
      'High-efficiency rotary / scroll compressor',
      'Digital touch controller with scheduled timer cycles',
      'Eco-friendly R410A refrigerant',
      'Dual heating capability with solar thermal integration',
    ],
    applications: ['Luxury Residences', 'Boutique Hotels & Resorts', 'Hospitals', 'Spas & Health Clubs'],
  },
  {
    id: 'solar-street-lighting',
    slug: 'solar-street-lighting',
    title: 'Solar Street & Perimeter Lighting',
    subtitle: 'Self-sustaining autonomous outdoor illumination with zero cabling.',
    category: 'Universal',
    image: streetLightImg,
    shortDescription: 'Smart solar LED street lighting for townships, gated communities, farms, industrial parks, and village gram panchayats.',
    fullDescription: 'Aqua-Sol solar street lights offer complete off-grid reliability with built-in lithium batteries and solar panels on every pole. No underground trenching, no cabling expenses, and zero electricity bills.',
    keyBenefits: [
      'Zero wiring or cabling infrastructure required',
      'Automatic dusk-to-dawn operation with smart dimming sensors',
      'High-output LED lumens with 50,000+ hours lamp life',
      'Reliable LiFePO4 battery pack designed for Indian climate',
    ],
    features: [
      'PIR radar motion detection for intelligent energy conservation',
      'Weather-resistant IP65/IP66 die-cast aluminum enclosure',
      'Lithium Ferro Phosphate battery with 2000+ cycle lifespan',
      'Quick mounting on existing poles or walls',
    ],
    applications: ['Gated Societies', 'Farmhouses & Plots', 'Factory Compounds', 'Public Roads & Parks'],
  },
];

export default solutions;
