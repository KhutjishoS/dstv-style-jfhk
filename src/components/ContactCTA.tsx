
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Clock } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-green-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Get In Touch</h2>
            <p className="text-green-100 max-w-md">
              Contact us today for a free quote or to schedule a service appointment. Our friendly team is ready to assist you.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-700 p-2 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-green-100">011 234 5678</p>
                  <p className="text-green-100">072 345 6789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-700 p-2 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-green-100">info@dstvinstallers.co.za</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-700 p-2 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Operating Hours</h3>
                  <p className="text-green-100">Monday - Friday: 8am - 6pm</p>
                  <p className="text-green-100">Saturday: 9am - 3pm</p>
                  <p className="text-green-100">Sunday: Emergency calls only</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-foreground p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <select 
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="installation">DSTV Installation</option>
                    <option value="repair">DSTV Repair</option>
                    <option value="extraview">Extra View Setup</option>
                    <option value="signal">Signal Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Please provide details about your request"
                  ></textarea>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:opacity-90">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
