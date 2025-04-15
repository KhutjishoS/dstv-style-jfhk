
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    location: "Fourways",
    text: "Excellent service! The technician arrived on time, was very professional, and fixed my DSTV signal issues quickly. Highly recommend!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Thompson",
    location: "Sandton",
    text: "I've used their services twice now for DSTV installation and maintenance. Always reliable, clean work and reasonable prices.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Nkosi",
    location: "Bryanston",
    text: "Great company to work with. They responded quickly to my emergency call when my system went down before a big game. Life savers!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Emma Roberts",
    location: "Lonehill",
    text: "The installer was knowledgeable and patient. He took the time to explain how everything works. My DSTV has never worked better.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="text-3xl font-display font-bold mt-4 mb-2">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <Card className="bg-white border-none shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="hidden md:block">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow">
                              <Quote className="h-4 w-4 text-green-600" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-green-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-green-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-green-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-green-600" />
          </button>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-green-600" : "w-2 bg-green-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
