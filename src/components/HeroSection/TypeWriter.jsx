import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: ['Adventure', 'Wanderlust', 'Culture', 'Nature', 'Journeys', 'Getaways'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="mt-4 sm:mt-6">
      <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wide">
        Explore the world through{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold whitespace-nowrap">
          {text}
        </span>
        <Cursor cursorStyle="|" cursorColor="#fb923c" />
      </h2>
    </div>
  );
};

export default TypeWriter;
