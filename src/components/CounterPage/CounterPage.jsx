import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterPage = () => {
  const [counterState, setCounterState] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) setCounterState(true);
      else setCounterState(false);
    },
  });

  return (
    <div
      className="px-5 md:px-20 py-12 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Optional: dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-3xl"></div>

      <div
        ref={ref}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-8 rounded-3xl px-8 py-16"
      >
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white ">
            {counterState && <CountUp start={0} end={10} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white ">
            Years of experience
          </p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white ">
            {counterState && <CountUp start={0} end={150} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">
            Hours on projects
          </p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            {counterState && <CountUp start={0} end={20} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white drop-shadow-md">
            National awards
          </p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            {counterState && <CountUp start={0} end={100} duration={1.75} />}
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white drop-shadow-md">
            Professional services
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
