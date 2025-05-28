import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg1 from "../../assets/photos/aboutus.jpg";
import gallery1 from "../../assets/photos/aboutus.jpg";
import gallery2 from "../../assets/photos/aboutus.jpg";
import gallery3 from "../../assets/photos/aboutus.jpg";

const galleryImages = [
  { src: gallery1, alt: "Gallery Image 1", route: "/gallery/place1" },
    { src: gallery1, alt: "Gallery Image 2", route: "/gallery/place2" },
   { src: gallery1, alt: "Gallery Image 3", route: "/gallery/place3" },
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    if (image.route) {
      navigate(image.route);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[75vh] flex items-center justify-center px-4 py-16 sm:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg1})` }}
      >
        <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />
        <div className="relative z-20 text-center text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold italic drop-shadow-lg">Gallery</h1>
          <p className="mt-4 text-xl italic">Discover the world, one journey at a time.</p>
          <p className="mt-2 text-yellow-400 italic">Embrace tourism that connects cultures, nature, and unforgettable experiences.</p>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <section className="py-16 px-4 sm:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">Successful Journeys Memories</h2>
          <p className="text-gray-600 mt-2">A glimpse into our beautiful destinations.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
