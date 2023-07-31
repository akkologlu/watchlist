import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../store/slices/watchlistSlice";

function Watchlist() {
  const { watchlist } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Watchlist</h1>
      {watchlist.length > 0 ? (
        watchlist.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.id}</h1>
            <p>{movie.title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt=""
            />
            <button
              onClick={() => {
                dispatch(removeFromWatchlist({ id: movie.id }));
              }}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Your watchlist is empty</p>
      )}
    </div>
  );
}

export default Watchlist;
