import React from "react";

import forest from "../../../assets/Gallery/forest.jpeg";

// Sample images for place 1
import placeImg1 from "../../../assets/Gallery/gallery/manali/image1.jpg";
import placeImg2 from "../../../assets/Gallery/gallery/manali/image1.jpg";
import placeImg3 from "../../../assets/Gallery/gallery/manali/image1.jpg";


const placeImages = [
  { src: placeImg1, alt: "Place 1 - Image 1" },
  { src: placeImg2, alt: "Place 1 - Image 2" },
  { src: placeImg3, alt: "Place 1 - Image 3" },

];

const Place2 = () => {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${forest})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Manali</h1>
          <p className="text-gray-200 mt-2 text-sm md:text-base">
            More pictures from this destination.
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Place2;
