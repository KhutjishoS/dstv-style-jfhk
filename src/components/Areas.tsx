
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const areas = [
  "Fourways", "Sandton", "Bryanston", "Randburg", "Lonehill",
  "Dainfern", "Broadacres", "Douglasdale", "Northriding", "Midrand",
  "Kyalami", "Sunninghill", "Rivonia", "Morningside", "Woodmead"
];

const Areas = () => {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-display font-bold mb-6">Areas We Service</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of certified technicians provides fast and reliable DSTV installation services across these areas:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {areas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="rounded-full bg-gradient-to-r from-green-700 to-green-600 hover:opacity-90">
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-green-200 to-green-100 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Map of service areas" 
                className="rounded-2xl relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
