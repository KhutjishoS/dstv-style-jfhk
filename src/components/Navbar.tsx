
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleQuoteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offsetPosition = contactSection.offsetTop - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="#" className="text-xl font-display font-bold gradient-text">DSTV Installers</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#services" 
            className="nav-link relative py-2 hover:text-green-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all hover:after:w-full" 
            onClick={(e) => handleNavClick(e, "services")}
          >
            Services
          </a>
          <a 
            href="#areas" 
            className="nav-link relative py-2 hover:text-green-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all hover:after:w-full" 
            onClick={(e) => handleNavClick(e, "areas")}
          >
            Coverage Areas
          </a>
          <a 
            href="#testimonials" 
            className="nav-link relative py-2 hover:text-green-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all hover:after:w-full" 
            onClick={(e) => handleNavClick(e, "testimonials")}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="nav-link relative py-2 hover:text-green-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all hover:after:w-full" 
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
          
          <a href="tel:+27123456789" className="hidden md:flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-medium">011 234 5678</span>
          </a>
          
          <Button 
            onClick={handleQuoteClick}
            className="hidden md:flex rounded-full bg-gradient-to-r from-[#166534] to-[#16a34a] hover:opacity-90"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto py-4 px-4 flex flex-col">
            <a href="#services" className="py-2 px-4 hover:bg-primary/5 rounded-md" onClick={(e) => handleNavClick(e, "services")}>Services</a>
            <a href="#areas" className="py-2 px-4 hover:bg-primary/5 rounded-md" onClick={(e) => handleNavClick(e, "areas")}>Coverage Areas</a>
            <a href="#testimonials" className="py-2 px-4 hover:bg-primary/5 rounded-md" onClick={(e) => handleNavClick(e, "testimonials")}>Testimonials</a>
            <a href="#contact" className="py-2 px-4 hover:bg-primary/5 rounded-md" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
            
            <div className="mt-4 flex flex-col gap-2">
              <a href="tel:+27123456789" className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">011 234 5678</span>
              </a>
              
              <Button 
                onClick={handleQuoteClick}
                className="w-full rounded-md bg-gradient-to-r from-[#166534] to-[#16a34a] hover:opacity-90"
              >
                Get a Free Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
