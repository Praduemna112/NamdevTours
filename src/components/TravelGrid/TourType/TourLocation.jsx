import React from "react";

const TourLocation = ({ location }) => {
  if (!location) return <p className="text-red-500">No location available</p>;

  // Encode the location string to be URL safe
  const mapQuery = encodeURIComponent(location);

  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold mb-4">Tour Location</h3>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Tour Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=${mapQuery}&t=k&z=13&ie=UTF8&iwloc=&output=embed`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TourLocation;
