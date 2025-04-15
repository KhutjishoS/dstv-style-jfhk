
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#9b87f5]/20 to-[#6E59A5]/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold">
            Start Creating Better Prompts Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who are leveraging AI more effectively with our prompt engineering techniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              View Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
