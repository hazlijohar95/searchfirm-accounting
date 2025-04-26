
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-custom">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for doesn't exist or has been moved."
      />
      
      <header className="bg-white/80 backdrop-blur-sm border-b border-shopify-gray-medium py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center text-shopify-gray hover:text-shopify-purple transition">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Directory</span>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-5xl font-bold text-shopify-gray mb-4">404</h1>
          <p className="text-xl text-shopify-gray mb-8">
            Oops! The page you are looking for doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full">
                Return to Directory
              </Button>
            </Link>
            <Link to="/map">
              <Button variant="outline" className="w-full">
                View Map
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            © 2025 Malaysia Accounting Directory | Open Source Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
