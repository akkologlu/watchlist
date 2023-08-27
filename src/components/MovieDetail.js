import React, { useEffect, useState } from "react";
import axios from "axios";
import tmdb from "../assets/tmdb.svg";
import { addToWatchlist } from "../store/slices/watchlistSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            params: {
              include_adult: "false",
              language: "en-US",
              page: "1",
            },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTAzMWJiYWVhMDQ4Y2I0M2I5NzU2OTQ3ODJlOGM0YyIsInN1YiI6IjY0YTgwNTcxNjVjMjZjMDBjYTllOTg4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L9lELWP7Z-jwtuOrwWzVULdg09beTHIdPMMeBUqIkdE", // Replace with your actual API key
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="text-primary flex flex-col justify-center items-center lg:items-start my-24 w-7/12 space-x-7 lg:flex-row space-y-10 md:space-y-0">
          <div className="w-3/4 flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>

          <div className="flex flex-col space-y-10 ">
            <div className="text-center lg:text-start">
              <h1 className="text-3xl md:text-7xl">{movie.title}</h1>
              <div className="mt-3 text-lg">({movie.release_date})</div>
            </div>

            <div className="mt-3 text-xl flex justify-center lg:justify-start">
              {movie.overview}
            </div>
            <div className="relative flex flex-col items-center lg:space-x-16 justify-center lg:justify-start lg:flex-row space-x-0 space-y-8 lg:space-y-0 ">
              <div className="flex space-x-3">
                <img src={tmdb} alt="" className="w-16 " />
                <div className="text-xl">{movie.vote_average} / 10</div>
              </div>

              <div>
                <button
                  onClick={() => {
                    dispatch(
                      addToWatchlist({
                        id: movie.id,
                        title: movie.original_title,
                        poster_path: movie.poster_path,
                      })
                    );
                  }}
                  className=" text-primary bg-secondary font-bold py-1 px-2 rounded hover:bg-primary hover:text-secondary ease-in-out duration-500 active:bg-secondary active:text-primary focus:outline-none 
            "
                >
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
