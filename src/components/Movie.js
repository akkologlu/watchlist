import React from "react";
import { addToWatchlist } from "../store/slices/watchlistSlice";
import { useDispatch } from "react-redux";

function Movie({ movie, showAddButton }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <div
        className="relative flex justify-center"
        key={movie.id}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          width: "200px",
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {showAddButton && (
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
            className="absolute text-primary bottom-2 bg-secondary font-bold py-1 px-2 rounded hover:bg-primary hover:text-secondary ease-in-out duration-500 active:bg-violet-700 focus:outline-none 
            "
          >
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
}

export default Movie;
