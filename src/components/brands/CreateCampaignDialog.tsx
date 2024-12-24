import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus, ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Campaign Details",
    description: "Set your campaign name, description, and objectives",
  },
  {
    title: "Target Audience",
    description: "Define your target audience and requirements",
  },
  {
    title: "Budget & Timeline",
    description: "Set your campaign budget and timeline",
  },
  {
    title: "Review",
    description: "Review your campaign details before launching",
  },
];

export function CreateCampaignDialog() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState<Date>();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    objectives: "",
    targetAudience: "",
    budget: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Campaign Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter campaign name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your campaign"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="objectives">Objectives</Label>
              <Textarea
                id="objectives"
                name="objectives"
                value={formData.objectives}
                onChange={handleInputChange}
                placeholder="What are your campaign objectives?"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Textarea
                id="targetAudience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                placeholder="Describe your target audience"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Campaign Budget</Label>
              <Input
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="Enter campaign budget"
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label>Campaign Timeline</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">Campaign Summary</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Description:</span> {formData.description}</p>
              <p><span className="font-medium">Objectives:</span> {formData.objectives}</p>
              <p><span className="font-medium">Target Audience:</span> {formData.targetAudience}</p>
              <p><span className="font-medium">Budget:</span> ${formData.budget}</p>
              <p><span className="font-medium">Start Date:</span> {date ? format(date, "PPP") : "Not set"}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange">
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{steps[currentStep].title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="relative">
            <nav aria-label="Progress">
              <ol role="list" className="space-y-4 mb-8">
                {steps.map((step, index) => (
                  <li key={step.title} className={cn(
                    "relative flex items-start",
                    index < currentStep ? "text-blue-600" : ""
                  )}>
                    <span className="flex items-center">
                      <span className={cn(
                        "relative flex h-5 w-5 items-center justify-center rounded-full border",
                        index <= currentStep ? "border-blue-600 bg-blue-600" : "border-gray-300"
                      )}>
                        {index < currentStep ? (
                          "✓"
                        ) : (
                          <span className={cn(
                            "h-2.5 w-2.5 rounded-full",
                            index === currentStep ? "bg-blue-600" : "bg-gray-300"
                          )} />
                        )}
                      </span>
                      <span className="ml-3 text-sm font-medium">
                        {step.title}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </nav>
            {renderStep()}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={currentStep === steps.length - 1 ? () => setOpen(false) : nextStep}
          >
            {currentStep === steps.length - 1 ? (
              "Launch Campaign"
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </DialogContent>
      <style>
        {`
          .step-gradient {
            background: linear-gradient(to right, #00F5FF, #9C27B0);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `}
      </style>
    </Dialog>
  );
}