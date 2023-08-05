import React from "react";
import { useSelector } from "react-redux";
import tmdb from "../assets/tmdb.svg";
import { addToWatchlist } from "../store/slices/watchlistSlice";
import { useDispatch } from "react-redux";

function MovieDetail() {
  const dispatch = useDispatch();

  const { detail } = useSelector((state) => state.detail);

  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="text-primary flex flex-col justify-center items-center lg:items-start my-24 w-7/12 space-x-7 lg:flex-row space-y-10 md:space-y-0">
          <div className="w-3/4 flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
              alt=""
            />
          </div>

          <div className="flex flex-col space-y-10 ">
            <div className="text-center lg:text-start">
              <h1 className="text-3xl md:text-7xl">{detail.title}</h1>
              <div className="mt-3 text-lg">({detail.release_date})</div>
            </div>

            <div className="mt-3 text-xl flex justify-center lg:justify-start">
              {detail.overview}
            </div>
            <div className="relative flex flex-col items-center lg:space-x-16 justify-center lg:justify-start lg:flex-row space-x-0 space-y-8 lg:space-y-0 ">
              <div className="flex space-x-3">
                <img src={tmdb} alt="" className="w-16 " />
                <div className="text-xl">{detail.vote_average} / 10</div>
              </div>

              <div>
                <button
                  onClick={() => {
                    dispatch(
                      addToWatchlist({
                        id: detail.id,
                        title: detail.original_title,
                        poster_path: detail.poster_path,
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
