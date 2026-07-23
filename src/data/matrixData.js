// ============================================================
// Engineering Lifecycle Matrix — authoritative data
// Mock source of truth until Supabase is wired (see src/lib).
// ============================================================

export const phases = [
  { code: 'P1', label: 'Inputs Gathering' },
  { code: 'P2', label: 'System Requirements' },
  { code: 'P3a', label: 'Architecture co-Design' },
  { code: 'P3b', label: 'Basic co-Design' },
  { code: 'P3c', label: 'Detailed co-Design' },
  { code: 'P4', label: 'Prototyping & Validation' },
  { code: 'P5', label: 'System Integration Test' },
  { code: 'P6', label: 'NPI & Process co-Design' },
  { code: 'P7', label: 'Product Release' },
  { code: 'P8', label: 'Production & Commissioning' },
  { code: 'P9', label: 'Operations & Maintenance' },
  { code: 'P10', label: 'End-of-Life & Decommissioning' },
];

export const companies = [
  { id: 'mixot', name: 'MIXOT', sector: 'Industrial Automation / Founder', years: '2025–2026' },
  { id: 'alstom', name: 'Alstom', sector: 'Rail / Urban Transit Systems', years: '2023–2025' },
  { id: 'thermofisher', name: 'Thermo Fisher Scientific', displayName: 'Thermo&nbsp;Fisher<br>Scientific', sector: 'Advanced Manufacturing / Lab Instruments', years: '2021–2022' },
  { id: 'tenaris', name: 'Tenaris', sector: 'Oil & Gas / Premium Connections', years: '2018–2020' },
];

// Authoritative state grid (status per company × phase)
export const statusMap = {
  mixot: {
    P1: 'active', P2: 'partial', P3a: 'inactive', P3b: 'inactive',
    P3c: 'inactive', P4: 'inactive', P5: 'inactive', P6: 'inactive',
    P7: 'inactive', P8: 'inactive', P9: 'inactive', P10: 'inactive',
  },
  tenaris: {
    P1: 'partial', P2: 'active', P3a: 'inactive', P3b: 'active',
    P3c: 'active', P4: 'active', P5: 'inactive', P6: 'active',
    P7: 'partial', P8: 'inactive', P9: 'partial', P10: 'inactive',
  },
  thermofisher: {
    P1: 'active', P2: 'inactive', P3a: 'inactive', P3b: 'active',
    P3c: 'active', P4: 'inactive', P5: 'active', P6: 'inactive',
    P7: 'inactive', P8: 'inactive', P9: 'inactive', P10: 'inactive',
  },
  alstom: {
    P1: 'inactive', P2: 'active', P3a: 'active', P3b: 'active',
    P3c: 'inactive', P4: 'partial', P5: 'inactive', P6: 'partial',
    P7: 'active', P8: 'active', P9: 'inactive', P10: 'inactive',
  },
};

// Authoritative modal copy, keyed `${company_id}_${phase_code}`
export const cellContent = {
  tenaris_P1: {
    title: 'Saudi Aramco project',
    description: 'Collected and translated Mechanical/Industrial requirements through client specifications, commercial front end contacts and internal Subject Matter Expert (SME) input.',
    metrics: [''],
    stamp: '',
  },
  tenaris_P2: {
    title: 'ADNOC Mega-tender',
    description: 'Co‑authored the technical sections of a commercial offer, including the product qualification strategy and FEA technical notes.',
    metrics: ['Tenaris long-term contract award for 1.9 billion USD'],
    stamp: 'VALIDATED',
  },
  tenaris_P3b: {
    title: 'TBG1™ Parametric design with FEA',
    description: 'Performed over 20 FEA studies across 10 conceptual designs, using Matlab post‑processing scripts to support development of a low-end product.',
    metrics: ['US20250155056A1 patent and commercial release.'],
    stamp: 'VALIDATED',
  },
  tenaris_P3c: {
    title: 'Product family design leader',
    description: 'Led detailed design of product family for high-pressure oil and gas applications, ensuring full compliance with [API 5C5] standards and alignment with proprietary manufacturing processes.',
    metrics: ['+10 Product family minor developments without failures'],
    stamp: 'VALIDATED',
  },
  tenaris_P4: {
    title: 'Full-Scale Testing',
    description: 'Designed and executed a validation program, including [DOE] planning, sample manufacturing coordination, and 1-week test, on a simulated oil rig, with an 8-member rig crew with negative results.',
    metrics: ['Detailed failure analysis and development process room for improvement guidelines.'],
    stamp: 'VALIDATED',
  },
  tenaris_P6: {
    title: 'Opto-Mechanical Inspection System',
    description: 'Engineered an opto‑mechanical inspection system integrated into the production line for quality control, enabling [100% in-line inspection] with automatic compensation for part and fixture variation, eliminating manual setup adjustments and replacing offline CMM sampling',
    metrics: ['±1mm dimensional tolerance', '12-second cycle time', '99% OEE production line'],
    stamp: 'VALIDATED',
  },
  tenaris_P7: {
    title: 'From draft to release',
    description: 'Supported product release through manufacturing NPI documentation, technical sales training, and product marketing activities',
    metrics: [''],
    stamp: '',
  },
  tenaris_P9: {
    title: 'Major Oil Companies sustaining and claim management',
    description: 'Supported cross-functional resolution of industrial deviations and customer field claims for a 3,000-product portfolio.',
    metrics: ['Internal Customers NPS +20%', 'Industrial and Field waivers'],
    stamp: '',
  },

  thermofisher_P1: {
    title: 'Product configuration tool',
    description: 'Developed an online self-service product configuration tool, enabling the sales team to generate quotes in real time.',
    metrics: ['Reduced 25% of sales quoting time.'],
    stamp: 'VALIDATED',
  },
  thermofisher_P3b: {
    title: '1000+ part machinery modification',
    description: 'Refactored a 1,000‑part machinery assembly, redesigning 30 key components to make the machinery fully parameterized across the entire product family',
    metrics: ['Reduced Time-to-Market by 2 weeks and updated PDM documentation'],
    stamp: 'VALIDATED',
  },
  thermofisher_P3c: {
    title: 'Electrical Drawings',
    description: 'Crafted detailed wiring diagrams for instrumentation in a dynamic weighing system',
    metrics: [''],
    stamp: 'VALIDATED',
  },
  thermofisher_P5: {
    title: 'Factory Acceptance Test (FAT)',
    description: 'Performed European Union Machinery Directive compliance reviews and compiled full technical and quality dossiers; led Factory Acceptance Tests (FAT) in front of the customer.',
    metrics: ['10/10 FATs passed, zero failures'],
    stamp: 'VALIDATED',
  },

  alstom_P2: {
    title: 'Technical Bid support',
    description: 'Supported 30+ railway infrastructure bids, leading technical solution selection, requirements compliance reviews, validation‑gap identification, and cost estimation.',
    metrics: [],
    stamp: 'VALIDATED',
  },
  alstom_P3a: {
    title: 'Toulouse Metro L3 Design Structure Matrix',
    description: 'Implemented a Design Structure Matrix (DSM) for the electrification subsystem to ensure cross‑discipline alignment and proactively manage technical development risk.',
    metrics: ['Passed the critical design review gate on schedule'],
    stamp: 'VALIDATED',
  },
  alstom_P3b: {
    title: 'Product non-linear mechanic optimization',
    description: 'Performed field and laboratory data analysis to identify and correct second‑order mechanical effects impacting system performance.',
    metrics: ['Increased factory acceptance test success rate by 30%'],
    stamp: 'VALIDATED',
  },
  alstom_P4: {
    title: 'Toulouse Metro L3 Electrification System Validation',
    description: 'Led and executed cross-functional validation activities for the Toulouse Metro L3 urban project',
    metrics: ['100% compliance with customer requirement specifications.'],
    stamp: 'VALIDATED',
  },
  alstom_P6: {
    title: 'Redesign to Cost and process improvement',
    description: 'Performed make‑vs‑buy analysis and unlocked in‑house process capabilities to reduce production costs and leverage purchasing power.',
    metrics: ['10% reduction in production costs'],
    stamp: 'VALIDATED',
  },
  alstom_P7: {
    title: 'Product family release for Italian market',
    description: 'Led the technical release for the Italian market, ensuring compliance with local regulations and standards.',
    metrics: ['Entered in the Approved Vendor List'],
    stamp: 'VALIDATED',
  },
  alstom_P8: {
    title: 'Toulouse Metro L3 First Batch Production',
    description: 'Supported Operations and Industrialization teams during first‑batch production for the Toulouse L3 project, ensuring Six Sigma quality standards and productivity targets were met.',
    metrics: ['First batch delivered on schedule.'],
    stamp: 'VALIDATED',
  },

  mixot_P1: {
    title: 'Customer Discovery',
    description: 'Validated customer-problem fit through  60+ customer discovery interviews across European metalworking SMBs',
    metrics: [''],
    stamp: 'VALIDATED',
  },
  mixot_P2: {
    title: 'Problem-Solution Fit iteration',
    description: 'Converted unstructured customer discovery into falsifiable system requirements that were prioritized, verification‑bound, and traceable to source.',
    metrics: [''],
    stamp: '',
  },





};

// Phase visual per cell, keyed `${company_id}_${phase_code}`.
// Served from public/assets (runtime modal <img> src). Cells without an
// entry fall back to the placeholder image in the modal.
export const cellImages = {
  mixot_P1: '/assets/P1_MIXOT.png',
  alstom_P3a: '/assets/P3A_ALSTOM.png',
  alstom_P6: '/assets/P6_ALSTOM.png',
  alstom_P7: '/assets/P7_ALSTOM.png',
  alstom_P8: '/assets/P8_ALSTOM.png',
  thermofisher_P3b: '/assets/P3B_THERMO.png',
  thermofisher_P3c: '/assets/P3C_THERMO.png',
  thermofisher_P5: '/assets/P5_THERMO.png',
  tenaris_P3b: '/assets/P3B_TENARIS.png',
  tenaris_P4: '/assets/P4_0_TENARIS.png',
  tenaris_P6: '/assets/P6_TENARIS.png',
};

// Stub for active/partial cells without authoritative copy
const STUB = {
  title: 'Documentation in progress',
  description: 'Project artifacts and metrics for this phase are being compiled.',
  metrics: [],
  image_path: 'placeholder.jpg',
  stamp: '',
};

/** Return the full cell record for a company × phase. */
export function getCell(companyId, phaseCode) {
  const status = statusMap[companyId]?.[phaseCode] ?? 'inactive';
  const key = `${companyId}_${phaseCode}`;
  const content = cellContent[key] ?? (status === 'inactive' ? null : STUB);
  const cell = {
    company_id: companyId,
    phase_code: phaseCode,
    status,
    ...(content ?? {}),
  };
  // Attach the per-cell phase image when one exists (overrides stub/placeholder).
  if (content && cellImages[key]) cell.image_path = cellImages[key];
  return cell;
}

/** Flat map of every interactive cell, keyed `${company}_${phase}` (for client lookup). */
export function getAllCells() {
  const out = {};
  for (const company of companies) {
    for (const phase of phases) {
      const status = statusMap[company.id][phase.code];
      if (status === 'inactive') continue;
      out[`${company.id}_${phase.code}`] = getCell(company.id, phase.code);
    }
  }
  return out;
}

/** Per-company coverage stats for the right-margin column. */
export function getCoverage(companyId) {
  const row = statusMap[companyId];
  let active = 0, partial = 0;
  for (const phase of phases) {
    if (row[phase.code] === 'active') active++;
    else if (row[phase.code] === 'partial') partial++;
  }
  const coverage = Math.round(((active + partial) / phases.length) * 100);
  return { active, partial, coverage };
}
