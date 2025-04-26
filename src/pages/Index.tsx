
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import FirmGrid from '@/components/FirmGrid';
import { Button } from '@/components/ui/button';
import { getUniqueStates } from '@/utils/formatters';
import firmsData from '@/data/firms.json';
import { FirmData } from '@/data/types';

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
    <div className="min-h-screen flex flex-col bg-gradient-custom">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <FilterBar 
                states={states}
                selectedState={selectedState}
                setSelectedState={setSelectedState}
              />
              <Link to="/submit">
                <Button>Submit New Firm</Button>
              </Link>
            </div>
            
            <div className="mt-6">
              <FirmGrid firms={filteredFirms} />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2025 Malaysia Accounting Directory | Open Source Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
