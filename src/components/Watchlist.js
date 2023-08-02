import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../store/slices/watchlistSlice";
import { ImCross } from "react-icons/im";

function Watchlist() {
  const { watchlist } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen sm:px-24">
      <div className="ml-10">
        <h1 className="text-primary font-roboto font-bold text-3xl ">
          Watchlist
        </h1>
        <div className="border bg-neutral-800 border-none  text-white text-opacity-50 outline-none rounded-lg min-h-full  mb-10 mt-5 mr-10 pb-5 flex gap-7 flex-wrap pl-9 pt-5 lg:justify-start sm:justify-center px-0">
          {watchlist.length > 0 ? (
            watchlist.map((movie) => (
              <div
                key={movie.id}
                className="scale-100 hover:scale-125 ease-in duration-100 py-10 pl-15"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt=""
                />
                <button
                  onClick={() => {
                    dispatch(removeFromWatchlist({ id: movie.id }));
                  }}
                  className="absolute top-11 right-1 bg-gray-600 text-primary rounded-full w-6 h-6 flex justify-center items-center hover:bg-secondary transition ease-in duration-100"
                >
                  <ImCross />
                </button>
              </div>
            ))
          ) : (
            <p className="text-primary">Your watchlist is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
