
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatUrl } from '@/utils/formatters';
import firmsData from '@/data/firms.json';
import { FirmData } from '@/data/types';

const FirmDetail = () => {
  const { id } = useParams<{ id: string }>();
  const firm = firmsData.find(f => f.id === id) as FirmData | undefined;

  if (!firm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-shopify-gray mb-4">Firm Not Found</h1>
          <p className="text-lg text-gray-500 mb-8">The firm you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button className="bg-shopify-purple hover:bg-shopify-purple-dark">
              Return to Directory
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const website = formatUrl(firm.website);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-shopify-gray-medium sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center text-shopify-gray hover:text-shopify-purple transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Directory</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Firm Header */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-shopify-gray mr-3">{firm.name}</h1>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-shopify-purple bg-opacity-10 text-shopify-purple">
                    {firm.firmNumber}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{firm.state}, {firm.country}</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                {website && (
                  <a 
                    href={website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-shopify-purple rounded-md shadow-sm text-sm font-medium text-white bg-shopify-purple hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shopify-purple"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Firm Details */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-shopify-gray mb-6">Firm Details</h2>
              
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                <div className="col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-shopify-gray whitespace-pre-line">
                    {firm.address}
                  </dd>
                </div>
                
                <div className="col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Contact Information</dt>
                  <dd className="mt-1 space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 text-shopify-purple mr-2" />
                      <span>{firm.phoneNumber}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 text-shopify-purple mr-2" />
                      <a href={`mailto:${firm.email}`} className="text-shopify-purple hover:underline">
                        {firm.email}
                      </a>
                    </div>
                    
                    {website && (
                      <div className="flex items-center text-sm">
                        <Globe className="h-4 w-4 text-shopify-purple mr-2" />
                        <a 
                          href={website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-shopify-purple hover:underline"
                        >
                          {website.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-shopify-gray-medium py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2025 Malaysia Accounting Directory | Open Source Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FirmDetail;
