
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-200/20 -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-green-200/30 -z-10"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-green-200/40 -z-10"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              Professional <span className="text-green-600">DSTV Installation</span> Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Reliable and affordable DSTV installation, maintenance, and repair services across Fourways and surrounding areas.
            </p>
            
            <ul className="space-y-2">
              {["Same-day service", "Expert technicians", "Affordable rates", "Quality guaranteed"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-green-700 to-green-600 hover:opacity-90 px-8">
                Request Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                View Our Services
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl rotate-1 transition-all hover:rotate-0 duration-300">
              <img 
                src="https://images.unsplash.com/photo-1638815401818-996f2eb382f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="DSTV Installation" 
                className="rounded-xl h-[400px] w-full object-cover"
              />
            </div>
            <div className="absolute -z-10 bottom-4 right-4 w-full h-[400px] rounded-2xl bg-green-200 -rotate-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
