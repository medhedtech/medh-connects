
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import DonateButton from "./DonateButton";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 lg:px-10 py-3 bg-white shadow-sm",
        isScrolled && "shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/3a6c0455-6485-4c5b-8979-288640557b66.png" 
            alt="Medh Foundation Logo" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={cn(
                    "font-sans text-sm font-medium hover:text-primary-green transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-green after:transition-all after:duration-300 hover:after:w-full",
                    location.pathname === link.path ? "text-primary-green after:w-full" : "text-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <DonateButton />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg glass animate-fade-in">
          <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <Link 
                  to={link.path}
                  className={cn(
                    "block font-sans text-base font-medium transition-colors",
                    location.pathname === link.path ? "text-primary-green" : "text-gray-700"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <DonateButton className="mt-2 w-full justify-center" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

