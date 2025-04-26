
import { Select } from "@/components/ui/select";
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
        <Select
          value={selectedState}
          onValueChange={setSelectedState}
          items={[{ value: "", label: "All States" }, ...states]}
        >
          <Button 
            variant="outline"
            className="border-shopify-gray-medium text-shopify-gray hover:text-shopify-purple hover:border-shopify-purple"
          >
            {selectedState ? states.find(s => s.value === selectedState)?.label || "All States" : "All States"}
          </Button>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;
