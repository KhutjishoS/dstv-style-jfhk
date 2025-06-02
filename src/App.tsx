import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "./pages/NotFound";
import DSTVInstallationPage from "@/pages/services/installation";
import DSTVRepairsPage from "@/pages/services/repairs";
import ExtraViewSetupPage from "@/pages/services/extra-view";
import SignalTroubleshootingPage from "@/pages/services/signal-troubleshooting";
import SmartHomeIntegrationPage from "@/pages/services/smart-home";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/installation" element={<DSTVInstallationPage />} />
          <Route path="/services/repairs" element={<DSTVRepairsPage />} />
          <Route path="/services/extra-view" element={<ExtraViewSetupPage />} />
          <Route path="/services/signal-troubleshooting" element={<SignalTroubleshootingPage />} />
          <Route path="/services/smart-home" element={<SmartHomeIntegrationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
