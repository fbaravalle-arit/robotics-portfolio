// ============================================================
// Cell data fetch layer — decouples render from data source.
// Flip USE_SUPABASE to true once the table + storage are live.
// ============================================================

import { getCell, getAllCells } from '../data/matrixData.js';
import { getSupabaseClient } from './supabase.js';

export const USE_SUPABASE = false;

/** Mock source: read straight from the local authoritative data. */
export function getCellDataFromMock(companyId, phaseCode) {
  return getCell(companyId, phaseCode);
}

/** Supabase source (stub): query the portfolio_cells table. */
export async function getCellDataFromSupabase(companyId, phaseCode) {
  const client = await getSupabaseClient();
  if (!client) return getCellDataFromMock(companyId, phaseCode);
  const { data, error } = await client
    .from('portfolio_cells')
    .select('*')
    .eq('company_id', companyId)
    .eq('phase_code', phaseCode)
    .single();
  if (error || !data) return getCellDataFromMock(companyId, phaseCode);
  return data;
}

/** Public entry point used by the UI. */
export async function fetchCellData(companyId, phaseCode) {
  return USE_SUPABASE
    ? getCellDataFromSupabase(companyId, phaseCode)
    : getCellDataFromMock(companyId, phaseCode);
}

/** All interactive cells (used to hydrate the static page). */
export function getAllCellData() {
  return getAllCells();
}
