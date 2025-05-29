import React, { useState } from "react";
import img2 from "../../assets/photos/aboutus.jpg";
import heroBg1 from "../../assets/Gallery/destination_image.jpg";

import ImageGrid from "./ImageGrid";

const DestinationList = () => {
   const [bgIndex] = useState(0);
  
    const heroContent = [
      {
        image: heroBg1,
        headline: "Destination",
        subheading: "Discover the world, one journey at a time.",
        description:
          "Embrace tourism that connects cultures, nature, and unforgettable experiences.",
      },
    ];
  
    const currentContent = heroContent[bgIndex];
  return (
    <>
      {/* HERO SECTION */}
      <div
        id="hero"
        className="relative w-full min-h-[50vh] sm:min-h-[75vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 transition-all duration-1000 ease-in-out overflow-hidden pt-[64px] sm:pt-0"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${currentContent.image})`,
            zIndex: 0,
            filter: "brightness(1)",
          }}
          aria-hidden="true"
        />

        {/* Text Content */}
        <div className="relative z-30 max-w-xl text-center text-white mt-6 sm:mt-10 px-4 sm:px-6 md:px-8">
          <h1 className="italic font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
            {currentContent.headline}
          </h1>
          <h2 className="mt-3 text-lg sm:text-xl italic font-semibold drop-shadow-md">
            {currentContent.subheading}
          </h2>
          <p className="mt-2 text-yellow-400 text-sm sm:text-base italic drop-shadow-md">
            {currentContent.description}
          </p>
        </div>
      </div>
      <div className="pb-20"></div>
    <ImageGrid />
    </>
  )
}

export default DestinationList
