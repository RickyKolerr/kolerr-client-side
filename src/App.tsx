import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { Toaster } from "@/components/ui/toaster";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <NotificationProvider>
            <AppRoutes />
            <Toaster />
          </NotificationProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;