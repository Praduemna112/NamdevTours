import React, { useEffect } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

import "aos/dist/aos.css";

const Feature = () => {
  const features = [
    {
      icon: (
        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
          <IoDiamondOutline size={30} />
        </div>
      ),
      title: "Special Activities",
      description: "Unique experiences curated to make your trip unforgettable.",
    },
    {
      icon: (
        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
          <FaPen size={30} />
        </div>
      ),
      title: "Travel Arrangement",
      description: "End-to-end travel planning for a stress-free journey.",
    },
    {
      icon: (
        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
          <IoStarOutline size={30} />
        </div>
      ),
      title: "Your Private Guide",
      description: "Expert guides providing insights and personalized service.",
    },
    {
      icon: (
        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
          <CiLocationOn size={30} />
        </div>
      ),
      title: "Location Manager",
      description: "On-ground support to handle logistics and coordination.",
    },
  ];

  return (
    <>
      {/* Feature Icons Section */}
      <div className="bg-white w-screen py-10 px-6 sm:px-10 md:px-20 rounded-lg relative">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 text-center mt-10">
          {features.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 duration-300"
            >
              <span className="text-white text-5xl drop-shadow">{icon}</span>
              <h4 className="font-semibold mt-4 text-base sm:text-lg px-2">
                {title}
              </h4>
              <p className="text-gray-500 text-sm mt-2 px-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
