import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InstallationPage = () => {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/Images/pattern.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-8 hover:bg-blue-100/50 backdrop-blur-sm"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 space-y-8 border border-blue-100/50">
            <h1 className="text-4xl font-display font-bold text-gray-900">
              DSTV Installation Services
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">
                Our professional DSTV installation service ensures you get the best signal quality and viewing experience. 
                We handle everything from site survey to final setup, including:
              </p>
              
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Site Survey</h3>
                    <p className="text-gray-600">We assess your location to determine the best installation approach and equipment needed.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Equipment Installation</h3>
                    <p className="text-gray-600">Professional installation of your DSTV dish, LNB, and decoder with proper alignment for optimal signal.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">System Setup</h3>
                    <p className="text-gray-600">Complete configuration of your decoder, including channel setup and remote programming.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Additional Installation Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Extra View Installation",
                      description: "Set up additional decoders for multi-room viewing with our expert Extra View installation service.",
                      image: "/Images/extraview.png"
                    },
                    {
                      title: "Explora Installation",
                      description: "Professional installation of DStv Explora decoders with full setup and configuration.",
                      image: "/Images/exploraInstallation.png"
                    },
                    {
                      title: "Extra TV Points Installation",
                      description: "Install additional TV points throughout your home for flexible viewing options.",
                      image: "/Images/extratv.png"
                    },
                    {
                      title: "DStv Communal Installations",
                      description: "Specialized installation services for apartment complexes and communal living spaces.",
                      image: "/Images/dstvcumm.png"
                    },
                    {
                      title: "DStv HD Decoder Installation",
                      description: "Expert installation of HD decoders with optimal picture quality setup.",
                      image: "/Images/dstvhd.png"
                    },
                    {
                      title: "DStv Explora Ultra Installation",
                      description: "Professional installation of the latest Explora Ultra decoders with all features configured.",
                      image: "/Images/dstvexplo.jpg"
                    },
                    {
                      title: "TV Wall Mounting",
                      description: "Safe and secure TV wall mounting service with cable management solutions.",
                      image: "/Images/dstvmou.jpg"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50">
                      <div className="relative aspect-video w-full">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 text-xl mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={handleContactNavigation}
              >
                Get a Free Quote
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage; 