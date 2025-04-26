
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import FirmDetail from "./pages/FirmDetail";
import SubmitFirm from "./pages/SubmitFirm";
import MapView from "./pages/MapView";
import NotFound from "./pages/NotFound";
import SitemapPage from "./pages/SitemapPage";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/firms/:id" element={<FirmDetail />} />
            <Route path="/firms/:id/:slug" element={<FirmDetail />} />
            <Route path="/submit" element={<SubmitFirm />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/sitemap.xml" element={<SitemapPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
