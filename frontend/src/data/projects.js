import rooftopImg from '../assets/rooftop_solar_1.jpg';
import waterHeaterImg from '../assets/solar_water_heater_2.jpg';
import heatPumpImg from '../assets/heat_pump_2.jpg';
import streetLightImg from '../assets/solar_street_light_2.png';

export const brandLegacy = {
  yearsOfExcellence: '15+',
  tagline: '15 Years of Illuminating a Sustainable Future',
  overview:
    'Welcome to Aquasol Energy, where we have been illuminating a sustainable future for the last 15 years. As a trusted leader in the solar market, we specialize in delivering high-efficiency solar energy solutions tailored to commercial, residential, and institutional needs.',
  reputation:
    'Over the past decade and a half, we have built a reputation for engineering excellence, reliability, and unparalleled service. Our commitment to green energy is reflected in our proud partnership with some of the region’s most prominent organizations and developers.',
  philosophy:
    'At Aquasol Energy, we don’t just install solar panels—we build long-term relationships anchored in trust and sustainable growth. Partner with us to transition to cleaner, smarter, and more cost-effective power.',
};

export const esteemedClients = [
  {
    name: 'Gera Kharadi',
    category: 'Real Estate Developer',
    description: 'Prominent real estate developer partnership',
    iconType: 'building',
  },
  {
    name: 'Nyati Group',
    category: 'Real Estate & Infrastructure',
    description: 'Premier infrastructure & builder group',
    iconType: 'building',
  },
  {
    name: 'Symbiosis University',
    category: 'Educational Institution',
    description: 'Premier university campus green energy partner',
    iconType: 'graduation-cap',
  },
  {
    name: 'Military Engineering Services (MES)',
    category: 'Defense & Govt Infrastructure',
    description: 'Defense establishment engineering partner',
    iconType: 'shield',
  },
  {
    name: 'Tanish Group',
    category: 'Real Estate Developer',
    description: 'Leading residential real estate developer',
    iconType: 'building',
  },
  {
    name: 'KSH International',
    category: 'Industrial & Logistics',
    description: 'Industrial manufacturing & logistics leader',
    iconType: 'factory',
  },
  {
    name: 'Dnyanraja Institutions',
    category: 'Academic Institutions',
    description: 'Academic institutions & educational campuses',
    iconType: 'graduation-cap',
  },
  {
    name: 'The Lexicon School',
    category: 'Educational Network',
    description: 'Renowned educational institution network',
    iconType: 'graduation-cap',
  },
  {
    name: 'Super Cartons',
    category: 'Industrial Manufacturing',
    description: 'Industrial & commercial client partner',
    iconType: 'factory',
  },
  {
    name: 'Global Highstreet',
    category: 'Commercial Retail Hub',
    description: 'Commercial real estate & retail complex',
    iconType: 'shopping-bag',
  },
  {
    name: 'Mehta Builders',
    category: 'Builders & Developers',
    description: 'Prominent construction & development group',
    iconType: 'building',
  },
  {
    name: 'Shri Manibhadra Group',
    category: 'Real Estate & Commercial',
    description: 'Commercial & residential group partner',
    iconType: 'building',
  },
];

export const projects = [
  {
    id: 'kalyani-nagar-rooftop-villa',
    slug: 'kalyani-nagar-rooftop-villa',
    title: '5 kW On-Grid Rooftop Solar Installation',
    clientName: 'Patil Residency',
    location: 'Kalyani Nagar, Pune',
    category: 'Rooftop Solar PV',
    capacity: '5 kW',
    image: rooftopImg,
    description:
      'Turnkey residential rooftop solar installation with high-efficiency Mono PERC panels and net metering bi-directional meter commissioned under PM Surya Ghar Muft Bijli Yojana.',
    annualSavings: '₹62,000 / year',
    co2OffsetTons: '6.4 Tons / yr',
    completionYear: '2024',
    isFeatured: true,
  },
  {
    id: 'baner-bungalow-water-heater',
    slug: 'baner-bungalow-water-heater',
    title: '300 LPD Stainless Steel Solar Water Heating System',
    clientName: 'Dr. Deshmukh Villa',
    location: 'Baner, Pune',
    category: 'Solar Water Heating',
    capacity: '300 LPD',
    image: waterHeaterImg,
    description:
      'High-density PUF insulated stainless steel solar water heating system connected with pressure booster pumps for 3 bathrooms in a duplex villa.',
    annualSavings: '₹18,500 / year',
    co2OffsetTons: '2.1 Tons / yr',
    completionYear: '2024',
    isFeatured: true,
  },
  {
    id: 'wagholi-gated-society-lighting',
    slug: 'wagholi-gated-society-lighting',
    title: 'All-In-One Solar Street Lighting for Gated Township',
    clientName: 'Green Meadows CHS',
    location: 'Wagholi, Pune',
    category: 'Solar Street Lighting',
    capacity: '24 Units (40W LED)',
    image: streetLightImg,
    description:
      '24 autonomous solar LED street lights installed along internal society perimeter roads with motion dimming and zero electrical cabling trenching.',
    annualSavings: '₹34,000 / year',
    co2OffsetTons: '3.8 Tons / yr',
    completionYear: '2024',
    isFeatured: true,
  },
  {
    id: 'hadapsar-resort-heat-pump',
    slug: 'hadapsar-resort-heat-pump',
    title: '1500 LPD Commercial Heat Pump Setup',
    clientName: 'Orchid Executive Club & Resort',
    location: 'Hadapsar, Pune',
    category: 'Commercial Heat Pump',
    capacity: '1500 LPD',
    image: heatPumpImg,
    description:
      'Thermodynamic heat pump water heating system providing uninterrupted 24x7 hot water for 28 guest rooms and kitchen facility, slashing electricity bills by 72%.',
    annualSavings: '₹1,45,000 / year',
    co2OffsetTons: '14.2 Tons / yr',
    completionYear: '2023',
    isFeatured: true,
  },
];

export default projects;
