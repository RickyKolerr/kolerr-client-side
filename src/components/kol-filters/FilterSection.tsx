import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const FilterSection = ({ title, children, className }: FilterSectionProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Label className="text-sm font-medium">{title}</Label>
      {children}
    </div>
  );
};