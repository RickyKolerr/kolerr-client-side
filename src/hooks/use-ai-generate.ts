import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useAiGenerate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (prompt: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-with-ai', {
        body: { prompt },
      });

      if (error) throw error;
      return data.text;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate content');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generate,
    isLoading,
    error,
  };
};