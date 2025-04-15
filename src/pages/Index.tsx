
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Areas from "@/components/Areas";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Areas />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
