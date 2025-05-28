import React, { useState } from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { IoBookOutline, IoLocationSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import heroBg1 from "../../assets/photos/aboutus.jpg";
import TourCard from "./TourCard";
import travelData from "../TravelGrid/TravelData"; // Make sure travelData is exported from its file

const Tour = () => {
  const tabs = ["date", "price low to high", "price high to low", "name a to z"];
  const [activeTab, setActiveTab] = useState("date");

  const tabIcons = {
    date: <FaRegAddressBook className="inline-block mr-2 w-5 h-5" />,
    "price low to high": <IoBookOutline className="inline-block mr-2 w-5 h-5" />,
    "price high to low": <IoLocationSharp className="inline-block mr-2 w-5 h-5" />,
    "name a to z": <GrGallery className="inline-block mr-2 w-5 h-5" />,
  };

  const getSortedData = () => {
    const cleanPrice = (priceStr) =>
      parseFloat(priceStr.replace(/[^0-9.]/g, "").trim());

    switch (activeTab) {
      case "price low to high":
        return [...travelData].sort(
          (a, b) => cleanPrice(a.price) - cleanPrice(b.price)
        );
      case "price high to low":
        return [...travelData].sort(
          (a, b) => cleanPrice(b.price) - cleanPrice(a.price)
        );
      case "name a to z":
        return [...travelData].sort((a, b) => a.title.localeCompare(b.title));
      case "date":
      default:
        return travelData;
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[75vh] flex items-center justify-center px-4 py-16 sm:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg1})` }}
      >
        <div className="absolute inset-0 z-10" />
        <div className="relative z-20 text-center text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold italic drop-shadow-lg">Tours</h1>
          <p className="mt-4 text-xl italic">Discover the world, one journey at a time.</p>
          <p className="mt-2 text-yellow-400 italic">
            Embrace tourism that connects cultures, nature, and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* TABS */}
      <nav className="top-0 z-10 bg-gray-300 border border-gray-300 rounded-none">
        <div
          className="flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-32 text-sm sm:text-base font-medium text-gray-700 p-2 sm:p-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-3 px-4 sm:px-8 flex items-center duration-200 transform transition-transform ${
                activeTab === tab
                  ? "text-orange-600 font-semibold bg-white"
                  : "text-gray-600 hover:bg-white hover:text-orange-600 hover:scale-100 sm:hover:scale-x-110"
              } border-b sm:border-b-0 sm:border-r border-gray-300 last:border-none`}
            >
              {tabIcons[tab]}
              {tab.replace(/\b\w/g, (c) => c.toUpperCase())}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500"></span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* TOUR CARD CONTENT */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {getSortedData().map((tour) => (
          <TourCard
            key={tour.id}
            image={tour.image}
            title={tour.title}
            subtitle={tour.subtitle}
            description={tour.description}
            price={tour.price}
            day={tour.day}
            age={tour.age}
          />
        ))}
      </div>
    </>
  );
};

export default Tour;
