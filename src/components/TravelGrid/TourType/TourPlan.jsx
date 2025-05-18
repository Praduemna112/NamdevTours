import React from "react";

const TourPlan = ({ plan }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2 border-blue-200">
        🗺️ Tour Plan
      </h3>
      {plan && plan.length > 0 ? (
        <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
          {plan.map((dayPlan, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow">
                {index + 1}
              </div>
              <div className="flex-1 pt-1">
                <span className="font-semibold text-blue-700">Day {index + 1}:</span> {dayPlan}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No tour plan details available.</p>
      )}
    </div>
  );
};

export default TourPlan;
