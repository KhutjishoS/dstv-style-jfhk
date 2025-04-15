
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, Map } from "lucide-react";
import { useState } from "react";

// Major provinces and their key cities
const provinces = {
  "Gauteng": ["Johannesburg", "Pretoria", "Sandton", "Midrand", "Centurion"],
  "Western Cape": ["Cape Town", "Stellenbosch", "Paarl", "Somerset West", "George"],
  "KwaZulu-Natal": ["Durban", "Pietermaritzburg", "Umhlanga", "Ballito", "Richards Bay"],
  "Eastern Cape": ["Port Elizabeth", "East London", "Mthatha", "Grahamstown", "Jeffreys Bay"],
  "Other Provinces": ["Bloemfontein", "Nelspruit", "Polokwane", "Kimberley", "Rustenburg"]
};

const LocationCoverage = () => {
  const [activeProvince, setActiveProvince] = useState("Gauteng");

  return (
    <section id="areas" className="py-20 bg-neutral-950 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <span className="bg-green-900/50 text-green-400 text-sm font-medium px-3 py-1 rounded-full">Nationwide Coverage</span>
            <h2 className="text-3xl font-display font-bold mt-4 mb-6">We Cover All of South Africa</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(provinces).map((province) => (
                <button
                  key={province}
                  onClick={() => setActiveProvince(province)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                    activeProvince === province 
                      ? "bg-green-500 text-white" 
                      : "bg-black/30 text-white/80 hover:bg-black/50"
                  }`}
                >
                  {province}
                </button>
              ))}
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl mb-6">
              <div className="grid grid-cols-2 gap-3">
                {provinces[activeProvince as keyof typeof provinces].map((area, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-400" />
                    <span className="text-white/90">{area}</span>
                  </div>
                ))}
                <div className="col-span-2 mt-4">
                  <p className="text-white/70 text-sm">
                    <Map className="h-4 w-4 text-green-400 inline mr-2" />
                    And many more locations throughout {activeProvince}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Nationwide Service Network</h3>
                  <p className="text-white/70">Technicians available across all 9 provinces of South Africa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Fast Response Times</h3>
                  <p className="text-white/70">We aim to reach your location within 24-48 hours, nationwide</p>
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
                src="https://images.unsplash.com/photo-1535199171609-311958b12a30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Map of South Africa" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-white/90">Full National Coverage</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">All 9 Provinces of South Africa</h3>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-green-600 py-3 px-6 rounded-lg shadow-lg transform rotate-3">
              <span className="font-bold text-white text-lg">Nationwide Installation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCoverage;
