
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StateOption, ServiceCategory } from "@/data/types";
import { exportToCSV } from "@/utils/exportUtils";

interface FilterBarProps {
  states: StateOption[];
  selectedState: string;
  setSelectedState: (state: string) => void;
  services: ServiceCategory[];
  selectedService: string;
  setSelectedService: (service: string) => void;
  exportData: () => void;
}

const FilterBar = ({ 
  states, 
  selectedState, 
  setSelectedState,
  services,
  selectedService,
  setSelectedService,
  exportData
}: FilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-4 sm:space-y-0 w-full">
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-semibold text-shopify-gray">Firms</h2>
        <span className="text-sm bg-shopify-gray-light text-shopify-gray px-2 py-0.5 rounded-full">
          {states.length} States
        </span>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
        <div className="flex flex-wrap gap-2">
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="border-shopify-gray-medium text-shopify-gray hover:text-shopify-purple hover:border-shopify-purple w-[140px] sm:w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="All States" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map((state) => (
                <SelectItem key={state.value} value={state.value}>
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="border-shopify-gray-medium text-shopify-gray hover:text-shopify-purple hover:border-shopify-purple w-[140px] sm:w-[180px]">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Link to="/map" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              <MapPin className="w-4 h-4 mr-2" />
              Map View
            </Button>
          </Link>
          
          <Button variant="outline" onClick={exportData} className="w-full sm:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
