import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection"; 
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Areas from "@/components/Areas";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";

const Index = () => {
  // Scroll to top when component mounts (when returning from service pages)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent -z-10 h-96"></div>
          <ServicesGrid />
        </div>
        <Areas />
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent -z-10"></div>
          <TestimonialsCarousel />
        </div>
        <ContactForm />
      </main>
      <Footer />
      <FloatingContactIcons />
    </div>
  );
};

export default Index;
