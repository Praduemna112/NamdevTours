import React from "react";
import { useParams } from "react-router-dom";
import travelData from "./TravelData";

export default function TravelDetail() {
  const { id } = useParams();
  const item = travelData.find((t) => t.id === parseInt(id));

  if (!item) return <div className="p-8 text-center">Not Found</div>;

  return (
    <div className="max-w-screen-md mx-auto px-4 py-8 pt-24 sm:px-6 lg:px-8">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover"
        />
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-600 italic text-sm sm:text-base">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
