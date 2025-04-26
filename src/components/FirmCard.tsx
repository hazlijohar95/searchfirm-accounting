
import { FirmData } from '@/data/types';
import { getShortAddress } from '@/utils/formatters';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface FirmCardProps {
  firm: FirmData;
}

const FirmCard = ({ firm }: FirmCardProps) => {
  return (
    <Link to={`/firms/${firm.id}`} className="block outline-none">
      <Card className="h-full p-6 bg-white border border-shopify-gray-medium hover:border-shopify-purple card-hover">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-shopify-gray">{firm.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{firm.firmNumber}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-shopify-purple bg-opacity-10 text-shopify-purple">
            {firm.state}
          </span>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-500">{getShortAddress(firm.address)}</p>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <svg className="mr-1.5 h-4 w-4 text-shopify-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {firm.phoneNumber}
        </div>
      </Card>
    </Link>
  );
};

export default FirmCard;
