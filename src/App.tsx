import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";

import NotFound from "./pages/NotFound";
import PromenadeDesAnglais from "./pages/PromenadeDesAnglais";
import CoursSaleya from "./pages/CoursSaleya";
import VieuxNice from "./pages/VieuxNice";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reserver" element={<Booking />} />
          
          <Route path="/promenade-des-anglais" element={<PromenadeDesAnglais />} />
          <Route path="/cours-saleya" element={<CoursSaleya />} />
          <Route path="/vieux-nice" element={<VieuxNice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
