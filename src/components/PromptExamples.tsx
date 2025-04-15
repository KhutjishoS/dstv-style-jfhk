
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const examples = [
  {
    id: "basic",
    title: "Basic Structure",
    prompt: `I want you to act as a data scientist with expertise in visualization.

Given a dataset about climate change trends:

- Create a clear visualization showing temperature changes over the last century
- Use blue for decreasing temperatures and red for increasing temperatures
- Include clear annotations for significant events that affected climate

The output should be a step-by-step explanation of how to create this visualization in Python, with the code included.`,
  },
  {
    id: "expert",
    title: "Expert Mode",
    prompt: `I want you to act as a senior marketing strategist who specializes in social media engagement for B2B tech companies.

Your task is to create a comprehensive 30-day content calendar for a new AI product launch:

- Target audience is technical decision-makers at enterprise companies
- Content should emphasize ROI and integration capabilities
- Each post should include a clear call-to-action
- Generate content for LinkedIn, Twitter, and email newsletters

The output should be formatted as a table with columns for: Date, Platform, Content Theme, Actual Content, Call-to-Action, and Visual Recommendations.

Additional context:
The product uses machine learning to automate document processing and has been proven to reduce processing time by 75% in early tests.`,
  },
  {
    id: "creative",
    title: "Creative Writing",
    prompt: `I want you to act as a fantasy fiction writer in the style of Brandon Sanderson.

Create a scene that introduces a unique magic system with the following characteristics:
- The magic draws power from emotional memories
- Using the magic visibly ages the practitioner temporarily
- The society has strict rules about when this magic can be used

The scene should feature a young practitioner using this magic for the first time in a forbidden situation.

Write approximately 500 words with vivid sensory details and dialogue that reveals aspects of the world's culture.`,
  },
];

const PromptExamples = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({
      title: "Copied to clipboard",
      description: "The prompt has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="examples" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Example Prompts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            See how different prompt structures can dramatically improve AI responses
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {examples.map((example) => (
                <TabsTrigger key={example.id} value={example.id} className="text-sm md:text-base">
                  {example.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {examples.map((example) => (
              <TabsContent key={example.id} value={example.id} className="mt-0">
                <div className="relative bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                  <div className="flex justify-between items-center p-4 border-b border-border bg-secondary/30">
                    <h3 className="font-medium">{example.title}</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 px-2"
                      onClick={() => handleCopy(example.prompt, example.id)}
                    >
                      {copiedId === example.id ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="ml-1">{copiedId === example.id ? "Copied!" : "Copy"}</span>
                    </Button>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto whitespace-pre-wrap">
                    {example.prompt}
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PromptExamples;
