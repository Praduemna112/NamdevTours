import React from "react";
import circuitLogo from "../../assets/PCB_Logo.jpg";
import "../../index.css";

const CircuitLogo = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <img
        src={circuitLogo}
        alt="Circuit Logo"
        className="w-full h-auto object-contain rounded-sm"
      />
    </div>
  );
};

export default CircuitLogo;
