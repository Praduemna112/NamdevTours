import React from "react";
import heroBg1 from "../../assets/photos/aboutus.jpg";
import FeacturePage from "../FeactureSection/FeacturePage";
import HeroSection2 from "../HeroSection/HeroSection2";

const WhatWeOffer = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[75vh] flex items-center justify-center px-4 py-16 sm:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg1})` }}
      >
        <div className="absolute inset-0  z-10" />
        <div className="relative z-20 text-center text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold italic drop-shadow-lg">
            What we offer
          </h1>
          <p className="mt-4 text-xl italic">
            Discover the world, one journey at a time.
          </p>
          <p className="mt-2 text-yellow-400 italic">
            Embrace tourism that connects cultures, nature, and unforgettable
            experiences.
          </p>
        </div>
      </div>
         {/* REVIEW SECTION WRAPPER */}
<div className="max-w-6xl mx-auto px-6 py-16">
  <div className="bg-white rounded-3xl shadow-lg p-10 md:p-16 flex flex-col md:flex-row gap-10 items-start md:items-center">
    
    {/* LEFT SIDE: Success Info */}
    <div className="w-full md:w-1/2">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Success</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        We take pride in crafting exceptional travel experiences. With fast and secure booking,
        great value for your budget, breathtaking destinations, and a dedicated team — our customers love us!
      </p>
      <div className="text-yellow-400 text-6xl font-extrabold drop-shadow-md mb-2 animate-pulse">92%</div>
      <p className="text-gray-700 text-lg font-medium">Customer Satisfaction Rate</p>
    </div>

    {/* RIGHT SIDE: Review Bars */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Customer Ratings</h3>
      {[
        { label: "Fast Booking", rating: 90 },
        { label: "Value for Money", rating: 85 },
        { label: "Beautiful Places", rating: 95 },
        { label: "Our Team", rating: 88 },
      ].map((item, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
            <span className="text-sm font-medium text-gray-600">{item.rating}%</span>
          </div>
          <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div
              className="bg-yellow-400 h-3 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${item.rating}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>
      <div className="pb-20"></div>
      <HeroSection2/>
      <div className="pb-20"></div>
      <FeacturePage />
  



    </>
  );
};

export default WhatWeOffer;
