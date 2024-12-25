import { Slider } from "@/components/ui/slider";

interface RangeFilterProps {
  title: string;
  value: number[];
  onChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  formatValue?: (value: number) => string;
}

export function RangeFilter({ 
  title, 
  value, 
  onChange, 
  min, 
  max, 
  step,
  formatValue = (v) => v.toString()
}: RangeFilterProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-300">{title}</h4>
      <div className="px-2">
        <Slider
          defaultValue={value}
          max={max}
          min={min}
          step={step}
          onValueChange={onChange}
          className="mt-2"
        />
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>{formatValue(value[0])}</span>
          <span>{formatValue(value[1])}</span>
        </div>
      </div>
    </div>
  );
}