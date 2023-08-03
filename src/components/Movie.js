import React from "react";
import { addToWatchlist } from "../store/slices/watchlistSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addDetail } from "../store/slices/detailSlice";

function Movie({ movie, showAddButton }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <Link to={`/movie`}>
        <button
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
          onClick={() => {
            dispatch(addDetail(movie));
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
        </button>
      </Link>
    </div>
  );
}

export default Movie;
