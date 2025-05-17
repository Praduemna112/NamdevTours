import React from "react";

const Privacy_Policy = () => {
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
            Privacy Policy
          </h1>
          <p className="max-w-4xl text-base sm:text-lg md:text-xl text-white font-semibold px-2">
            At PCB Technology, we offer a wide range of vending machine models,
            allowing you to customize them to dispense a variety of products.
          </p>
          <div className="w-screen h-10 sm:h-14 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>
    </div>
  );
};

export default Privacy_Policy;
