
import { FirmData } from '@/data/types';
import FirmCard from './FirmCard';

interface FirmGridProps {
  firms: FirmData[];
  onBookmarkToggle?: (firmId: string, isBookmarked: boolean) => void;
}

const FirmGrid = ({ firms, onBookmarkToggle }: FirmGridProps) => {
  if (firms.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-lg font-medium text-gray-500">No firms found matching your criteria</h3>
        <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {firms.map(firm => (
        <FirmCard 
          key={firm.id} 
          firm={firm} 
          onBookmarkToggle={onBookmarkToggle}
        />
      ))}
    </div>
  );
};

export default FirmGrid;
