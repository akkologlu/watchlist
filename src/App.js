import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Watchlist from "./components/Watchlist";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // Check if the current route is the home page
  const isHome = location.pathname === "/";

  return (
    <div className={`App ${isHome ? "home-bg" : "bg-color"}`}>
      <Navbar isHome={isHome} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
