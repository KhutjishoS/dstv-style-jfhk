import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExtraViewSetupPage = () => {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate("/#contact", { replace: true });
  };

  const features = [
    "Multi-room viewing setup",
    "Decoder synchronization",
    "Cable routing and concealment",
    "Signal optimization",
    "Remote control configuration",
    "Full system testing"
  ];

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
              Extra View Setup
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Enjoy DSTV in multiple rooms with our professional Extra View setup service.
              We ensure perfect synchronization and optimal viewing experience in every room.
            </p>
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
              onClick={handleContactNavigation}
            >
              Setup Extra View
            </Button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-6">What's Included:</h3>
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
          <h2 className="text-3xl font-bold mb-8">Setup Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Home Assessment",
                description: "We evaluate your home layout and determine the optimal setup for multiple TVs."
              },
              {
                step: "2",
                title: "Professional Setup",
                description: "We install and configure your Extra View system with neat cable management."
              },
              {
                step: "3",
                title: "System Configuration",
                description: "We ensure all TVs are properly synchronized and working perfectly."
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
          <h2 className="text-3xl font-bold mb-4">Ready for Multi-Room Entertainment?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your home entertainment experience with DSTV Extra View. 
            Contact us today for professional setup and configuration.
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

export default ExtraViewSetupPage; 