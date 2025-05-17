import React from "react";
import { Link } from "react-router-dom";
import Team_Business from "../../assets/Team_Business.gif";
import installation from "../../assets/installation.gif";
import vending_machine from "../../assets/vending_machine.png";
import maintenance from "../../assets/maintenance.png";

const Service = () => {
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
            Service
          </h1>
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-white font-semibold px-2 transition-transform duration-300 hover:scale-105">
            At PCB Technology, we offer a wide range of vending machine models,
            allowing you to customize them to dispense a variety of products.
          </p>
          <div className="w-screen h-10 sm:h-14 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>

      {/* === CONTENT SECTION === */}
      <section className="bg-white text-gray-900 px-4 sm:px-6 md:px-10 lg:px-20 py-16 space-y-24 max-w-screen-xl mx-auto">
        {/* === White Labeled Solution === */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-400 mb-6">
              White Labeled Solution
            </h2>
            <Link to="/contact" className="mb-4 block">
              <button className="bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 text-white font-semibold py-2 px-8 sm:px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300">
                Let Me Join
              </button>
            </Link>

            <ul className="pl-5 space-y-3 text-base sm:text-lg md:text-xl leading-relaxed list-disc">
              <li>
                Fully customizable vending machines with your own branding.
              </li>
              <li>Backed by a reliable tech and logistics infrastructure.</li>
              <li>Ideal for enterprises scaling product distribution.</li>
            </ul>
          </div>
          <img
            src={Team_Business}
            alt="White Labeled Solution"
            className="w-full md:w-1/2 max-w-xs sm:max-w-sm mx-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* === Become Channel Partner === */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <img
            src={vending_machine}
            alt="Channel Partner"
            className="w-full md:w-1/2 max-w-[130px] sm:max-w-[160px] md:max-w-[180px] mx-auto rounded-xl shadow-2xl"
          />
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-400 mb-6">
              Become a Channel Partner
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Be an entrepreneur and join our franchise network. Grow your own
              business with our innovative vending machine technology and full
              support.
            </p>
          </div>
        </div>

        {/* === Installation === */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-400 mb-6">
              Installation
            </h2>
            <ul className="pl-5 space-y-3 text-base sm:text-lg md:text-xl leading-relaxed list-disc">
              <li>On-site delivery and setup of vending machines.</li>
              <li>Expert technician support during installation.</li>
              <li>Training provided for operational handover.</li>
            </ul>
          </div>
          <img
            src={installation}
            alt="Installation Service"
            className="w-full md:w-1/2 max-w-xs sm:max-w-sm mx-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* === Maintenance === */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <img
            src={maintenance}
            alt="Maintenance Service"
            className="w-full md:w-1/2 max-w-xs sm:max-w-sm mx-auto rounded-xl shadow-2xl"
          />
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-400 mb-6">
              Maintenance
            </h2>
            <Link to="/contact" className="mb-4 block">
              <button className="bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 text-white font-semibold py-2 px-8 sm:px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300">
                Call Us
              </button>
            </Link>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              We provide regular maintenance checks, software updates, and rapid
              support services to ensure your vending machines run smoothly and
              minimize downtime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
