import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, DollarSign, Users } from "lucide-react";
import { useState } from "react";
import { Slot } from "@/types/campaign";

interface SlotFormProps {
  initialData?: Slot;
  onSubmit: (formData: any) => void;
  onCancel?: () => void;
}

export const SlotForm = ({ initialData, onSubmit, onCancel }: SlotFormProps) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    requirements: initialData?.requirements || "",
    deadline: initialData?.deadline || "",
    budget: initialData?.budget || "",
    maxKols: initialData?.maxKols || 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-gray-300">Slot Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter slot title"
          className="bg-[#1A1A1A] border-gray-800 text-white placeholder:text-gray-500"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="requirements" className="text-gray-300">Requirements</Label>
        <Textarea
          id="requirements"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          placeholder="Enter requirements for KOLs"
          className="bg-[#1A1A1A] border-gray-800 text-white placeholder:text-gray-500 min-h-[100px]"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="deadline" className="text-gray-300">Deadline</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              id="deadline"
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="pl-10 bg-[#1A1A1A] border-gray-800 text-white"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget" className="text-gray-300">Budget</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              placeholder="Enter budget"
              className="pl-10 bg-[#1A1A1A] border-gray-800 text-white placeholder:text-gray-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="maxKols" className="text-gray-300">Maximum KOLs</Label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            id="maxKols"
            type="number"
            min="1"
            value={formData.maxKols}
            onChange={(e) => setFormData({ ...formData, maxKols: parseInt(e.target.value) })}
            className="pl-10 bg-[#1A1A1A] border-gray-800 text-white"
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        {onCancel && (
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            className="bg-transparent border-gray-700 hover:bg-gray-800 text-gray-300"
          >
            Cancel
          </Button>
        )}
        <Button 
          type="submit"
          className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90"
        >
          {initialData ? "Update Slot" : "Create Slot"}
        </Button>
      </div>
    </form>
  );
};