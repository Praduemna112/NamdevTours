import React from "react";

const TourCard = ({ image, title, price,subtitle, description, day, age }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row p-4 md:p-6 gap-6">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src={image} alt={title} className="h-full w-full object-cover rounded-xl" />
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <h3 className="text-lg text-indigo-600 font-semibold">{subtitle}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-bold text-gray-800">{price}</p>

        <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
          <div className="text-center">
            <p className="text-sm text-gray-500">Days</p>
            <p className="text-lg font-bold text-gray-800">{day}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Age</p>
            <p className="text-lg font-bold text-gray-800">{age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
