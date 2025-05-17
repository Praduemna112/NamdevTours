import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/Instagram_icon.png";
import facebookIcon from "../../assets/Facebook_icon.png";
import linkedinIcon from "../../assets/Linkedin_icon.png";
import youtubeIcon from "../../assets/Youtube_icon.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const hoverGradient =
  "transition-colors duration-300 hover:text-orange-500";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Brand + Social */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Namdev Tours & Travels
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Explore the world with ease and comfort. We offer curated travel experiences tailored just for you.
          </p>
          <div className="flex justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className={hoverGradient}>Home</Link></li>
            <li><Link to="/about" className={hoverGradient}>About Us</Link></li>
            <li><Link to="/destinations" className={hoverGradient}>Destinations</Link></li>
            <li><Link to="/contact" className={hoverGradient}>Contact Us</Link></li>
            <li><Link to="/enquiry" className={hoverGradient}>Enquiry</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className={hoverGradient}>Domestic Tours</li>
            <li className={hoverGradient}>International Tours</li>
            <li className={hoverGradient}>Custom Travel Packages</li>
            <li className={hoverGradient}>Hotel & Transport Booking</li>
            <li className={hoverGradient}>Adventure Activities</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Contact Us</h3>
          <p className="text-sm text-gray-700">
            Namdev Tours & Travels,<br />
           
          </p>
          <a
            href="https://maps.app.goo.gl/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex justify-start items-center text-sm mt-2 ${hoverGradient}`}
          >
            Get Directions <FaMapMarkerAlt className="ml-2 text-red-600" />
          </a>
          <p className="mt-4 text-sm">Email: info@namdevtravels.com</p>
          <p className="text-sm">Phone: +91 9898989898</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-left text-sm text-gray-600 max-w-screen-xl mx-auto px-4">
        © 2025 Namdev Tours & Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
