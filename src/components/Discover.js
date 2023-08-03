import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { discoverMoviesByGenres, genreList } from "../api";
import SwiperComp from "./SwiperComp";
import "swiper/css";
import "swiper/css/pagination";
import {
  addMoviesByGenre, // Import the action from watchlistSlice
} from "../store/slices/watchlistSlice";
import Loading from "./Loading";

function Discover() {
  const [loading, setLoading] = useState(true);
  const { moviesByGenre } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchedGenres = await genreList();
      setGenres(fetchedGenres);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
      {genres.length > 0 && !loading ? (
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
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Discover;
