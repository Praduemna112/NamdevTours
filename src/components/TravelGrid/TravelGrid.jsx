import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import travelData from "./TravelData";

function chunkArray(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export default function TravelGrid() {
  const slides = chunkArray(travelData, 6);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid gap-2 md:gap-4 h-[550px] md:h-[620px] 
              grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
              grid-rows-6 sm:grid-rows-3 md:grid-rows-2">
              {group.map((item, i) => (
                <div
                  key={item.id}
                  className={`group relative rounded-xl overflow-hidden 
                    ${i === 1 ? "sm:col-span-2 sm:row-span-2" : ""}
                    ${i === 1 ? "row-span-2" : "row-span-1"}`}
                >
                  <Link to={`/travel/${item.id}`} className="block w-full h-full">
                    <div
                      className="
                        w-full h-full bg-cover bg-center transition-transform duration-500
                        scale-100
                        group-hover:scale-105 group-active:scale-105
                        md:group-hover:scale-100 md:group-active:scale-100
                      "
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
                        <h3 className="text-base sm:text-lg font-bold">{item.title}</h3>
                        <p className="text-xs sm:text-sm italic">{item.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
