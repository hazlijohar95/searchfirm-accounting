
/**
 * Formats a URL to ensure it starts with http:// or https://
 */
export const formatUrl = (url: string | null): string | null => {
  if (!url) return null;
  
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  
  return url;
};

/**
 * Returns the first portion of an address (typically the street address)
 * for display in the card view
 */
export const getShortAddress = (address: string): string => {
  const parts = address.split(',');
  if (parts.length <= 2) return address;
  
  return parts[0].trim();
};

/**
 * Gets unique states from firm data for the filter dropdown
 */
export const getUniqueStates = (firms: any[]): { value: string, label: string }[] => {
  const states = [...new Set(firms.map(firm => firm.state))];
  return states.map(state => ({
    value: state,
    label: state
  }));
};
