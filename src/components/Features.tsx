
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Layers, Wand2, BookOpen, Target, Sparkles } from "lucide-react";

const features = [
  {
    title: "Clear Instruction Patterns",
    description: "Learn structural patterns that make your prompts more effective and easier to follow.",
    icon: Layers,
  },
  {
    title: "Role-Based Prompting",
    description: "Unlock specialized knowledge by assigning specific roles to the AI assistant.",
    icon: Brain,
  },
  {
    title: "Context Optimization",
    description: "Provide the right amount of context to get more accurate and relevant responses.",
    icon: Target,
  },
  {
    title: "Output Formatting",
    description: "Control exactly how the AI formats its response for your specific needs.",
    icon: Wand2,
  },
  {
    title: "Chain of Thought",
    description: "Guide the AI to show its reasoning process step by step for better results.",
    icon: BookOpen,
  },
  {
    title: "Advanced Techniques",
    description: "Master specialized techniques like few-shot learning and prompt chaining.",
    icon: Sparkles,
  },
];

const Features = () => {
  return (
    <section id="techniques" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Powerful Prompting Techniques</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Master these core strategies to dramatically improve your AI interactions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-white shadow-sm hover:shadow-md transition-all">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
