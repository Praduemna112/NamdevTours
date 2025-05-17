import React from "react";
import whatsappIcon from "../../assets/whatsappIcon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919898989898"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 md:px-5 py-2.5 md:py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-6 h-6 md:w-7 md:h-7"
      />
      <span className="font-medium text-sm md:text-lg">Let me join</span>
    </a>
  );
};

export default WhatsAppButton;
