import React from "react";

const PlayButton = ({ size = 64, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff30" />
            <stop offset="100%" stopColor="#00000070" />
          </radialGradient>
        </defs>

        <circle
          cx="36"
          cy="36"
          r="34"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        <circle cx="36" cy="36" r="32" fill="url(#grad)" />

        <path
          d="M30 24 L30 48 L52 36 Z"
          fill="#fff"
          stroke="#fff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PlayButton;
