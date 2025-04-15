
import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Tv, Wrench, WifiIcon, Fingerprint, Antenna, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "DSTV Installation",
    description: "Professional installation of your DSTV decoder and satellite dish with perfect signal alignment.",
    icon: Satellite,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "DSTV Repairs",
    description: "Quick diagnosis and repair of all DSTV-related issues including signal problems and hardware failures.",
    icon: Wrench,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Extra View Setup",
    description: "Connect multiple TVs to one subscription with our expert Extra View installation service.",
    icon: Tv,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Signal Troubleshooting",
    description: "Resolving signal issues, dish realignment and optimization for the best viewing experience.",
    icon: Antenna,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Smart Home Integration",
    description: "Connect your DSTV system to your smart home setup for seamless entertainment control.",
    icon: WifiIcon,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Access Control",
    description: "Installation of access control systems including electric fencing and security gates.",
    icon: Fingerprint,
    color: "bg-indigo-100 text-indigo-600",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Our Services</span>
          <h2 className="text-3xl font-display font-bold mt-4 mb-2">Complete DSTV Solutions</h2>
          <p className="text-muted-foreground">
            Professional installation and maintenance services to keep your entertainment systems running perfectly
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <div className="h-1.5 bg-gradient-to-r from-green-500 to-green-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center text-green-600 font-medium hover:underline">
            Need a custom solution? Contact us
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
