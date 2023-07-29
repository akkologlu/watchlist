import React from "react";
import { useState, useEffect } from "react";
import searcMovies from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../store/slices/watchlistSlice";

function Discover() {
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);

  const fetchData = async (term) => {
    const fetchedMovies = await searcMovies(term);
    setMovies(fetchedMovies);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {movies.length > 0 ? (
        <>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <h1>{movie.id}</h1>
                <p>{movie.original_title}</p>
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
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt=""
                  />
                </button>
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
