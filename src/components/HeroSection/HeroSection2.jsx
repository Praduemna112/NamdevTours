import React, { useState } from "react";
import videoFile from "../../assets/video.mp4";
import heroBg1 from "../../assets/Gallery/herosection2.jpg";

import PlayButton from "./PlayButton";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const heroContent = [
    {
      image: heroBg1,
      headline: "Travels & Adventures",
      subheading: "Discover the world, one journey at a time.",
      description:
        "Embrace tourism that connects cultures, nature, and unforgettable experiences.",
    },
  ];

  const currentContent = heroContent[bgIndex];

  return (
    <div
      id="hero"
      className="relative w-full min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 overflow-hidden pt-[80px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain sm:bg-cover "
        style={{ backgroundImage: `url(${currentContent.image})`, zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Text Content + Play Button */}
      <div className="relative z-30 max-w-xl w-full text-center text-white mt-4 sm:mt-10 px-2 sm:px-3">
        {!showVideo && (
          <div className="absolute inset-0 z-30 flex items-center justify-center sm:static space-x-4">
            <PlayButton
              size={48}
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
              // src={videoFile}
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
