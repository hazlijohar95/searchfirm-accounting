
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import FirmGrid from '@/components/FirmGrid';
import { Button } from '@/components/ui/button';
import { getUniqueStates } from '@/utils/formatters';
import { exportToCSV } from '@/utils/exportUtils';
import { loadBookmarkedState } from '@/utils/bookmarkUtils';
import firmsData from '@/data/firms.json';
import { serviceCategories } from '@/data/services';
import { FirmData } from '@/data/types';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [firms, setFirms] = useState<FirmData[]>([]);

  // Get unique states for the filter dropdown
  const states = useMemo(() => getUniqueStates(firmsData), []);

  // Initial load of firms with bookmarked state
  useEffect(() => {
    setFirms(loadBookmarkedState(firmsData as FirmData[]));
  }, []);

  // Filter firms based on search query, state filter, and service filter
  const filteredFirms = useMemo(() => {
    return firms.filter(firm => {
      const matchesSearch = firm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           firm.firmNumber.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesState = selectedState === 'all' || firm.state === selectedState;

      const matchesService = selectedService === 'all' || 
                            (firm.services && firm.services.includes(selectedService));
      
      const matchesBookmark = !showBookmarkedOnly || firm.bookmarked;
      
      return matchesSearch && matchesState && matchesService && matchesBookmark;
    });
  }, [searchQuery, selectedState, selectedService, showBookmarkedOnly, firms]);

  // Bookmark toggle handler
  const handleBookmarkToggle = (firmId: string, isBookmarked: boolean) => {
    setFirms(prevFirms => 
      prevFirms.map(firm => 
        firm.id === firmId ? {...firm, bookmarked: isBookmarked} : firm
      )
    );
  };

  // Export to CSV handler
  const handleExport = () => {
    exportToCSV(filteredFirms, 'accounting-firms.csv');
  };

  // Toggle bookmarked only view
  const toggleBookmarkedView = () => {
    setShowBookmarkedOnly(!showBookmarkedOnly);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-custom">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <FilterBar 
                  states={states}
                  selectedState={selectedState}
                  setSelectedState={setSelectedState}
                  services={serviceCategories}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  exportData={handleExport}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Button 
                  variant={showBookmarkedOnly ? "default" : "outline"}
                  onClick={toggleBookmarkedView}
                  className={`${showBookmarkedOnly ? "bg-shopify-purple" : ""}`}
                >
                  {showBookmarkedOnly ? "Showing Bookmarked" : "Show Bookmarked Only"}
                </Button>
                
                <Link to="/submit">
                  <Button>Submit New Firm</Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-6">
              <FirmGrid 
                firms={filteredFirms} 
                onBookmarkToggle={handleBookmarkToggle} 
              />
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
