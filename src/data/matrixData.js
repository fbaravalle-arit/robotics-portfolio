// ============================================================
// Engineering Lifecycle Matrix — authoritative data
// Mock source of truth until Supabase is wired (see src/lib).
// ============================================================

export const phases = [
  { code: 'P1', label: 'Inputs Gathering' },
  { code: 'P2', label: 'System Requirements' },
  { code: 'P3a', label: 'Conceptual Design' },
  { code: 'P3b', label: 'Basic Design' },
  { code: 'P3c', label: 'Detailed Design' },
  { code: 'P4', label: 'Prototyping & Validation' },
  { code: 'P5', label: 'System Integration Test' },
  { code: 'P6', label: 'NPI & Process Co-design' },
  { code: 'P7', label: 'Product Release' },
  { code: 'P8', label: 'Production & Commissioning' },
  { code: 'P9', label: 'Operations & Maintenance' },
  { code: 'P10', label: 'End-of-Life & Decommissioning' },
];

export const companies = [
  { id: 'mixot', name: 'MIXOT', sector: 'Industrial Automation / Founder', years: '2024–2025' },
  { id: 'alstom', name: 'Alstom', sector: 'Rail / Urban Transit Systems', years: '2022–2024' },
  { id: 'thermofisher', name: 'Thermo Fisher Scientific', sector: 'Advanced Manufacturing / Lab Instruments', years: '2020–2022' },
  { id: 'tenaris', name: 'Tenaris', sector: 'Oil & Gas / Premium Connections', years: '2018–2020' },
];

// Authoritative state grid (status per company × phase)
export const statusMap = {
  mixot: {
    P1: 'active', P2: 'active', P3a: 'inactive', P3b: 'inactive',
    P3c: 'inactive', P4: 'inactive', P5: 'inactive', P6: 'inactive',
    P7: 'inactive', P8: 'inactive', P9: 'inactive', P10: 'inactive',
  },
  tenaris: {
    P1: 'active', P2: 'active', P3a: 'active', P3b: 'active',
    P3c: 'active', P4: 'active', P5: 'partial', P6: 'active',
    P7: 'partial', P8: 'inactive', P9: 'inactive', P10: 'inactive',
  },
  thermofisher: {
    P1: 'partial', P2: 'active', P3a: 'inactive', P3b: 'partial',
    P3c: 'active', P4: 'partial', P5: 'active', P6: 'active',
    P7: 'active', P8: 'active', P9: 'active', P10: 'inactive',
  },
  alstom: {
    P1: 'partial', P2: 'active', P3a: 'partial', P3b: 'inactive',
    P3c: 'active', P4: 'active', P5: 'active', P6: 'active',
    P7: 'active', P8: 'active', P9: 'active', P10: 'partial',
  },
};

// Authoritative modal copy, keyed `${company_id}_${phase_code}`
export const cellContent = {
  tenaris_P3c: {
    title: 'TBG1™ Premium Connection — Compliance & Fatigue Validation',
    description: 'Led detailed design of premium threaded connections for high-pressure oil & gas applications, ensuring full compliance with [API 5CT] and proprietary [TBG1™] geometry tolerances. Designed fatigue test protocols and analysed failure modes under cyclic load.',
    metrics: ['0 field failures across qualification batch'],
    image_path: 'placeholder.jpg',
    stamp: 'VALIDATED',
  },
  tenaris_P4: {
    title: 'Full-Scale Fatigue Testing Program',
    description: 'Designed and executed a multi-stage physical validation program for premium connections, including [DOE] planning, sample manufacturing coordination, and full-scale [make-up/break-out cycling]. Analysed torque-turn curves and thread engagement data to qualify connection geometry changes.',
    metrics: [],
    image_path: 'placeholder.jpg',
    stamp: 'VALIDATED',
  },
  tenaris_P6: {
    title: 'Opto-Mechanical Inspection System — Line Integration',
    description: 'Engineered an opto-mechanical inspection system integrated into the production line for premium connection quality control. System enabled [100% in-line inspection], replacing offline [CMM] sampling and eliminating a production bottleneck.',
    metrics: ['±1mm dimensional tolerance', '12-second cycle time'],
    image_path: 'placeholder.jpg',
    stamp: 'VALIDATED',
  },
  thermofisher_P6: {
    title: 'E2E Technical Order Management & FAT Execution',
    description: 'Managed end-to-end technical orders for laboratory instrument production, covering industrial requirements, process routing, and tooling definition. Executed [Factory Acceptance Tests] and drove standardisation of the documentary architecture across three product lines.',
    metrics: [],
    image_path: 'placeholder.jpg',
    stamp: 'DOCUMENTED',
  },
  thermofisher_P7: {
    title: 'eBOM → mBOM Transition & Regulatory Compliance',
    description: 'Owned the transition from [engineering BOM] to [manufacturing BOM] for a complex electromechanical instrument family. Coordinated regulatory compliance documentation under [EU Machinery Directive] and managed internal and external technical dossiers for product release to market.',
    metrics: [],
    image_path: 'placeholder.jpg',
    stamp: 'VALIDATED',
  },
  alstom_P5: {
    title: 'Toulouse Metro Line 3 — Electrification System Validation',
    description: 'Led cross-functional manufacturing and validation activities for the [Metro de Toulouse Line 3] urban transit electrification programme. Coordinated supplier interfaces, managed integration test schedules, and drove non-conformance resolution across mechanical and electrical subsystems.',
    metrics: [],
    image_path: 'placeholder.jpg',
    stamp: 'VALIDATED',
  },
  alstom_P9: {
    title: 'ARISE / Macinino — Financial Forecasting Platform',
    description: 'Created a [Monte Carlo]-based financial forecasting model (internally named Macinino, later formalised as [ARISE]) covering 8 financial dimensions across the Toulouse Metro Line 3 programme. Alstom created a dedicated headcount position to own the platform after departure.',
    metrics: ['95% forecast accuracy over 12-month horizon', '8 financial dimensions modelled'],
    image_path: 'placeholder.jpg',
    stamp: 'VALIDATED',
  },
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
  return {
    company_id: companyId,
    phase_code: phaseCode,
    status,
    ...(content ?? {}),
  };
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
