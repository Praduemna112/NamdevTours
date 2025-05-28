import React from "react";
import travelData from "../TravelGrid/TravelData";
import { Link } from "react-router-dom";

const ImageGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {travelData.map((item, index) => (
          <Link
            to={`/travel/${item.id}`} // 👈 navigate to TravelDetail
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={item.image}
              alt={`Destination ${index + 1}`}
              className="w-full h-[500px] object-cover transform transition-all duration-500 group-hover:scale-105"
            />

            {/* Title + Subtitle Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
              <h2 className="text-white text-3xl font-bold bg-opacity-50 px-4 py-2 rounded">
                {item.title}
              </h2>
              <p className="mt-2 text-white text-lg italic bg-opacity-30 px-3 py-1 rounded">
                {item.subtitle}
              </p>
            </div>

            {/* Price at Bottom */}
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 text-black text-center py-2">
              <span className="text-lg font-semibold">{item.price}/Person</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
