// TravelDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";
import { IoBookOutline, IoLocationSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import travelData from "./TravelData";
import TourPlan from "./TourType/TourPlan";
import TourLocation from "./TourType/TourLocation";
import TourInformation from "./TourType/TourInformation";
import BookTour from "./TourType/TourBookForm";
import TourGallery from "./TourType/TourGallery";
import TourReview from "./TourType/TourReview";

export default function TravelDetail() {
  const { id } = useParams();
  const item = travelData.find((t) => t.id === parseInt(id));

  const tabs = ["information", "tour-plan", "location", "gallery", "reviews"];
  const [activeTab, setActiveTab] = useState("information");

  if (!item) {
    return <div className="p-8 text-center text-red-500">Tour not found.</div>;
  }
  const tabIcons = {
    information: <FaRegAddressBook className="inline-block mr-2 w-5 h-5" />,
    "tour-plan": <IoBookOutline className="inline-block mr-2 w-5 h-5" />,
    location: <IoLocationSharp className="inline-block mr-2 w-5 h-5" />,
    gallery: <GrGallery className="inline-block mr-2 w-5 h-5" />,
    reviews: <MdReviews className="inline-block mr-2 w-5 h-5" />,
  };

  return (
    <>
      {/* Full-width image with subtitle overlay */}
      {item.image ? (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
          {item.subtitle && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-yellow-400 italic font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg lg:whitespace-nowrap text-center">
                {item.subtitle}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-[300px] flex items-center justify-center bg-gray-200 text-gray-500">
          Image not available
        </div>
      )}
      <div className="mb-4"></div>

      {/* Tabs Navbar */}
      <nav
        className="top-0 z-10 bg-gray-300 border border-gray-300 rounded-none"
        role="tablist"
        aria-label="Tour detail tabs"
      >
        <div
          className="
      flex flex-col sm:flex-row 
      sm:justify-center 
      gap-3 sm:gap-32 
      text-sm sm:text-base font-medium text-gray-700 
      p-2 sm:p-0 
      max-h-74 sm:overflow-visible 
      sm:max-h-none
    "
          style={{ WebkitOverflowScrolling: "touch" }} // smooth scrolling for iOS
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`tab-panel-${tab}`}
              id={`tab-${tab}`}
              className={`relative py-3 px-4 sm:px-8 flex items-center justify-start sm:justify-center duration-200 transform transition-transform ${
                activeTab === tab
                  ? "text-orange-600 font-semibold bg-white"
                  : "text-gray-600 hover:bg-white hover:text-orange-600 hover:scale-100 sm:hover:scale-x-110"
              } border-b sm:border-b-0 sm:border-r border-gray-300 last:border-none`}
              style={{ borderRadius: 0 }}
            >
              {tabIcons[tab]}
              {tab.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              {activeTab === tab && (
                <span className="absolute left-0 sm:left-auto bottom-0 sm:bottom-0 w-full sm:w-full h-0.5 bg-orange-500"></span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Content + Booking Layout */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:flex gap-8">
        {/* Left Side: Tab Content */}
        <div className="lg:w-2/3">
          {activeTab === "information" && (
            <div
              id="tab-panel-information"
              role="tabpanel"
              aria-labelledby="tab-information"
            >
              <TourInformation item={item} />
            </div>
          )}
          {activeTab === "tour-plan" && (
            <div
              id="tab-panel-tour-plan"
              role="tabpanel"
              aria-labelledby="tab-tour-plan"
            >
              <TourPlan plan={item.tourPlan} />
            </div>
          )}
          {activeTab === "location" && (
            <div
              id="tab-panel-location"
              role="tabpanel"
              aria-labelledby="tab-location"
            >
              <TourLocation location={item.location} />
            </div>
          )}
          {activeTab === "gallery" && (
            <div
              id="tab-panel-gallery"
              role="tabpanel"
              aria-labelledby="tab-gallery"
            >
              <TourGallery images={item.galleryImages} />
            </div>
          )}
          {activeTab === "reviews" && (
            <div
              id="tab-panel-reviews"
              role="tabpanel"
              aria-labelledby="tab-reviews"
            >
              <TourReview ratings={item.ratings} />
            </div>
          )}
        </div>

        {/* Right Side: Booking Form */}
        <BookTour />
      </div>
    </>
  );
}
