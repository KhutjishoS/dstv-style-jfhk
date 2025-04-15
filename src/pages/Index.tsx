
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PromptExamples from "@/components/PromptExamples";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PromptExamples />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
