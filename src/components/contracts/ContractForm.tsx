import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileCode, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContractDetails {
  title: string;
  description: string;
  terms: string;
  budget: string;
  deadline: string;
}

export const ContractForm = () => {
  const { toast } = useToast();
  const [contract, setContract] = useState<ContractDetails>({
    title: "",
    description: "",
    terms: "",
    budget: "",
    deadline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Contract Created",
      description: "Your contract has been created and sent for review.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContract((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCode className="h-5 w-5" />
          Create Contract
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Contract Title</label>
            <Input
              name="title"
              value={contract.title}
              onChange={handleChange}
              placeholder="e.g., Instagram Story Campaign"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              name="description"
              value={contract.description}
              onChange={handleChange}
              placeholder="Brief description of the collaboration..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Terms & Conditions</label>
            <Textarea
              name="terms"
              value={contract.terms}
              onChange={handleChange}
              placeholder="Detailed terms of the agreement..."
              className="min-h-[150px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Budget</label>
              <Input
                name="budget"
                value={contract.budget}
                onChange={handleChange}
                placeholder="e.g., $1,000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Deadline</label>
              <Input
                name="deadline"
                type="date"
                value={contract.deadline}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            <Lock className="h-4 w-4 mr-2" />
            Create Contract
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};