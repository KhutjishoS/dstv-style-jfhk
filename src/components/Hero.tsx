
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/50 to-transparent -z-10 opacity-70"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Craft Perfect <span className="gradient-text">AI Prompts</span> Every Time
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn powerful prompt engineering techniques that unlock the full potential of AI assistants for your specific needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90 px-8">
              Explore Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Read the Guide
            </Button>
          </div>
          
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent h-16 -bottom-1"></div>
            <div className="border border-border rounded-xl shadow-lg overflow-hidden max-w-3xl w-full bg-white">
              <div className="p-4 border-b border-border flex justify-between items-center bg-secondary/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-xs text-muted-foreground">Example Prompt</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto bg-white text-left">
                <code>{`I want you to act as a [ROLE] who specializes in [DOMAIN].

Given the task to [SPECIFIC TASK]:

- Consider [CONSTRAINT/PARAMETER 1]
- Ensure [CONSTRAINT/PARAMETER 2]
- Optimize for [GOAL/METRIC]

The output should be in [FORMAT] with [SPECIFIC REQUIREMENTS].

Additional context:
[Any relevant information that might help the AI]`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
