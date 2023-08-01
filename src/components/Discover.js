import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { discoverMovies, discoverMoviesByGenres, genreList } from "../api";
import SwiperComp from "./SwiperComp";
import "swiper/css";
import "swiper/css/pagination";
import {
  addMoviesByGenre, // Import the action from watchlistSlice
} from "../store/slices/watchlistSlice";

function Discover() {
  const { moviesByGenre } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);

  const fetchData = async () => {
    const fetchedGenres = await genreList();
    setGenres(fetchedGenres);
  };

  const fetchMoviesByGenre = async (genreId) => {
    const fetchedMovies = await discoverMoviesByGenres(genreId);
    dispatch(addMoviesByGenre({ genreId, movies: fetchedMovies }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    genres.forEach((genre) => fetchMoviesByGenre(genre.id));
  }, [genres]);

  return (
    <div className="min-h-screen">
      {genres.length > 0 ? (
        <>
          {genres.map((genre) => {
            return (
              <div className="mx-16" key={genre.id}>
                <h4 className="text-primary font-roboto text-center text-3xl ml-4 sm:text-left">
                  {genre.name}
                </h4>
                <div className="text-center">
                  <SwiperComp movies={moviesByGenre[genre.id]} />
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Discover;
