import React from "react";

const TourReview = ({ ratings }) => {
  // Defensive fallback if no ratings passed
  if (!ratings) {
    return <div>No reviews available for this tour.</div>;
  }

  const ratingValues = Object.values(ratings);
  const averageRating = (
    ratingValues.reduce((sum, val) => sum + val, 0) / ratingValues.length
  ).toFixed(1);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        ⭐ {averageRating} - Tour Reviews
      </h2>

      {/* Average Rating Box */}
      <div className="flex items-center gap-6 mb-6">
        <div className="w-16 h-16 flex items-center justify-center bg-orange-500 text-white text-xl font-bold rounded-md shadow-lg">
          {averageRating}
        </div>
        <div className="text-sm text-gray-600">Average Rating (out of 10)</div>
      </div>

      {/* Rating Bars */}
      <div className="space-y-4">
        {Object.entries(ratings).map(([key, value]) => (
          <div key={key}>
            <div className="w-full bg-gray-200 h-10 rounded-md overflow-hidden relative">
              <div
                className="h-full bg-blue-500 text-white text-sm font-semibold flex justify-between items-center px-4"
                style={{ width: `${value * 10}%` }}
              >
                <span className="capitalize">{key}</span>
                <span>{value}/10</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourReview;
