// Re-framed authentic installation assets with proper headroom
import rooftopImg from '../assets/pm_surya_ghar_family.png';
import waterHeaterImg from '../assets/solar_water_heater.png';
import heatPumpImg from '../assets/heat_pump.png';
import streetLightImg from '../assets/solar_street_light.png';

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
    description: 'Turnkey residential rooftop solar installation with high-efficiency Mono PERC panels and net metering bi-directional meter commissioned under PM Surya Ghar Muft Bijli Yojana.',
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
    description: 'High-density PUF insulated stainless steel solar water heating system connected with pressure booster pumps for 3 bathrooms in a duplex villa.',
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
    description: '24 autonomous solar LED street lights installed along internal society perimeter roads with motion dimming and zero electrical cabling trenching.',
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
    description: 'Thermodynamic heat pump water heating system providing uninterrupted 24x7 hot water for 28 guest rooms and kitchen facility, slashing electricity bills by 72%.',
    annualSavings: '₹1,45,000 / year',
    co2OffsetTons: '14.2 Tons / yr',
    completionYear: '2023',
    isFeatured: true,
  },
];

export default projects;
