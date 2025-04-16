import { Mail, Phone, MessageCircle, MessageSquare, MessageCircleMore, PhoneCall, MailPlus } from "lucide-react";
import { useState } from "react";

const FloatingContactIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50"
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen && (
        <div className="flex flex-col gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/27716210719"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 hover:shadow-xl flex items-center justify-center"
            title="Chat on WhatsApp"
          >
            <MessageCircleMore className="h-7 w-7" />
          </a>

          {/* Phone */}
          <a
            href="tel:+27716210719"
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110 hover:shadow-xl flex items-center justify-center"
            title="Call Us"
          >
            <PhoneCall className="h-7 w-7" />
          </a>

          {/* Email */}
          <a
            href="mailto:khutsisoshogole@gmail.com"
            className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-all hover:scale-110 hover:shadow-xl flex items-center justify-center"
            title="Email Us"
          >
            <MailPlus className="h-7 w-7" />
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 hover:shadow-xl flex items-center justify-center"
        title={isOpen ? "Close Contact Options" : "Open Contact Options"}
      >
        <MessageSquare className="h-7 w-7" />
      </button>
    </div>
  );
};

export default FloatingContactIcons; 