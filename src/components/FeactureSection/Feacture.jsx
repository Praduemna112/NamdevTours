import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../src/assets/machine1.webp";
import img2 from "../../assets/machine2.webp";
import img3 from "../../assets/machine3.webp";
import img4 from "../../assets/machine4.webp";
import demoImage_1 from "../../assets/GalaxyModel.webp";

import gearIcon from "../../assets/Gear.png";
import foodIcon from "../../assets/Food_icon.jpg";
import thumbIcon from "../../assets/Thumb.png";
import flexibleIcon from "../../assets/Flexible_icon.png";
import fulltimeIcon from "../../assets/Fulltime_icon.png";
import lableIcon from "../../assets/Lable.png";
import medalIcon from "../../assets/Medal.png";
import packingIcon from "../../assets/Packing.png";
import lockIcon from "../../assets/lock.png";

const Feature = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <>
      {/* Feature Icons Section */}
      <div className="bg-gray-200 w-screen py-10 px-6 sm:px-10 md:px-20 rounded-lg relative">
        <div
          className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 text-center mt-10"
          data-aos="fade-up"
        >
          {[
            [
              <img
                src={gearIcon}
                alt="gearIcon"
                className="w-20 h-20 sm:w-28 sm:h-28 mx-auto"
              />,
              "Fully Automated and Contactless Solutions",
            ],
            [
              <img
                src={flexibleIcon}
                alt="flexibleIcon"
                className="w-20 h-20 sm:w-28 sm:h-28 mx-auto"
              />,
              "Bespoke, Flexible and Scalable",
            ],
            [
              <img
                src={fulltimeIcon}
                alt="fulltimeIcon"
                className="w-20 h-20 sm:w-28 sm:h-28 mx-auto"
              />,
              "24×7 Availability: Relevance with Convenience",
            ],
            [
              <img
                src={lableIcon}
                alt="lableIcon"
                className="w-20 h-20 sm:w-28 sm:h-28 mx-auto"
              />,
              "Branded, curated, and nutritious range of meals, snacks and beverages",
            ],
          ].map(([icon, title], index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 duration-300"
            >
              <span className="text-white text-5xl drop-shadow">{icon}</span>
              <h4 className="font-semibold mt-4 text-base sm:text-lg px-2">
                {title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-white text-gray-900 px-4 sm:px-8 md:px-18 py-12">
        {/* Hero Text */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r text-pink-500 p-4 rounded-lg ">
            India's Leading Vending Machine Supplier Making Everyday Convenience
            Available - Easier, Smarter, Safer, With Micro Retail Solutions!
          </h1>
        </div>

        {/* Section 1 */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
          data-aos="fade-up"
        >
          <img
            src={img1}
            alt="img1"
            className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-2xl"
          />
          <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r  text-blue-400  bg-clip-text ">
              Curated Range of Snacks
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
              <li>Fresh and healthy snacks</li>
              <li>Convenient and easy to use snacks</li>
              <li>Close packaged wafers</li>
              <li>
                Desserts & Confectionaries: Chocolates, Energy bars, Chikki,
                Granola bars
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24"></div>

        {/* Section 2 */}
        <div
          className="flex flex-col sm:flex-row items-center gap-8"
          data-aos="fade-up"
        >
          <div className="w-full sm:w-1/2 sm:ml-10 pr-4 sm:pr-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 bg-gradient-to-r  text-yellow-400 bg-clip-text ">
              Refreshing Range of Beverages
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
              <li>Healthy & Nutritious Juices</li>
              <li>Energy Drinks</li>
              <li>Packaged Drinking Water</li>
              <li>Aerated Cold Beverages</li>
              <li>Milk-based beverages (Cold Coffee, Milkshakes)</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 flex justify-end">
            <img
              src={img2}
              alt="img2"
              className="w-full h-auto max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-24"></div>

        {/* Section 3 */}
        <div
          className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8"
          data-aos="fade-up"
        >
          <img
            src={img3}
            alt="img3"
            className="w-full h-auto max-w-sm mx-auto rounded-lg shadow-lg"
          />
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r  text-blue-400 bg-clip-text ">
              Health and Personal Care
            </h2>
            <ul className="space-y-2 text-base sm:text-lg">
              <li>Product Categories:</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 mt-6 text-base sm:text-lg">
              <li>Sanitary Healthcare</li>
              <li>Sanitizers</li>
              <li>Contraceptive Healthcare</li>
              <li>Face Masks, Gloves & PPE Kits</li>
              <li>Facial Wet Wipes</li>
            </ul>
          </div>
        </div>

        <div className="mt-24"></div>

        {/* Section 4 */}
        <div
          className="flex flex-col sm:flex-row items-center gap-8"
          data-aos="fade-up"
        >
          <div className="w-full sm:w-1/2 sm:ml-10 pr-4 sm:pr-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 bg-gradient-to-r  text-yellow-400 bg-clip-text ">
              Pantry Supply Services
            </h2>
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Allow us to manage your pantry supplies through Smart Vending
              Machines
            </h3>
            <ul className="space-y-2 text-base sm:text-lg mt-4">
              <li>Product Categories:</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg mt-6">
              <li>Healthy Snacks & Biscuits (Retail & Bulk Packs)</li>
              <li>Ready To Eat Meals - Breakfast / All Day Dining</li>
              <li>Beverages</li>
              <li>Bottled Water</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 flex justify-end">
            <img
              src={img4}
              alt="img4"
              className="w-full h-auto max-w-md mx-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-24"></div>

        {/* Why Choose Us */}
        <div
          className="bg-white text-gray-900 py-16 px-4 sm:px-10 md:px-20"
          data-aos="fade-up"
        >
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-14 text-pink-400 bg-clip-text ">
            Why choose Vending Machine?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-16">
            <div className="w-full min-h-80 sm:w-1/3 flex justify-center sm:justify-end">
              <img
                src={demoImage_1}
                alt="Vending Machine"
                className="w-full max-w-sm h-auto rounded-lg object-contain"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full sm:w-2/3 bg-white bg-opacity-90 shadow-md p-8 sm:p-14 rounded-lg text-gray-900">
              {[
                [
                  <img
                    src={foodIcon}
                    alt="foodIcon"
                    className="w-20 sm:w-28 h-auto mx-auto"
                  />,
                  "Nutritious Branded F&B merchandise",
                ],

                [
                  <img
                    src={thumbIcon}
                    alt="thumbIcon"
                    className="w-20 sm:w-28 h-auto mx-auto"
                  />,
                  "Hassle Free",
                ],
                [
                  <img
                    src={fulltimeIcon}
                    alt="fulltimeIcon"
                    className="w-20 sm:w-28 h-auto mx-auto"
                  />,
                  "24/7 Availability",
                ],
                [
                  <img
                    src={medalIcon}
                    alt="fulltimeIcon"
                    className="w-20 sm:w-28 h-auto mx-auto"
                  />,
                  "Premium Quality",
                ],

                [
                  <img
                    src={packingIcon}
                    alt="fulltimeIcon"
                    className="w-20 sm:w-28 h-auto mx-auto"
                  />,
                  "Inventory Tracking",
                ],
                [
                  <img
                    src={lockIcon}
                    alt="fulltimeIcon"
                    className="w-20 sm:w-28 h-auto mx-auto"
                  />,
                  "Secure Payment",
                ],
              ].map(([icon, text], i) => (
                <div
                  className="text-center"
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <span className="text-4xl sm:text-5xl text-pink-500">
                    {icon}
                  </span>
                  <p className="font-semibold mt-4 text-sm sm:text-base">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Heading */}
        {/* <div
          className="bg-white px-4 sm:px-10 md:px-20 py-12"
          data-aos="fade-up"
        >
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r text-pink-400 bg-clip-text ">
              Multi - Sector Approach
            </h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Feature;
