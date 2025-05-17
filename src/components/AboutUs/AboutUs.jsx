import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import img1 from "../../assets/machine1.webp";
import img2 from "../../assets/machine2.webp";


const AboutUs = () => {
  return (
    <div className="w-full font-medium overflow-x-hidden">
      {/* === HERO SECTION === */}
      <section
        id="hero"
        className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-pink-500 via-blue-400 to-yellow-400 flex flex-col items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center text-center mt-32 sm:mt-36 md:mt-44 lg:mt-52 gap-y-6 sm:gap-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="max-w-4xl text-base sm:text-lg md:text-xl text-white font-semibold px-2">
            At PCB Technology, we offer a wide range of vending machine models,
            allowing you to customize them to dispense a variety of products.
          </p>
          <div className="w-screen h-10 sm:h-14 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>

      {/* === CONTENT SECTION === */}
      <div className="bg-white text-gray-900 px-4 sm:px-6 md:px-10 lg:px-20 py-12 space-y-20">
        {/* === ABOUT US === */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <img
            src={img1}
            alt="Vending Machine"
            className="w-full md:w-1/2 h-auto max-w-[500px] mx-auto rounded-xl shadow-2xl"
          />
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-400 mb-6">
              About Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Vender is India’s leader in Instant Commerce, offering
              cutting-edge Smart Retail Solutions tailored to food, beverages,
              and related sectors. Our mission is to make everyday convenience
              more accessible, smarter, and safer for everyone. At Vender, we
              are committed to providing top-notch service and operational
              excellence to our customers. Through our innovative, world-class
              solutions, we strive to deliver the highest quality experience.
            </p>
            <div className="mt-9"></div>
            <Link to="/contact" className="mb-4 block">
              <button className="bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 text-white font-semibold py-2 px-8 sm:px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300">
                Let Me join
              </button>
            </Link>
          </div>
        </div>

        {/* === OUR VISION & MISSION === */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-400 mb-6">
              Our Vision & Mission
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-base sm:text-lg md:text-xl leading-relaxed">
              <li>
                <strong>VISION:</strong> To be India’s Foremost in Instant
                Commerce via Smart Retail Solutions in Food & Beverages and
                allied categories.
              </li>

              <li>
                <strong>MISSION:</strong> Making everyday convenience available
                – Easier, Smarter, Safer! Staying Consumer-Centric, Data-led,
                and Values-based in everything we do.
              </li>
              <Link to="/contact" className="mb-4 block">
                <button className="bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 text-white font-semibold py-2 px-8 sm:px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300">
                  Call Us
                </button>
              </Link>
            </ul>
          </div>
          <img
            src={img2}
            alt="Smart Retail Setup"
            className="w-full md:w-1/2 h-auto max-w-[400px] mx-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
