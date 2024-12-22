import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAiGenerate } from "@/hooks/use-ai-generate";
import { useToast } from "@/components/ui/use-toast";
import { Wand2 } from "lucide-react";

interface ProfileDescriptionGeneratorProps {
  accountType: string;
  description: string;
  onDescriptionChange: (description: string) => void;
}

export const ProfileDescriptionGenerator = ({
  accountType,
  description,
  onDescriptionChange,
}: ProfileDescriptionGeneratorProps) => {
  const { generate, isLoading, error } = useAiGenerate();
  const { toast } = useToast();

  const handleGenerateDescription = async () => {
    if (!accountType) {
      toast({
        title: "Please select an account type",
        description: "We need to know if you're a KOL or brand to generate a relevant description.",
        variant: "destructive",
      });
      return;
    }

    const prompt = `Write a professional profile description for a ${
      accountType === "kol" ? "Key Opinion Leader (KOL)" : "brand"
    } on Kolerr platform. Keep it concise, engaging, and highlight key strengths. The description should be around 2-3 sentences.`;

    try {
      const result = await generate(prompt);
      if (result) {
        onDescriptionChange(result);
        toast({
          title: "Description Generated",
          description: "Feel free to edit the generated text to better match your profile.",
        });
      }
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate description. Please try again or write your own.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor="description" className="text-sm font-medium text-foreground">
          Profile Description
        </label>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleGenerateDescription}
          disabled={isLoading}
          className="flex items-center gap-1"
        >
          <Wand2 className="w-4 h-4" />
          {isLoading ? "Generating..." : "Generate"}
        </Button>
      </div>
      <Textarea
        id="description"
        placeholder="Tell us about yourself or your brand..."
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        className="min-h-[100px]"
      />
    </div>
  );
};