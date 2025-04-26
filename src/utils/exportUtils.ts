
import { FirmData } from "@/data/types";

export const exportToCSV = (firms: FirmData[], fileName: string = 'accounting-firms.csv'): void => {
  // Define CSV headers
  const headers = [
    'Name',
    'Firm Number',
    'Address',
    'State',
    'Country',
    'Phone',
    'Email',
    'Website',
    'Services'
  ];
  
  // Convert data to CSV format
  const csvRows = [
    headers.join(','), // Header row
    ...firms.map(firm => {
      const row = [
        `"${firm.name}"`,
        `"${firm.firmNumber}"`,
        `"${firm.address}"`,
        `"${firm.state}"`,
        `"${firm.country}"`,
        `"${firm.phoneNumber}"`,
        `"${firm.email}"`,
        firm.website ? `"${firm.website}"` : '""',
        firm.services ? `"${firm.services.join(', ')}"` : '""'
      ];
      return row.join(',');
    })
  ];
  
  // Join all rows with line breaks
  const csvContent = csvRows.join('\n');
  
  // Create a Blob containing the CSV data
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Create a download link
  const link = document.createElement('a');
  
  // Create a URL for the blob
  const url = URL.createObjectURL(blob);
  
  // Set link properties
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  link.style.visibility = 'hidden';
  
  // Add to document, click to trigger download, then remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
