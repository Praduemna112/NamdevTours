import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoFile from "../../assets/video.mp4";
import heroBg1 from "../../assets/photos/heroTravel1.jpg";
import heroBg2 from "../../assets/photos/heroTravel2.jpg";
import heroBg3 from "../../assets/photos/heroTravel3.jpg";
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
    {
      image: heroBg2,
      headline: "Beauty of Discovery",
      subheading: "Explore hidden gems around the globe.",
      description:
        "Open your heart to breathtaking views and the rhythm of new cities.",
    },
    {
      image: heroBg3,
      headline: "Find Your Own Way",
      subheading: "Let your journey shape your story.",
      description:
        "Craft unique adventures that belong to you and no one else.",
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

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLaptopView(window.innerWidth >= 1024); // Tailwind lg breakpoint (1024px)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Automatic background slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroContent.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (showVideo) setShowVideo(false);
    };

    if (showVideo) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showVideo]);

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
  className="relative w-full min-h-[70vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8
    py-8 sm:py-16 md:py-20 transition-all duration-1000 ease-in-out overflow-visible pt-[64px] sm:pt-0 z-0"
>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-80 sm:opacity-70"
        style={{ backgroundImage: `url(${currentContent.image})`, zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }} />

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
        <h1 className="text-yellow-400 italic font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg lg:whitespace-nowrap">
          {currentContent.headline}
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl italic font-semibold text-white drop-shadow-md lg:whitespace-nowrap">
          {currentContent.subheading}
        </h2>
        <p className="mt-2 text-yellow-200 text-sm sm:text-base italic drop-shadow-md lg:whitespace-nowrap">
          {currentContent.description}
        </p>

        {(isLaptopView || isMobileView) && (
          <div className="whitespace-normal md:whitespace-nowrap mt-4">
            <TypeWriter />
          </div>
        )}

        <Link to="/about" className="inline-block mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-6 rounded-full text-base shadow-lg transition-transform hover:scale-105">
            Know More
          </button>
        </Link>
        
          {/* video icon */}
        {/* {!showVideo && (
          <div className="mt-8 flex justify-center">
            <PlayButton size={64} onClick={() => setShowVideo(true)} />
          </div>
        )} */}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-sm bg-black/70">
          <div className="relative w-full max-w-4xl max-h-[90vh] flex justify-center items-center">
            <video
              // src={videoFile}
              controls
              autoPlay
              onEnded={() => setShowVideo(false)}
              className="w-full h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close Video"
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-300 z-50"
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
