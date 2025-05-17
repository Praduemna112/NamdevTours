import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Email from "./Email";

const Contact = () => {
  return (
    <div className="w-full font-medium">
      {/* === HERO SECTION === */}
      <section
        id="hero"
        className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-pink-500 via-blue-400 to-yellow-400 flex flex-col items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center text-center mt-32 sm:mt-36 md:mt-44 lg:mt-52 gap-y-6 sm:gap-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            We’d love to hear from you…
          </h1>
          <p className="max-w-4xl text-base sm:text-lg md:text-xl text-white font-semibold px-2">
            At PCB Technology, we offer a wide range of vending machine models,
            allowing you to customize them to dispense a variety of products.
          </p>
          <div className="w-screen h-10 sm:h-14 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>

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
                href="https://wa.me/918329987533?text=Let%20me%20know%20more%20details%20about%20PTM%20Machine"
                target="_blank"
                className="text-black hover:text-orange-600 underline"
              >
                +91 8329987533
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>Email:</span>
              <IoMail className="text-red-500" />
              <a
                href="mailto:extrauserdata@gmail.com"
                target="_blank"
                className="text-black hover:text-orange-600 underline"
              >
                extrauserdata@gmail.com
              </a>
            </li>
          </ul>

          <p className="mt-6 text-base sm:text-lg">
            Connect with us and inquire about Smart Micro Retail Solutions for
            your facility.
          </p>
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
