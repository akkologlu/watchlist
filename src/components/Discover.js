import React from "react";
import { useState, useEffect } from "react";
import { discoverMovies } from "../api";
import SwiperComp from "./SwiperComp";
import "swiper/css";
import "swiper/css/pagination";

function Discover() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const fetchedMovies = await discoverMovies();
    setMovies(fetchedMovies);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {movies.length > 0 ? (
        <>
          <div className="mx-16">
            <h4 className=" text-primary font-roboto text-center text-3xl  ml-4 sm:text-left">
              Popular Now
            </h4>
            <div className="text-center ">
              <SwiperComp movies={movies} />
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Discover;
