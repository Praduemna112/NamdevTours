import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

import heroBg1 from "../../assets/photos/aboutus.jpg";
import { IoMail } from "react-icons/io5";
import Email from "./Email";

const Contact = () => {
   const [bgIndex] = useState(0);
  
    const heroContent = [
      {
        image: heroBg1,
        headline: "Contact",
        subheading: "Discover the world, one journey at a time.",
        description:
          "Embrace tourism that connects cultures, nature, and unforgettable experiences.",
      },
    ];
  
    const currentContent = heroContent[bgIndex];
  
  return (
    <div className="w-full font-medium">
     {/* HERO SECTION */}
      <div
        id="hero"
        className="relative w-full min-h-[50vh] sm:min-h-[75vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-10 transition-all duration-1000 ease-in-out overflow-hidden pt-[64px] sm:pt-0 "
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${currentContent.image})`,
            zIndex: 0,
            filter: "brightness(1)",
          }}
          aria-hidden="true"
        />

        {/* Text Content */}
        <div className="relative z-30 max-w-xl text-center text-white mt-6 sm:mt-10 px-4 sm:px-6 md:px-8">
          <h1 className="italic font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
            {currentContent.headline}
          </h1>
          <h2 className="mt-3 text-lg sm:text-xl italic font-semibold drop-shadow-md">
            {currentContent.subheading}
          </h2>
          <p className="mt-2 text-yellow-400 text-sm sm:text-base italic drop-shadow-md">
            {currentContent.description}
          </p>
        </div>
      </div>
      <div className="mt-16" />

      <div>
        <Email />
      </div>
      {/* Google Form
      <div className="px-10 sm:px-10 mt-12">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe80A5HFnin0RaoGiUM5qtMK17H3gMDtYknxanBQlVj_D_MNg/viewform?embedded=true"
          className="w-full min-h-[1800px] border-none rounded-md shadow"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div> */}

      {/* Contact Section */}
      <div className="mt-16 px-4 sm:px-10 flex flex-col sm:flex-row items-start gap-10">
        {/* Contact Info */}
        <div className="w-full sm:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-orange-500 mb-6">
            Give us a shout!
          </h2>
          <ul className="space-y-5 text-base sm:text-lg">
            <li>Drop by the office;</li>
            <li>
              <a
                href="https://maps.app.goo.gl/JjZmPE93rFyCaDnj6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 underline hover:text-orange-600"
              >
                Get Directions
              </a>
            </li>
            <li>Or reach us at:</li>
          </ul>

          <ul className="mt-6 space-y-4 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              <span>Customer Care Number:</span>
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/919898989898"
                target="_blank"
                className="text-black hover:text-orange-600 underline"
              >
                +91 9898989898
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>Email:</span>
              <IoMail className="text-red-500" />
              <a
                href="mailto:test@gmail.com"
                target="_blank"
                className="text-black hover:text-orange-600 underline"
              >
                test@gmail.com
              </a>
            </li>
          </ul>

        </div>

        {/* Map Section */}
        <div className="w-full sm:max-w-screen-sm mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3697.610427975973!2d75.887334!3d17.671018999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQwJzE1LjciTiA3NcKwNTMnMTQuNCJF!5e1!3m2!1sen!2sin!4v1743860324236!5m2!1sen!2sin"
            width="100%"
            height="350"
            className="rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
