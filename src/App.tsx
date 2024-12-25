import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Routes } from "@/routes";
import { ErrorBoundaryWrapper } from "@/components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <LanguageProvider>
              <ErrorBoundaryWrapper>
                <Routes />
                <Toaster />
              </ErrorBoundaryWrapper>
            </LanguageProvider>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;