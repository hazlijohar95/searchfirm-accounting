
import { useEffect } from "react";
import { generateSitemap } from "@/utils/sitemapGenerator";
import firmsData from "@/data/firms.json";
import { FirmData } from "@/data/types";

const SitemapPage = () => {
  useEffect(() => {
    const sitemap = generateSitemap(firmsData as FirmData[], window.location.origin);
    
    // Create a blob from the XML
    const blob = new Blob([sitemap], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    
    // Download or display the XML
    window.location.href = url;
    
    // Clean up the URL object
    return () => URL.revokeObjectURL(url);
  }, []);
  
  return null; // This component doesn't render anything
};

export default SitemapPage;
