import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SmartHomeIntegrationPage = () => {
  const navigate = useNavigate();

  const features = [
    "Smart device connectivity",
    "Voice control setup",
    "Mobile app integration",
    "Automated scheduling",
    "Remote access configuration",
    "Multi-room synchronization"
  ];

  const handleContactNavigation = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4 py-16">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-600 hover:text-green-700 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Smart Home Integration
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your DSTV experience with smart home integration. Control your entertainment 
              system with voice commands, mobile apps, and automated schedules.
            </p>
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
              onClick={handleContactNavigation}
            >
              Get Smart Integration
            </Button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-6">Smart Features:</h3>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Integration Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Smart Assessment",
                description: "We evaluate your current setup and smart home requirements."
              },
              {
                step: "2",
                title: "System Integration",
                description: "We integrate your DSTV with your preferred smart home platform."
              },
              {
                step: "3",
                title: "Smart Setup",
                description: "We configure automation, voice controls, and mobile access."
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-green-600 font-bold text-lg mb-2">Step {phase.step}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-green-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready for Smart Entertainment?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Make your DSTV system smarter and more convenient. Contact us to learn how 
            we can integrate your entertainment system with your smart home.
          </p>
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
            onClick={handleContactNavigation}
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeIntegrationPage; 