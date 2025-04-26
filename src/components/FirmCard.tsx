
import { useState } from 'react';
import { FirmData } from '@/data/types';
import { getShortAddress } from '@/utils/formatters';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { toggleBookmark } from '@/utils/bookmarkUtils';
import { toast } from '@/components/ui/use-toast';

interface FirmCardProps {
  firm: FirmData;
  onBookmarkToggle?: (firmId: string, isBookmarked: boolean) => void;
}

const FirmCard = ({ firm, onBookmarkToggle }: FirmCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(firm.bookmarked || false);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newBookmarkState = toggleBookmark(firm.id);
    setIsBookmarked(newBookmarkState);
    
    if (onBookmarkToggle) {
      onBookmarkToggle(firm.id, newBookmarkState);
    }
    
    toast({
      title: newBookmarkState ? "Firm Bookmarked" : "Bookmark Removed",
      description: newBookmarkState ? 
        `${firm.name} has been added to your bookmarks.` : 
        `${firm.name} has been removed from your bookmarks.`,
      duration: 2000
    });
  };

  return (
    <Link to={`/firms/${firm.id}`} className="block outline-none group relative">
      <Card className="h-full p-6 bg-white/70 backdrop-blur-sm border-gray-200 hover:border-shopify-purple transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="absolute top-4 right-4">
          <button 
            onClick={handleBookmarkClick}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-5 w-5 text-shopify-purple" />
            ) : (
              <Bookmark className="h-5 w-5 text-gray-400 group-hover:text-shopify-purple" />
            )}
          </button>
        </div>

        <div className="flex items-start justify-between pr-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-shopify-purple transition-colors">
              {firm.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{firm.firmNumber}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-shopify-purple/10 text-shopify-purple">
            {firm.state}
          </span>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-600">{getShortAddress(firm.address)}</p>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <svg className="mr-1.5 h-4 w-4 text-shopify-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {firm.phoneNumber}
        </div>
        
        {firm.services && firm.services.length > 0 && (
          <div className="mt-3">
            <div className="flex flex-wrap gap-1">
              {firm.services.slice(0, 3).map((service, index) => (
                <span 
                  key={index} 
                  className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs"
                >
                  {service}
                </span>
              ))}
              {firm.services.length > 3 && (
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-xs">
                  +{firm.services.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </Card>
    </Link>
  );
};

export default FirmCard;
