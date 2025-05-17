import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/destination", label: "Destination" },
    { to: "/tours", label: "Tours" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`w-full top-0 left-0 z-[100] transition-all duration-300 ${
        isFixed ? "fixed bg-gradient-to-r bg-blue-500" : "absolute bg-transparent"
      }`}
    >
      {/* Main Nav */}
      <nav className="flex justify-between items-center px-4 py-3 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="text-white font-bold">
            {/* Optimized for mobile */}
            <h1 className="text-base sm:hidden leading-tight">
              Namdev<br />Travels
            </h1>
            <h1 className="text-2xl hidden sm:block whitespace-nowrap">
              Namdev Tours and Travels
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-base lg:text-lg font-medium text-black ml-auto">
          {navLinks.map((item) => (
            <li key={item.to} className="relative group">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition duration-300 pb-1 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNavOpen(true)}
          className="md:hidden bg-blue-400 hover:bg-blue-600 text-white text-2xl p-2 rounded cursor-pointer ml-2"
        >
          <AiOutlineMenu />
        </div>
      </nav>

      {/* Overlay */}
      {navOpen && (
        <div
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-[90] md:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen w-4/5 sm:w-2/3 max-w-56 bg-gradient-to-b bg-blue-400 text-white z-[100] transform transition-transform duration-500 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose
            className="text-4xl cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
        </div>

        <ul className="flex flex-col items-start px-6 space-y-6 py-4 text-base font-medium sm:text-lg">
          {navLinks.map((item) => (
            <li key={item.to} className="w-full group">
              <NavLink
                to={item.to}
                onClick={() => setNavOpen(false)}
                className={({ isActive }) =>
                  `block w-fit relative transition duration-300 pb-1 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
