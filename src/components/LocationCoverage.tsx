
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Fourways", "Sandton", "Bryanston", "Randburg", "Lonehill",
  "Dainfern", "Broadacres", "Douglasdale", "Northriding", "Midrand",
  "Kyalami", "Sunninghill", "Rivonia", "Morningside", "Woodmead"
];

const LocationCoverage = () => {
  return (
    <section id="areas" className="py-20 bg-neutral-950 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <span className="bg-green-900/50 text-green-400 text-sm font-medium px-3 py-1 rounded-full">Service Areas</span>
            <h2 className="text-3xl font-display font-bold mt-4 mb-6">We Cover All Areas Around Fourways</h2>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl mb-6">
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-400" />
                    <span className="text-white/90">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Fast Response Times</h3>
                  <p className="text-white/70">We aim to reach your location within 1-2 hours of your call</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Mobile Technicians</h3>
                  <p className="text-white/70">Our fully equipped vans carry all necessary equipment</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 rounded-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-0 hover:shadow-lg hover:shadow-green-700/30 transition-all">
              Check Availability in Your Area
            </Button>
          </div>
          
          <div className="md:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Map of service areas" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-white/90">Currently Serving</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">15+ Areas in Johannesburg</h3>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-green-600 py-3 px-6 rounded-lg shadow-lg transform rotate-3">
              <span className="font-bold text-white text-lg">Same Day Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCoverage;
