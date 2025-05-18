// TourInformation.jsx
import React from "react";
import { FaRegClock } from "react-icons/fa";

export default function TourInformation({ item }) {
  if (!item) return null;

  // Convert included/notIncluded strings into arrays, removing emojis
  const includedList = item.included
    ? item.included.replace(/[✅❌]/g, "").split(",").map((inc) => inc.trim())
    : [];
  const notIncludedList = item.notIncluded
    ? item.notIncluded.replace(/[✅❌]/g, "").split(",").map((exc) => exc.trim())
    : [];

  return (
    <>
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2">{item.title}</h2>
      <div className="mb-5 text-sm sm:text-xl">
        <strong>Price:</strong> {item.price}
      </div>
      {item.description && (
        <p className="text-gray-700 text-sm sm:text-xl mb-4">
          📝 <strong>Description:</strong> {item.description}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 text-sm sm:text-xl mb-6">
        <FaRegClock className="text-orange-500" />
        <span>
          <strong>Days:</strong> {item.day}
        </span>
        <span>
          <strong>Duration:</strong> {item.duration}
        </span>
        <span>
          <strong>Age:</strong> {item.age}
        </span>
      </div>

      <table className="w-full text-sm sm:text-xl text-gray-700 border-t border-b border-gray-300">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-4 font-semibold">Destination</td>
            <td className="py-4">{item.location}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 font-semibold">Departure Time</td>
            <td className="py-4">{item.departureTime}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 font-semibold">Dress Code</td>
            <td className="py-4">{item.dressCode}</td>
          </tr>
        </tbody>
      </table>

      {/* Included / Not Included Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-sm sm:text-base text-gray-700">
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">✅ Included</h3>
          <ul className="list-disc list-inside space-y-1">
            {includedList.map((inc, i) => (
              <li key={i}>{inc}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-red-700 mb-2">❌ Not Included</h3>
          <ul className="list-disc list-inside space-y-1">
            {notIncludedList.map((exc, i) => (
              <li key={i}>{exc}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
