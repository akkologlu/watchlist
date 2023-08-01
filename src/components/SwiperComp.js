import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Scrollbar, A11y } from "swiper/modules";

import Movie from "./Movie";

function SwiperComp({ movies }) {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <div>
      {movies.length > 0 ? (
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ type: "fraction" }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
          }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide
              key={movie.id}
              className="scale-100 hover:scale-125 ease-in duration-100 py-10 pl-15"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Movie movie={movie} showAddButton={hoverIndex === index} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SwiperComp;
