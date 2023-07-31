import React from "react";

function Home() {
  return (
    <section id="hero">
      <div className="h-screen flex justify-center">
        <div className="flex flex-col justify-center h-96 mx-6 items-center mt-24 max-w-6xl sm:mx-16 md:space-y-16 space-y-8">
          <h1
            className="text-primary font-bold
        text-5xl font-merriweather-sans"
          >
            Create Watchlist for Movies and TV Series
          </h1>
          <p className="text-primary text-3-xl mt-6 mb-11">
            Keep new, popular and upcoming content on your list, save them and
            don't forget to watch.
          </p>
          <div className="flex flex-col text-primary justify-center w-full space-y-6 text-xl md:flex-row md:space-y-0 md:space-x-10">
            <button className="rounded-full bg-secondary py-4 px-8 shadow-lg duration-200 hover:opacity-80">
              Movies
            </button>
            <button className="rounded-full bg-secondary py-4 px-8 shadow-lg duration-200 hover:opacity-80">
              Series
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
