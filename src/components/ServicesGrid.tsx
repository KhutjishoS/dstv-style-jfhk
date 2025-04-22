import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Tv, Wrench, WifiIcon, Antenna, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "DSTV Installation",
    description: "Professional installation of your DSTV decoder and satellite dish with perfect signal alignment.",
    icon: Satellite,
    color: "bg-blue-100 text-blue-600",
    path: "/services/installation",
  },
  {
    title: "DSTV Repairs",
    description: "Quick diagnosis and repair of all DSTV-related issues including signal problems and hardware failures.",
    icon: Wrench,
    color: "bg-red-100 text-red-600",
    path: "/services/repairs",
  },
  {
    title: "Extra View Setup",
    description: "Connect multiple TVs to one subscription with our expert Extra View installation service.",
    icon: Tv,
    color: "bg-purple-100 text-purple-600",
    path: "/services/extra-view",
  },
  {
    title: "Signal Troubleshooting",
    description: "Resolving signal issues, dish realignment and optimization for the best viewing experience.",
    icon: Antenna,
    color: "bg-amber-100 text-amber-600",
    path: "/services/signal-troubleshooting",
  },
  {
    title: "Smart Home Integration",
    description: "Connect your DSTV system to your smart home setup for seamless entertainment control.",
    icon: WifiIcon,
    color: "bg-green-100 text-green-600",
    path: "/services/smart-home",
  },
];

const ServicesGrid = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-4 md:py-12 bg-gradient-to-b from-white to-neutral-50 scroll-mt-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-2">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Complete DSTV Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional installation and maintenance services to keep your entertainment systems running perfectly
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left mb-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>DStv Explora, Standard & HD Decoder Installations</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Extra View & Triple View Setup</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Signal Troubleshooting & Repairs</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Additional TV Points Installation</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Surround Sound Setup & Configuration</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Fiber to DStv Integration</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Installations for Complexes, Hotels & Guest Houses</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>DStv Cables & Accessories Replacement</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Satellite Dish Mounting, Alignment & Relocation</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>TV, Decoder & Projector Wall Mounting</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>System Upgrades & General Repairs</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleServiceClick(service.path)}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full bg-white">
                  <CardContent className="p-0 h-full flex flex-col">
                  <div className="p-4 flex-grow">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                        <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex justify-end p-3 border-t bg-gradient-to-r from-neutral-50 to-white">
                    <span className="text-sm font-medium text-blue-600 flex items-center group hover:text-blue-700 transition-colors">
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                  </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group bg-blue-50 py-2 px-5 rounded-full transition-all hover:bg-blue-100"
          >
            Need a custom solution? Contact us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
