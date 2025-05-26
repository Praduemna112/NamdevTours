import React from "react";
import heroBg1 from "../../assets/photos/aboutus.jpg";
import beach from "../../assets/Gallery/beach.jpeg";
import forest from "../../assets/Gallery/forest.jpeg";
import mount from "../../assets/Gallery/mount.jpeg";
import tajmahal from "../../assets/Gallery/tajmahal.jpeg";
import springHiking from "../../assets/Gallery/springHiking.jpeg";
import maldives from "../../assets/Gallery/maldives.jpeg";
import resting from "../../assets/Gallery/resting.jpeg";
import iceland from "../../assets/Gallery/iceland.jpeg";
import rajgad from "../../assets/Gallery/rajgad.jpeg";
// Example image array with title and subtitle
const images = [
  { src: beach, title: "1", subtitle: "subtitle" },
  { src: forest, title: "2", subtitle: "subtitle" },
  { src: mount, title: "3", subtitle: "subtitle" },
  { src: tajmahal, title: "4", subtitle: "subtitle" },
  { src: springHiking, title: "5", subtitle: "subtitle" },
  { src: maldives, title: "6", subtitle: "subtitle" },
  { src: resting, title: "7", subtitle: "subtitle" },
  { src: iceland, title: "8", subtitle: "subtitle" },
  { src: rajgad, title: "9", subtitle: "subtitle" },
];

const ImageGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Image with zoom and opacity on hover */}
            <img
              src={image.src}
              alt={`Destination ${index + 1}`}
              className="w-full h-[500px] object-cover transform transition-all duration-500 group-hover:scale-105"
            />

            {/* Centered Text (Title + Subtitle) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
              <h2 className="text-white text-5xl font-extrabold px-4 py-2 rounded">
                {image.title}
              </h2>
              <p className="mt-2 text-white text-xl italic px-3 py-1 rounded">
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
