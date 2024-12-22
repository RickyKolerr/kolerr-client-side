import { useToast } from "@/hooks/use-toast";

export const useAIService = () => {
  const { toast } = useToast();

  const matchKOLs = async (requirements: string) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [{
            role: "system",
            content: "You are an AI assistant helping match KOLs with brand requirements."
          }, {
            role: "user",
            content: `Find suitable KOLs for the following requirements: ${requirements}`
          }]
        })
      });

      if (!response.ok) {
        throw new Error('AI matching service error');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process AI matching request. Please try again.",
        variant: "destructive"
      });
      return null;
    }
  };

  const searchKOLs = async (query: string) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [{
            role: "system",
            content: "You are an AI assistant helping search for KOLs based on specific criteria."
          }, {
            role: "user",
            content: `Search for KOLs matching these criteria: ${query}`
          }]
        })
      });

      if (!response.ok) {
        throw new Error('AI search service error');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process AI search request. Please try again.",
        variant: "destructive"
      });
      return null;
    }
  };

  return {
    matchKOLs,
    searchKOLs
  };
};