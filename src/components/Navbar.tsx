import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navigation = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Coverage Areas', href: '#areas', id: 'areas' },
  { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-blue-50/95 backdrop-blur-md shadow-md" : "bg-blue-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a 
            href="/" 
            className="text-2xl font-display font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all"
            onClick={() => handleNavigation('/')}
          >
            DSTV Installers
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href || 
                (location.pathname === '/' && window.location.hash === item.href)
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {item.name === 'Home' ? (
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>{item.name}</span>
                </div>
              ) : item.name}
            </button>
          ))}
        </nav>
        
        {/* Mobile menu button and quote button */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full md:hidden hover:bg-blue-100" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            <span className="sr-only">Menu</span>
          </Button>
          
          <Button 
            onClick={() => handleNavigation('#contact')}
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-50 shadow-lg animate-in slide-in-from-top duration-300">
          <nav className="container mx-auto py-4 px-4 flex flex-col">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleNavigation(item.href);
                  setIsOpen(false);
                }}
                className={`py-3 px-4 hover:bg-blue-100 rounded-md text-gray-700 font-medium transition-colors ${
                  location.pathname === item.href || 
                  (location.pathname === '/' && window.location.hash === item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.name === 'Home' ? (
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>{item.name}</span>
                  </div>
                ) : item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
