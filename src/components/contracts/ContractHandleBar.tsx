import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Upload,
  Download,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContractType {
  id: string;
  name: string;
  status: "pending" | "signed" | "rejected";
}

export const ContractHandleBar = () => {
  const { toast } = useToast();
  const [contracts, setContracts] = useState<ContractType[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const newContract: ContractType = {
      id: Date.now().toString(),
      name: file.name,
      status: "pending"
    };

    setContracts([...contracts, newContract]);
    toast({
      title: "Contract Uploaded",
      description: `${file.name} has been uploaded successfully.`
    });
  };

  const getStatusIcon = (status: ContractType["status"]) => {
    switch (status) {
      case "signed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-background">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Contract Management</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => document.getElementById("contract-upload")?.click()}
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <input
            id="contract-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </div>
      <div className="space-y-2">
        {contracts.map((contract) => (
          <div
            key={contract.id}
            className="flex items-center justify-between p-2 bg-muted rounded-md"
          >
            <div className="flex items-center gap-2">
              {getStatusIcon(contract.status)}
              <span className="text-sm font-medium">{contract.name}</span>
            </div>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};