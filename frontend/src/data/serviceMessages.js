/**
 * Predefined message templates and service options for quotes, enquiries, and survey requests.
 */

export const serviceOptions = [
  // Solar Rooftop Solutions
  {
    value: 'PM Surya Ghar Rooftop Solar',
    label: 'PM Surya Ghar Rooftop Solar (Up to ₹78,000 Subsidy)',
    category: 'Rooftop Solar',
    defaultMessage: 'I am interested in installing On-Grid Rooftop Solar PV under PM Surya Ghar Yojana. Please share system size calculation, ₹78,000 subsidy details, and quotation.',
  },
  {
    value: 'Commercial Solar PV',
    label: 'Commercial & Industrial Solar Power Plant',
    category: 'Rooftop Solar',
    defaultMessage: 'We require a commercial/industrial on-grid solar power plant design and turnkey installation quotation for our facility/society in Maharashtra.',
  },
  {
    value: 'Rooftop Solar PV Installation & Net Metering',
    label: 'Rooftop Solar PV Installation & Net Metering',
    category: 'Rooftop Solar',
    defaultMessage: 'I want turnkey rooftop solar panel installation with MSEDCL net metering approvals and structure fabrication for my property.',
  },

  // Water Heating Solutions
  {
    value: 'Solar Water Heater',
    label: 'Aquasol Solar Water Heater (100 - 500+ LPD)',
    category: 'Water Heating',
    defaultMessage: 'I want a quote for installing a new Stainless Steel Solar Water Heater for my home/building in Pune. Please share available capacities (LPD) and pricing.',
  },
  {
    value: 'Heat Pump System',
    label: 'Heat Pump Water Heater (Residential & Commercial)',
    category: 'Water Heating',
    defaultMessage: 'I am interested in installing an energy-efficient Commercial/Residential Heat Pump Water Heater. Please share technical specs, capacity recommendation, and quotation.',
  },

  // Maintenance & Repair Services
  {
    value: 'Solar Water Heater Servicing & Descaling',
    label: 'Solar Water Heater Servicing & Descaling (₹799)',
    category: 'Maintenance & Repairs',
    defaultMessage: 'I need descaling and maintenance servicing for my rooftop solar water heater. Water temperature has reduced / need general system checkup in Pune.',
  },
  {
    value: 'Solar Tank Repairing (Argon Arc Welding)',
    label: 'Solar Tank Repairing (Argon Arc Welding - ₹1,499)',
    category: 'Maintenance & Repairs',
    defaultMessage: 'My solar water heater tank has leakage/rust issues. I need an engineer to inspect and perform Argon Arc (TIG) welding repair at my location.',
  },
  {
    value: 'Tank & Solar Panel Leakage Removal Work',
    label: 'Tank & Solar Panel Leakage Removal (₹999)',
    category: 'Maintenance & Repairs',
    defaultMessage: 'I am facing water leakage from the solar tank/manifold/vacuum tubes on my roof. Please arrange an emergency technician visit for leak rectification.',
  },
  {
    value: 'Annual Maintenance Contract (AMC) for Solar Water Heater',
    label: 'Annual Maintenance Contract (AMC) for Solar Water Heater (₹1,999/yr)',
    category: 'Maintenance & Repairs',
    defaultMessage: 'I would like details and pricing for Annual Maintenance Contract (AMC) for solar water heating systems (preventive quarterly visits & emergency breakdown support).',
  },
  {
    value: 'Solar Panel Brush Cleaning & Washing Work',
    label: 'Solar Panel Brush Cleaning & Washing (From ₹499)',
    category: 'Maintenance & Repairs',
    defaultMessage: 'I want professional rotary brush cleaning & washing for my rooftop solar panels to improve electricity generation and remove dust/scaling.',
  },

  // Other Solutions
  {
    value: 'Solar Street Light',
    label: 'Solar Street Lighting Systems',
    category: 'Lighting',
    defaultMessage: 'I need a quote for all-in-one commercial LED solar street lights with automatic dusk-to-dawn sensors and pole mounting.',
  },
  {
    value: 'General Enquiry',
    label: 'General Solar & Heating Consultation',
    category: 'Consultation',
    defaultMessage: 'Hello Aquasol Energy team, please contact me regarding solar solutions and technical assistance for my site in Pune.',
  },
];

/**
 * Returns the matching predefined message for a given service or product query.
 */
export const getPredefinedMessage = (serviceOrProduct = '') => {
  if (!serviceOrProduct) return serviceOptions[0].defaultMessage;

  const normalized = serviceOrProduct.toLowerCase().trim();

  // 1. Direct value or slug or label match
  const exact = serviceOptions.find(
    (opt) =>
      opt.value.toLowerCase() === normalized ||
      opt.label.toLowerCase() === normalized ||
      opt.value.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized.replace(/[^a-z0-9]/g, '')
  );
  if (exact) return exact.defaultMessage;

  // 2. Keyword-based matching
  if (normalized.includes('argon') || normalized.includes('tank repair') || normalized.includes('tank repairing')) {
    return serviceOptions.find((o) => o.value.includes('Tank Repairing')).defaultMessage;
  }
  if (normalized.includes('descal') || (normalized.includes('servicing') && normalized.includes('heater'))) {
    return serviceOptions.find((o) => o.value.includes('Servicing & Descaling')).defaultMessage;
  }
  if (normalized.includes('leak') || normalized.includes('removal')) {
    return serviceOptions.find((o) => o.value.includes('Leakage Removal')).defaultMessage;
  }
  if (normalized.includes('amc') || normalized.includes('maintenance contract')) {
    return serviceOptions.find((o) => o.value.includes('AMC')).defaultMessage;
  }
  if (normalized.includes('clean') || normalized.includes('brush') || normalized.includes('wash')) {
    return serviceOptions.find((o) => o.value.includes('Brush Cleaning')).defaultMessage;
  }
  if (normalized.includes('heat pump')) {
    return serviceOptions.find((o) => o.value.includes('Heat Pump')).defaultMessage;
  }
  if (normalized.includes('street light')) {
    return serviceOptions.find((o) => o.value.includes('Street Light')).defaultMessage;
  }
  if (normalized.includes('commercial') || normalized.includes('industrial') || normalized.includes('society')) {
    return serviceOptions.find((o) => o.value.includes('Commercial Solar')).defaultMessage;
  }
  if (normalized.includes('water heater') || normalized.includes('lpd') || normalized.includes('etc') || normalized.includes('fpc')) {
    return serviceOptions.find((o) => o.value === 'Solar Water Heater').defaultMessage;
  }
  if (normalized.includes('surya ghar') || normalized.includes('subsidy') || normalized.includes('pv') || normalized.includes('rooftop')) {
    return serviceOptions.find((o) => o.value === 'PM Surya Ghar Rooftop Solar').defaultMessage;
  }

  return `Hello Aquasol Energy, I am interested in ${serviceOrProduct}. Please share detailed specifications, subsidy/pricing, and installation timeline in Pune.`;
};

/**
 * Returns matching option value for select dropdowns.
 */
export const getMatchingServiceOption = (serviceOrProduct = '') => {
  if (!serviceOrProduct) return serviceOptions[0].value;
  const normalized = serviceOrProduct.toLowerCase().trim();

  const exact = serviceOptions.find(
    (opt) =>
      opt.value.toLowerCase() === normalized ||
      opt.label.toLowerCase() === normalized ||
      opt.value.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized.replace(/[^a-z0-9]/g, '')
  );
  if (exact) return exact.value;

  if (normalized.includes('argon') || normalized.includes('tank repair')) return 'Solar Tank Repairing (Argon Arc Welding)';
  if (normalized.includes('descal') || (normalized.includes('servicing') && normalized.includes('heater'))) return 'Solar Water Heater Servicing & Descaling';
  if (normalized.includes('leak')) return 'Tank & Solar Panel Leakage Removal Work';
  if (normalized.includes('amc')) return 'Annual Maintenance Contract (AMC) for Solar Water Heater';
  if (normalized.includes('clean') || normalized.includes('brush') || normalized.includes('wash')) return 'Solar Panel Brush Cleaning & Washing Work';
  if (normalized.includes('heat pump')) return 'Heat Pump System';
  if (normalized.includes('street light')) return 'Solar Street Light';
  if (normalized.includes('commercial') || normalized.includes('industrial')) return 'Commercial Solar PV';
  if (normalized.includes('water heater') || normalized.includes('lpd')) return 'Solar Water Heater';
  if (normalized.includes('surya ghar') || normalized.includes('pv') || normalized.includes('rooftop')) return 'PM Surya Ghar Rooftop Solar';

  return 'General Enquiry';
};
