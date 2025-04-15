
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection"; 
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import LocationCoverage from "@/components/LocationCoverage";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent -z-10 h-96"></div>
          <ServicesGrid />
        </div>
        <LocationCoverage />
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-green-50/50 to-transparent -z-10"></div>
          <TestimonialsCarousel />
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
