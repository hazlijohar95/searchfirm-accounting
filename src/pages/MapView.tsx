
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import FirmMap from '@/components/FirmMap';
import firmsData from '@/data/firms.json';
import { FirmData } from '@/data/types';
import { loadBookmarkedState } from '@/utils/bookmarkUtils';
import SEO from '@/components/SEO';

const MapView = () => {
  const [firms, setFirms] = useState<FirmData[]>([]);

  useEffect(() => {
    // Load firms with bookmarked state
    setFirms(loadBookmarkedState(firmsData as FirmData[]));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Map View" 
        description="Interactive map of accounting firms in Malaysia - find firms near you with our visual directory."
      />
      
      <header className="bg-white shadow-sm border-b border-shopify-gray-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center text-shopify-gray hover:text-shopify-purple transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Directory</span>
            </Link>
            <h1 className="text-xl font-bold text-shopify-gray">Map View</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-shopify-gray mb-6">Accounting Firms in Malaysia</h2>
            
            <div className="rounded-lg overflow-hidden">
              <FirmMap firms={firms} />
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Click on a marker to view firm details and contact information.
            </p>
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

export default MapView;
