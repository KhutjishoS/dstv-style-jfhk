
import { TwitterIcon, GitHubIcon } from "./SocialIcons";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-display font-bold text-green-500">DSTV Installers</span>
            </div>
            <p className="text-neutral-400 max-w-md">
              Professional DSTV installation, maintenance, and repair services in Fourways and surrounding areas. Licensed and certified technicians with years of experience.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-green-500 transition-colors">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-green-500 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-neutral-400 hover:text-green-500 transition-colors">Our Services</a></li>
              <li><a href="#areas" className="text-neutral-400 hover:text-green-500 transition-colors">Coverage Areas</a></li>
              <li><a href="#testimonials" className="text-neutral-400 hover:text-green-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-green-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>123 Main Street</li>
              <li>Fourways, Johannesburg</li>
              <li>Gauteng, South Africa</li>
              <li>011 234 5678</li>
              <li>info@dstvinstallers.co.za</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} DSTV Installers Fourways. All rights reserved. | <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
