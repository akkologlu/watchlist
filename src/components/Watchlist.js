import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Watchlist() {
  const { watchlist } = useSelector((state) => state.watchlist);

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
          </div>
        ))
      ) : (
        <p>Your watchlist is empty</p>
      )}
    </div>
  );
}

export default Watchlist;
