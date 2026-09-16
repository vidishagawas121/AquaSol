import waterHeaterImg from '../assets/solar_water_heater_1.jpg';
import waterHeaterImg2 from '../assets/solar_water_heater_2.jpg';
import waterHeaterImg3 from '../assets/solar_water_heater_3.jpg';
import waterHeaterImg4 from '../assets/solar_water_heater_4.png';
import rooftopSolarImg from '../assets/rooftop_solar_1.jpg';
import rooftopSolarImg2 from '../assets/rooftop_solar_2.jpg';
import rooftopSolarImg3 from '../assets/rooftop_solar_3.jpg';
import rooftopSolarImg4 from '../assets/rooftop_solar_4.jpg';
import rooftopSolarImg5 from '../assets/rooftop_solar_5.jpg';
import rooftopSolarImg6 from '../assets/rooftop_solar_6.jpg';
import rooftopSolarImg7 from '../assets/rooftop_solar_7.jpg';
import rooftopSolarImg8 from '../assets/rooftop_solar_8.jpg';
import rooftopSolarImg9 from '../assets/rooftop_solar_9.jpg';
import rooftopSolarImg10 from '../assets/rooftop_solar_10.png';
import heatPumpImg from '../assets/heat_pump_1.png';
import heatPumpImg2 from '../assets/heat_pump_2.jpg';
import heatPumpImg3 from '../assets/heat_pump_3.jpg';
import heatPumpImg4 from '../assets/heat_pump_4.jpg';
import heatPumpImg5 from '../assets/heat_pump_5.jpg';
import streetLightImg from '../assets/solar_street_light_1.png';
import streetLightImg2 from '../assets/solar_street_light_2.png';
import streetLightImg3 from '../assets/solar_street_light_3.jpg';
import streetLightImg4 from '../assets/solar_street_light_4.jpg';
import streetLightImg5 from '../assets/solar_street_light_5.png';
import streetLightImg6 from '../assets/solar_street_light_6.png';

export const products = [
  {
    id: 'solar-water-heater',
    slug: 'solar-water-heater',
    title: 'Aquasol Solar Water Heater (ETC / FPC)',
    category: 'Solar Water Heater',
    image: waterHeaterImg,
    gallery: [
      waterHeaterImg,
      waterHeaterImg2,
      waterHeaterImg3,
      waterHeaterImg4,
    ],
    shortDescription: 'Heavy-duty insulated stainless steel solar water heating systems for residential bungalows, apartments, and commercial institutions.',
    fullDescription: 'Aquasol Solar Water Heaters deliver high thermal efficiency through advanced evacuated tube collectors (ETC) and flat plate collectors (FPC). Built with high-grade rust-proof inner tanks and high-density PUF insulation to maintain hot water even during chilly monsoon and winter days. Complete with corrosion-resistant powder-coated stand framing.',
    features: [
      'Food-grade high-purity stainless steel (SS 304 / SS 316) inner tank',
      'High-density PUF insulation for 48+ hours heat retention',
      'Triple-layer high-absorption Borosilicate glass vacuum tubes',
      'Compatible with hard water and overhead pressure setups',
      'Zero electricity consumption for daily bathing & kitchen hot water',
    ],
    specifications: [
      { label: 'Collector Type', value: 'Evacuated Tube Collector (ETC) / Flat Plate (FPC)' },
      { label: 'Inner Tank Material', value: 'Food-Grade Stainless Steel (SS 304/316)' },
      { label: 'Insulation', value: '50mm High-Density Polyurethane Foam (PUF)' },
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
    isFeatured: true,
  },
  {
    id: 'rooftop-solar-pv-system',
    slug: 'rooftop-solar-pv-system',
    title: 'On-Grid Rooftop Solar PV System (PM Surya Ghar Approved)',
    category: 'Solar PV',
    image: rooftopSolarImg,
    gallery: [
      rooftopSolarImg,
      rooftopSolarImg2,
      rooftopSolarImg3,
      rooftopSolarImg4,
      rooftopSolarImg5,
      rooftopSolarImg6,
      rooftopSolarImg7,
      rooftopSolarImg8,
      rooftopSolarImg9,
      rooftopSolarImg10,
    ],
    shortDescription: 'High-efficiency Tier-1 Mono PERC / TOPCon rooftop solar power generation systems eligible for up to ₹78,000 subsidy under PM Surya Ghar Yojana.',
    fullDescription: 'Generate your own clean electricity directly on your rooftop and slash your monthly electricity bills by up to 90%+. Aquasol Energy is an approved solar vendor providing turnkey execution including DISCOM net-metering approvals, structural engineering, Tier-1 solar modules, and cloud-connected inverters.',
    features: [
      'Eligible for PM Surya Ghar central subsidy up to ₹78,000',
      'Tier-1 Mono PERC & TOPCon high-efficiency bifacial/monofacial panels',
      'Smart WiFi-enabled On-Grid Inverter with real-time phone monitoring',
      'End-to-end MSEDCL net metering and DISCOM liaisoning',
      'Nationalised Bank low-interest solar financing assistance',
    ],
    specifications: [
      { label: 'Module Efficiency', value: '> 21.5% High Efficiency' },
      { label: 'Inverter Type', value: 'Grid-Tied String Inverter with Dual MPPT' },
      { label: 'Monitoring', value: 'Mobile App WiFi / Cloud Dashboard' },
      { label: 'Mounting Structure', value: 'Hot-Dip Galvanized (HDG) / Anodized Aluminum' },
      { label: 'System Lifespan', value: '25+ Years Designed Operation' },
    ],
    capacities: [
      { capacity: '1 kW System', idealFor: '1-2 BHK flats (Saves ~120-140 units/month)' },
      { capacity: '2 kW System', idealFor: '2-3 BHK homes (Saves ~240-280 units/month)' },
      { capacity: '3 kW System', idealFor: 'Bungalows & large homes (Saves ~360-420 units/month)' },
      { capacity: '5 kW to 10 kW', idealFor: 'Villas, societies & commercial spaces' },
    ],
    warranty: '25 Years Linear Power Output Warranty on Panels | 5-10 Years on Inverter',
    isFeatured: true,
  },
  {
    id: 'heat-pump-water-heater',
    slug: 'heat-pump-water-heater',
    title: 'Commercial & Residential Heat Pump Water Heating System',
    category: 'Heat Pump',
    image: heatPumpImg,
    gallery: [
      heatPumpImg,
      heatPumpImg2,
      heatPumpImg3,
      heatPumpImg4,
      heatPumpImg5,
    ],
    shortDescription: 'Energy-saving thermodynamic heat pump systems that save up to 75% power compared to conventional electric geysers, delivering 24x7 hot water.',
    fullDescription: 'Aquasol Energy Heat Pumps extract latent heat from ambient air to heat water with remarkable efficiency. Ideal for high-demand residential bungalows, apartments, hotels, resorts, hostels, and healthcare centres requiring constant hot water in all seasons without depending purely on direct sunlight.',
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
      { label: 'Compressor', value: 'High-Efficiency Rotary / Scroll Compressor' },
    ],
    capacities: [
      { capacity: '150 LPD / 200 LPD', idealFor: 'Luxury villas & residential duplexes' },
      { capacity: '300 LPD / 500 LPD', idealFor: 'Large bungalows & small hotels' },
      { capacity: '1000 LPD to 5000 LPD+', idealFor: 'Commercial hotels, hospitals, and resorts' },
    ],
    warranty: '2 Years Comprehensive | 5 Years Compressor Warranty',
    isFeatured: true,
  },
  {
    id: 'solar-street-light',
    slug: 'solar-street-light',
    title: 'All-In-One Integrated Solar LED Street Light',
    category: 'Solar Street Light',
    image: streetLightImg5,
    gallery: [
      streetLightImg5,
      streetLightImg,
      streetLightImg2,
      streetLightImg6,
      streetLightImg3,
      streetLightImg4,
    ],
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
      { label: 'Battery Chemistry', value: 'LiFePO4 (2000+ Deep Discharge Cycles)' },
      { label: 'Ingress Protection', value: 'IP65 / IP66 Weatherproof' },
      { label: 'Backup Autonomy', value: '2 Full Rainy / Cloudy Days' },
    ],
    capacities: [
      { capacity: '15W - 24W', idealFor: 'Internal society roads & garden pathways' },
      { capacity: '40W - 60W', idealFor: 'Main township gates, parking lots & farmhouses' },
      { capacity: '90W - 120W', idealFor: 'Industrial perimeter roads & public highways' },
    ],
    warranty: '3 Years Comprehensive Replacement Warranty',
    isFeatured: true,
  },
];

export default products;
