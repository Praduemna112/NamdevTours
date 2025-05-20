import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/photos/aboutus.jpg";
import heroBg1 from "../../assets/photos/aboutus.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

const Aboutus = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [isLaptopView, setIsLaptopView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const heroContent = [
    {
      image: heroBg1,
      headline: "About Us",
      subheading: "Discover the world, one journey at a time.",
      description:
        "Embrace tourism that connects cultures, nature, and unforgettable experiences.",
    },
  ];
 
  const currentContent = heroContent[bgIndex];

  return (
    <>
    <div
      id="hero"
      className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8
        py-8 sm:py-16 md:py-20 transition-all duration-1000 ease-in-out overflow-hidden pt-[64px] sm:pt-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${currentContent.image})`,
          zIndex: 0,
          filter: "brightness(1)", // Optional: tweak for brightness
        }}
        aria-hidden="true"
      />

      {/* Text Content */}
      <div className="relative z-30 max-w-xl text-center text-white mt-6 sm:mt-10 px-4 sm:px-6 md:px-8">
        <h1 className="text-white text-center italic font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg lg:whitespace-nowrap">
          {currentContent.headline}
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl italic font-semibold text-white drop-shadow-md lg:whitespace-nowrap">
          {currentContent.subheading}
        </h2>
        <p className="mt-2 text-yellow-200 text-sm sm:text-base italic drop-shadow-md lg:whitespace-nowrap">
          {currentContent.description}
        </p>
      </div>
         
    </div>
        </>
  );
};

export default Aboutus;
