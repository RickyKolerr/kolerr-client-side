import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { StrictMode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Routes } from "@/routes";
import { ErrorBoundaryWrapper } from "@/components/ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

function App() {
  return (
    <StrictMode>
      <ErrorBoundaryWrapper>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <TooltipProvider>
              <LanguageProvider>
                <Routes />
                <Toaster />
              </LanguageProvider>
            </TooltipProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </ErrorBoundaryWrapper>
    </StrictMode>
  );
}

export default App;