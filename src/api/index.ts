
import firmsData from '@/data/firms.json';
import { states } from '@/data/states';
import { FirmData, StateOption } from '@/data/types';

/**
 * Get all firms
 * @returns Promise<FirmData[]>
 */
export const getAllFirms = async (): Promise<FirmData[]> => {
  return Promise.resolve(firmsData);
};

/**
 * Get a single firm by ID
 * @param id - The firm ID
 * @returns Promise<FirmData>
 * @throws Error if firm not found
 */
export const getFirmById = async (id: string): Promise<FirmData> => {
  const firm = firmsData.find(f => f.id === id);
  if (!firm) {
    throw new Error('Firm not found');
  }
  return Promise.resolve(firm);
};

/**
 * Get all states
 * @returns Promise<StateOption[]>
 */
export const getStates = async (): Promise<StateOption[]> => {
  return Promise.resolve(states);
};
