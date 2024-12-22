import { useState } from "react";
import { useAiGenerate } from "@/hooks/use-ai-generate";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export const AiContentGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const { generate, isLoading, error } = useAiGenerate();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    const generatedText = await generate(prompt);
    if (generatedText) {
      setResult(generatedText);
      toast({
        title: "Success",
        description: "Content generated successfully!",
      });
    } else if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="prompt" className="text-sm font-medium">
          Enter your prompt
        </label>
        <Textarea
          id="prompt"
          placeholder="E.g., Generate a creative Instagram caption for a new fashion collection..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px]"
        />
      </div>

      <Button 
        onClick={handleGenerate} 
        disabled={isLoading || !prompt.trim()}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Content"
        )}
      </Button>

      {result && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Generated Content</label>
          <div className="p-4 rounded-lg bg-muted/50 whitespace-pre-wrap">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};