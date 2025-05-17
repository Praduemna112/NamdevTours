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
    <div className="px-5 md:px-20 py-12">
      {/* === HEADING === */}
      <div className="py-5 px-6 relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-500  bg-clip-text text-transparent pb-3 ">
          Creating an Impact, One Transaction at a Time..
        </h2>
      </div>

      {/* === COUNTER SECTION === */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-8 bg-gradient-to-r from-pink-500 to-blue-400 rounded-3xl px-8 py-16 shadow-xl"
      >
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {counterState && <CountUp start={0} end={2000} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">Machines</p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {counterState && <CountUp start={0} end={550} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">Clients</p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {counterState && <CountUp start={0} end={20} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">Cities</p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {counterState && <CountUp start={0} end={1} duration={1.75} />}Mn+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">Daily Outreach</p>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
