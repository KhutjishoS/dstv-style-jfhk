
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useState } from "react";

// Organized by province for better structure
const serviceAreasByProvince = {
  "Gauteng": [
    "Johannesburg", "Pretoria", "Sandton", "Midrand", "Centurion",
    "Fourways", "Randburg", "Bryanston", "Roodepoort", "Kempton Park"
  ],
  "Western Cape": [
    "Cape Town", "Stellenbosch", "Paarl", "Somerset West", "George",
    "Hermanus", "Langebaan", "Knysna", "Oudtshoorn", "Mossel Bay"
  ],
  "KwaZulu-Natal": [
    "Durban", "Pietermaritzburg", "Umhlanga", "Ballito", "Newcastle",
    "Richards Bay", "Amanzimtoti", "Ladysmith", "Port Shepstone", "Margate"
  ],
  "Eastern Cape": [
    "Port Elizabeth", "East London", "Mthatha", "Grahamstown", "Jeffreys Bay",
    "Uitenhage", "Graaff-Reinet", "Queenstown", "Port Alfred", "Humansdorp"
  ],
  "Free State": [
    "Bloemfontein", "Welkom", "Bethlehem", "Sasolburg", "Parys",
    "Kroonstad", "Harrismith", "Phuthaditjhaba", "Virginia", "Ficksburg"
  ],
  "North West": [
    "Rustenburg", "Potchefstroom", "Klerksdorp", "Mahikeng", "Brits",
    "Orkney", "Lichtenburg", "Vryburg", "Zeerust", "Schweizer-Reneke"
  ],
  "Mpumalanga": [
    "Nelspruit", "Witbank", "Secunda", "Middelburg", "Barberton",
    "White River", "Hazyview", "Sabie", "Ermelo", "Standerton"
  ],
  "Limpopo": [
    "Polokwane", "Tzaneen", "Louis Trichardt", "Phalaborwa", "Bela-Bela",
    "Mokopane", "Modimolle", "Thabazimbi", "Lephalale", "Giyani"
  ],
  "Northern Cape": [
    "Kimberley", "Upington", "Springbok", "Kuruman", "De Aar",
    "Kathu", "Calvinia", "Colesberg", "Port Nolloth", "Victoria West"
  ]
};

const Areas = () => {
  const [activeProvince, setActiveProvince] = useState("Gauteng");
  const [showAllProvinces, setShowAllProvinces] = useState(false);
  
  const handleProvinceClick = (province: string) => {
    setActiveProvince(province);
  };
  
  const toggleShowAllProvinces = () => {
    setShowAllProvinces(!showAllProvinces);
  };
  
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-display font-bold mb-6">Nationwide DSTV Installation</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of certified technicians provides fast and reliable DSTV installation services across all of South Africa:
              </p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {Object.keys(serviceAreasByProvince).map((province) => (
                  <button
                    key={province}
                    onClick={() => handleProvinceClick(province)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                      activeProvince === province 
                        ? "bg-green-600 text-white" 
                        : "bg-green-100 text-green-800 hover:bg-green-200"
                    }`}
                  >
                    {province}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {showAllProvinces ? (
                  Object.entries(serviceAreasByProvince).map(([province, areas]) => (
                    <div key={province} className="mb-4">
                      <h3 className="font-medium text-green-800 mb-2">{province}</h3>
                      {areas.slice(0, 5).map((area, i) => (
                        <div key={i} className="flex items-center gap-2 mb-1">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span>{area}</span>
                        </div>
                      ))}
                      {areas.length > 5 && <span className="text-sm text-green-600 ml-6">+{areas.length - 5} more</span>}
                    </div>
                  ))
                ) : (
                  serviceAreasByProvince[activeProvince].map((area, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>{area}</span>
                    </div>
                  ))
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <Button 
                  onClick={toggleShowAllProvinces} 
                  variant="outline" 
                  className="text-green-700 border-green-200 hover:bg-green-50"
                >
                  {showAllProvinces ? "Show Selected Province" : "View All Provinces"}
                </Button>
                
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
                src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Map of South Africa showing service areas" 
                className="rounded-2xl relative z-10 shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-lg shadow-lg z-20">
                <p className="text-sm font-medium text-green-800">Covering all 9 provinces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
