import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoFile from "../../assets/video.mp4";
import heroBg1 from "../../assets/Gallery/HeroSection2.jpg";

import TypeWriter from "./TypeWriter";
import PlayButton from "./PlayButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [isLaptopView, setIsLaptopView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const heroContent = [
    {
      image: heroBg1,
      headline: "Travels & Adventures",
      subheading: "Discover the world, one journey at a time.",
      description:
        "Embrace tourism that connects cultures, nature, and unforgettable experiences.",
    },
  ];
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsLaptopView(width >= 1024); // Tailwind lg
      setIsMobileView(width < 640); // Tailwind sm
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handlePrev = () => {
    setBgIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  const handleNext = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const currentContent = heroContent[bgIndex];

  return (
    <div
      id="hero"
      className="relative w-full min-h-[70vh] sm:min-h-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8
        py-8 sm:py-16 md:py-20 transition-all duration-1000 ease-in-out overflow-hidden pt-[64px] sm:pt-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-80 sm:opacity-70"
        style={{ backgroundImage: `url(${currentContent.image})`, zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2
             bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full z-20
             transition-colors inline-flex items-center justify-center"
      >
        <ChevronLeft size={20} className="sm:hidden" />
        <ChevronLeft size={28} className="hidden sm:block" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2
             bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full z-20
             transition-colors inline-flex items-center justify-center "
      >
        <ChevronRight size={20} className="sm:hidden" />
        <ChevronRight size={28} className="hidden sm:block" />
      </button>

      {/* Text Content */}
      <div className="relative z-30 max-w-xl text-center text-white mt-6 sm:mt-10 px-4 sm:px-6 md:px-8">
        {!showVideo && (
          <div className="mt-8 flex justify-center">
            <PlayButton
              size={64}
              onClick={() => setShowVideo(true)}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-sm bg-black/70">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
            <video
              //src={videoFile}
              controls
              autoPlay
              onEnded={() => setShowVideo(false)}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close Video"
              className="absolute top-2 right-2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-300 z-50"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
