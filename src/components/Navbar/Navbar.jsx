import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    {
      label: "Destination",
      dropdown: [
        { to: "/what-we-offer", label: "What We Offer" },
        { to: "/our-team", label: "Our Team" },
        { to: "/contact", label: "Contact" },
      ],
    },
    { to: "/tours", label: "Tours" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`w-full top-0 left-0 z-[9999] transition-all duration-300 ${
        isFixed
          ? "fixed bg-gradient-to-r from-blue-500 to-blue-600"
          : "absolute bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-4 py-3 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="text-white font-bold">
            <h1 className="text-base sm:hidden leading-tight">
              Namdev
              <br />
              Travels
            </h1>
            <h1 className="text-2xl hidden sm:block whitespace-nowrap">
              Namdev Tours and Travels
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        {/* <ul className="hidden md:flex space-x-8 text-base lg:text-lg font-medium text-black ml-auto relative">
          {navLinks.map((item) =>
            item.dropdown ? (
              <li key={item.label} className="relative group">
                <div className="cursor-pointer">
                  <span className="text-white pb-1 flex items-center">
                    {item.label}
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.23 7.21L10 11.98l4.77-4.77 1.06 1.06L10 14.1 4.17 8.27l1.06-1.06z" />
                    </svg>
                  </span>
                  
                </div>
              </li>
            ) : (
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
            )
          )}
        </ul> */}
        {/* <ul className="hidden md:flex space-x-8 text-base lg:text-lg font-medium text-black ml-auto relative">
  {navLinks.map((item) =>
    item.label === "Destination" ? (
      <li key="destination" className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle bg-transparent border-0 text-white hover:text-white px-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Destination
        </button>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="/what-we-offer">
              What We Offer
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/our-team">
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </li>
    ) : (
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
    )
  )}
</ul> */}
        {/* <ul className="hidden md:flex space-x-8 text-base lg:text-lg font-medium text-black ml-auto relative">
    {navLinks.map((item) =>
      item.label === "Destination" ? (
        <li key="destination" className="dropdown relative group">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0 text-white hover:text-white px-0 transition duration-300 pb-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Destination
          </button>
          <ul className="dropdown-menu mt-2 bg-white shadow-md rounded text-black text-sm">
            <li>
              <NavLink
                to="/what-we-offer"
                className="dropdown-item hover:bg-gray-100"
              >
                What We Offer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-team"
                className="dropdown-item hover:bg-gray-100"
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="dropdown-item hover:bg-gray-100"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </li>
      ) : (
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
      )
    )}
  </ul> */}

        {/* <li key="destination" className="dropdown relative group">
  <button
    className="btn btn-secondary dropdown-toggle bg-transparent border-0 text-white hover:text-white px-0 transition duration-300 pb-1 flex items-center gap-1"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Destination
    <svg
      className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M5.23 7.21L10 11.98l4.77-4.77 1.06 1.06L10 14.1 4.17 8.27l1.06-1.06z" />
    </svg>
  </button>

  <ul className="dropdown-menu mt-2 bg-white shadow-md rounded text-black text-sm">
    <li>
      <NavLink
        to="/what-we-offer"
        className="dropdown-item hover:bg-gray-100"
      >
        What We Offer
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/our-team"
        className="dropdown-item hover:bg-gray-100"
      >
        Our Team
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className="dropdown-item hover:bg-gray-100"
      >
        Contact
      </NavLink>
    </li>
  </ul>
</li> */}

        {/* <ul className="hidden md:flex space-x-8 text-base lg:text-lg font-medium text-black ml-auto relative">
  {navLinks.map((item) =>
    item.label === "Destination" ? (
      <li key="destination" className="dropdown relative group">
        <button
          className="btn btn-secondary dropdown-toggle bg-transparent border-0 text-white hover:text-white px-0 transition duration-300 pb-1 flex items-center gap-1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Destination
          <svg
            className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.23 7.21L10 11.98l4.77-4.77 1.06 1.06L10 14.1 4.17 8.27l1.06-1.06z" />
          </svg>
        </button>

        <ul className="dropdown-menu mt-2 bg-white shadow-md rounded text-black text-sm z-50">
          <li>
            <NavLink
              to="/what-we-offer"
              className="dropdown-item hover:bg-gray-100"
            >
              What We Offer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-team"
              className="dropdown-item hover:bg-gray-100"
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="dropdown-item hover:bg-gray-100"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </li>
    ) : (
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
    )
  )}
</ul> */}

        <ul className="hidden md:flex space-x-8 text-base lg:text-lg font-medium text-black ml-auto relative">
          {navLinks.map((item) =>
            item.dropdown ? (
              <li key={item.label} className="relative group">
                {/* Dropdown trigger */}
                <span className="cursor-pointer text-white pb-1 flex items-center select-none">
                  {item.label}
                  <svg
                    className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.23 7.21L10 11.98l4.77-4.77 1.06 1.06L10 14.1 4.17 8.27l1.06-1.06z" />
                  </svg>
                </span>

                {/* Dropdown menu */}
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg text-sm text-black min-w-[160px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-50">
                  {item.dropdown.map((sub) => (
                    <li key={sub.to}>
                      <NavLink
                        to={sub.to}
                        className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
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
            )
          )}
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
        className={`fixed top-0 right-0 h-screen w-4/5 sm:w-2/3 max-w-56 bg-gradient-to-b from-blue-500 to-blue-700 text-white z-[100] transform transition-transform duration-500 ${
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
          {navLinks.map((item) =>
            item.dropdown ? (
              <li key={item.label} className="w-full">
                <span className="block font-semibold mb-2">{item.label}</span>
                <ul className="ml-4 space-y-2">
                  {item.dropdown.map((sub) => (
                    <li key={sub.to}>
                      <NavLink
                        to={sub.to}
                        onClick={() => setNavOpen(false)}
                        className="block hover:underline"
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.to} className="w-full">
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
            )
          )}
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
