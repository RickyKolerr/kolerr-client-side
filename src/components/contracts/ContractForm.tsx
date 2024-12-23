import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileCode, 
  Lock,
  Upload,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface ContractDetails {
  title: string;
  description: string;
  terms: string;
  budget: string;
  deadline: string;
  template: string;
  status: "draft" | "pending" | "signed" | "expired";
}

const contractTemplates = [
  { id: "instagram", name: "Instagram Campaign" },
  { id: "tiktok", name: "TikTok Campaign" },
  { id: "youtube", name: "YouTube Campaign" },
  { id: "custom", name: "Custom Template" }
];

const statusColors = {
  draft: "bg-gray-500",
  pending: "bg-yellow-500",
  signed: "bg-green-500",
  expired: "bg-red-500"
};

export const ContractForm = () => {
  const { toast } = useToast();
  const [contract, setContract] = useState<ContractDetails>({
    title: "",
    description: "",
    terms: "",
    budget: "",
    deadline: "",
    template: "",
    status: "draft"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContract(prev => ({ ...prev, status: "pending" }));
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

  const handleTemplateChange = (templateId: string) => {
    setContract(prev => ({ ...prev, template: templateId }));
    // In a real app, you would load the template content here
    toast({
      title: "Template Loaded",
      description: "Contract template has been loaded successfully."
    });
  };

  const getStatusIcon = (status: ContractDetails["status"]) => {
    switch (status) {
      case "draft":
        return <Clock className="h-4 w-4" />;
      case "pending":
        return <AlertCircle className="h-4 w-4" />;
      case "signed":
        return <CheckCircle2 className="h-4 w-4" />;
      case "expired":
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            Create Contract
          </CardTitle>
          <Badge 
            variant="secondary"
            className={`${statusColors[contract.status]} text-white`}
          >
            <span className="flex items-center gap-1">
              {getStatusIcon(contract.status)}
              {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Template</label>
            <Select onValueChange={handleTemplateChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a template" />
              </SelectTrigger>
              <SelectContent>
                {contractTemplates.map(template => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              <Lock className="h-4 w-4 mr-2" />
              Create Contract
            </Button>
            <Button type="button" variant="outline" className="w-auto">
              <Download className="h-4 w-4" />
            </Button>
            <Button type="button" variant="outline" className="w-auto">
              <Upload className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};