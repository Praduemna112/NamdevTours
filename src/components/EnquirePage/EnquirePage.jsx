import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/machine1.webp";
import img2 from "../../assets/machine2.webp";
import img3 from "../../assets/machine3.webp";

const EnquirePage = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    height: "auto",
    maxHeight: "550px",
  };

  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/contact");
    }, 600);
  };

  return (
    <div className="w-full font-medium">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-pink-500 via-blue-400 to-yellow-400 flex flex-col items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center text-center mt-32 sm:mt-36 md:mt-44 lg:mt-52 gap-y-6 sm:gap-y-8">
          <div className="relative z-10 flex flex-col items-center w-full">
            <div
              className="w-56 h-32 sm:w-72 sm:h-40 relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleNavigate}
              style={{ perspective: "1000px" }}
            >
              <div
                className="w-full h-full relative transition-transform duration-500 ease-in-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div
                  className="absolute w-full h-full flex items-center justify-center bg-violet-500 text-white text-base sm:text-lg font-semibold rounded-xl shadow-xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  Tap to Enquire
                </div>

                <div
                  className="absolute w-full h-full flex items-center justify-center bg-violet-600 text-white text-base sm:text-lg font-semibold rounded-xl shadow-xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  Enquire Now
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen h-10 sm:h-14 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>

      {/* Carousel Section */}
      <div className="py-20 flex items-center justify-center px-2 sm:px-4 md:px-6 -mt-8">
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-full max-w-[1200px]"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner">
            {[img1, img2, img3].map((img, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={img}
                  className="d-block w-full object-cover rounded max-h-[550px] sm:max-h-[600px] md:max-h-[650px]"
                  alt={`Slide ${index + 1}`}
                  style={imageStyle}
                />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-black bg-opacity-60 rounded-full w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
              aria-hidden="true"
              style={{ backgroundSize: "100% 100%" }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-black bg-opacity-60 rounded-full w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
              aria-hidden="true"
              style={{ backgroundSize: "100% 100%" }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquirePage;
