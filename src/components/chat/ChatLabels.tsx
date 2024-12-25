import { Badge } from "@/components/ui/badge";

interface ChatLabel {
  id: string;
  name: string;
  color: string;
}

interface ChatLabelsProps {
  labels: ChatLabel[];
  selectedLabel: string;
  setSelectedLabel: (id: string) => void;
}

export const ChatLabels = ({
  labels,
  selectedLabel,
  setSelectedLabel,
}: ChatLabelsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {labels.map((label) => (
        <Badge
          key={label.id}
          variant={selectedLabel === label.id ? "default" : "outline"}
          className={`cursor-pointer ${
            selectedLabel === label.id
              ? "bg-gradient-to-r from-kolerr-cyan to-kolerr-purple"
              : ""
          }`}
          onClick={() => setSelectedLabel(label.id)}
        >
          {label.name}
        </Badge>
      ))}
    </div>
  );
};