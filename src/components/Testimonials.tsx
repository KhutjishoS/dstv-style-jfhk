
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    location: "Fourways",
    text: "Excellent service! The technician arrived on time, was very professional, and fixed my DSTV signal issues quickly. Highly recommend!",
    rating: 5
  },
  {
    name: "Sarah Thompson",
    location: "Sandton",
    text: "I've used their services twice now for DSTV installation and maintenance. Always reliable, clean work and reasonable prices.",
    rating: 5
  },
  {
    name: "David Nkosi",
    location: "Bryanston",
    text: "Great company to work with. They responded quickly to my emergency call when my system went down before a big game. Life savers!",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-all border-border">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-4 flex-1">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
