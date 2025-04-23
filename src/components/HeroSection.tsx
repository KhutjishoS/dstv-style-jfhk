import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-100 rounded-bl-[200px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-blue-200 rounded-tr-[200px] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-2">
              Professional DSTV Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Expert <span className="text-blue-600">DStv Installations</span> in Mzansi
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Fast, reliable and professional DSTV installation and repair services with same-day solutions across South Africa.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                "Same-day service", 
                "Affordable rates", 
                "Licensed experts", 
                "Quality guaranteed"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:-rotate-1 transition-transform duration-300">
                <img 
                  src="/Images/dstv2.jpg" 
                  alt="DSTV Installation Expert" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-xl">Professional Installation</p>
                    <p className="text-white/80">Serving South Africa since 2005</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg transform rotate-3 z-10">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-bold">Available Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
