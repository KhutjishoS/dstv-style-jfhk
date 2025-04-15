
import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Tv, Tool, WifiIcon, Fingerprint, Antenna } from "lucide-react";

const services = [
  {
    title: "DSTV Installation",
    description: "Professional installation of your DSTV decoder and satellite dish with perfect signal alignment.",
    icon: Satellite,
  },
  {
    title: "DSTV Repairs",
    description: "Quick diagnosis and repair of all DSTV-related issues including signal problems and hardware failures.",
    icon: Tool,
  },
  {
    title: "Extra View Setup",
    description: "Connect multiple TVs to one subscription with our expert Extra View installation service.",
    icon: Tv,
  },
  {
    title: "Signal Troubleshooting",
    description: "Resolving signal issues, dish realignment and optimization for the best viewing experience.",
    icon: Antenna,
  },
  {
    title: "Smart Home Integration",
    description: "Connect your DSTV system to your smart home setup for seamless entertainment control.",
    icon: WifiIcon,
  },
  {
    title: "Access Control",
    description: "Installation of access control systems including electric fencing and security gates.",
    icon: Fingerprint,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Our Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We provide a wide range of installation and maintenance services to keep your entertainment systems running smoothly
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border bg-white hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardContent className="flex flex-col p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
