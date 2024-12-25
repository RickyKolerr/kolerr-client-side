import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export const useKeyboardShortcuts = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only trigger shortcuts if Ctrl/Cmd key is pressed
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'h':
            event.preventDefault();
            navigate('/');
            toast({
              title: "Navigation",
              description: "Navigated to Home",
            });
            break;
          case 'k':
            event.preventDefault();
            navigate('/kols');
            toast({
              title: "Navigation",
              description: "Navigated to KOLs",
            });
            break;
          case 'c':
            event.preventDefault();
            navigate('/campaigns');
            toast({
              title: "Navigation",
              description: "Navigated to Campaigns",
            });
            break;
          case 'p':
            event.preventDefault();
            navigate('/pricing');
            toast({
              title: "Navigation",
              description: "Navigated to Pricing",
            });
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, toast]);
};