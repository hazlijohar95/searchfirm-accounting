
import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import FirmGrid from '@/components/FirmGrid';
import { FirmData } from '@/data/types';
import { getUniqueStates } from '@/utils/formatters';

// Import the JSON data
import firmsData from '@/data/firms.json';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');

  // Get unique states for the filter dropdown
  const states = useMemo(() => getUniqueStates(firmsData), []);

  // Filter firms based on search query and state filter
  const filteredFirms = useMemo(() => {
    return (firmsData as FirmData[]).filter(firm => {
      const matchesSearch = firm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           firm.firmNumber.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesState = selectedState === 'all' || firm.state === selectedState;
      
      return matchesSearch && matchesState;
    });
  }, [searchQuery, selectedState]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FilterBar 
            states={states}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
          
          <div className="mt-6">
            <FirmGrid firms={filteredFirms} />
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-shopify-gray-medium py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2025 Malaysia Accounting Directory | Open Source Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
