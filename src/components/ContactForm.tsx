import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Clock, Check, Satellite, Wrench, Tv, Antenna, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  
  const services = [
    { id: "installation", name: "DSTV Installation", icon: Satellite },
    { id: "repair", name: "DSTV Repair", icon: Wrench },
    { id: "extraview", name: "Extra View Setup", icon: Tv },
    { id: "signal", name: "Signal Issues", icon: Antenna },
    { id: "other", name: "Other Services", icon: MoreHorizontal },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Contact Us</span>
          <h2 className="text-3xl font-display font-bold mt-4 mb-2">Get In Touch Today</h2>
          <p className="text-muted-foreground">
            Contact us for a free quote or to schedule a service appointment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">We're Here To Help</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">011 234 5678</p>
                  <p className="text-muted-foreground">072 345 6789</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">info@dstvinstallers.co.za</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Opening Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                  <p className="text-muted-foreground">Saturday: 9am - 3pm</p>
                  <p className="text-muted-foreground">Sunday: Emergency calls only</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Check className="h-4 w-4 text-green-600" /> Our Promise
              </h4>
              <p className="text-sm text-muted-foreground">
                We guarantee prompt service, quality workmanship and fair pricing. If you're not completely satisfied, we'll make it right.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100">
              <h3 className="text-xl font-bold mb-6">Request a Free Quote</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
                  <Check className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium text-green-800">Thank you for your request!</h4>
                  <p className="text-green-700 text-sm">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="text-lg font-semibold mb-3 block">Select Service Required</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setSelectedService(service.id)}
                          className={`relative flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                            selectedService === service.id
                              ? 'border-green-600 bg-green-50/80 text-green-700 shadow-lg shadow-green-100'
                              : 'border-neutral-200 hover:border-green-400 hover:bg-green-50/30 hover:shadow-md'
                          }`}
                        >
                          <service.icon className={`h-8 w-8 mb-3 ${
                            selectedService === service.id ? 'text-green-600' : 'text-neutral-500'
                          }`} />
                          <span className="text-base font-medium text-center">{service.name}</span>
                          {selectedService === service.id && (
                            <div className="absolute top-2 right-2">
                              <Check className="h-5 w-5 text-green-600" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="surname">Surname</Label>
                      <Input id="surname" placeholder="Your surname" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Your phone number" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Your address" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Please provide any specific details about your request"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:shadow-lg hover:shadow-green-700/20">
                    Submit Request
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
