
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { StateOption } from "@/data/types";

interface FilterBarProps {
  states: StateOption[];
  selectedState: string;
  setSelectedState: (state: string) => void;
}

const FilterBar = ({ states, selectedState, setSelectedState }: FilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-semibold text-shopify-gray">Firms</h2>
        <span className="text-sm bg-shopify-gray-light text-shopify-gray px-2 py-0.5 rounded-full">
          {states.length} States
        </span>
      </div>
      
      <div className="flex items-center space-x-2">
        <Select value={selectedState} onValueChange={setSelectedState}>
          <SelectTrigger className="border-shopify-gray-medium text-shopify-gray hover:text-shopify-purple hover:border-shopify-purple w-[180px]">
            <SelectValue placeholder="All States" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All States</SelectItem>
            {states.map((state) => (
              <SelectItem key={state.value} value={state.value}>
                {state.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;
