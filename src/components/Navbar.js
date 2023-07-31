import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ isHome }) {
  return (
    <div className={`navbar ${isHome ? "navbar-home" : ""}`}>
      <nav className="container relative mx-auto p-6">
        <div className="flex items-center justify-between space-x-20 my-6">
          <div className="z-30 w-40">
            <img src={logo} alt="" />
          </div>
          <div className="hidden items-center space-x-10 font-mukta uppercase md:flex">
            <NavLink
              to="/"
              className="tracking-widest  text-primary hover:text-secondary"
            >
              Home
            </NavLink>
            <NavLink
              to="/discover"
              className="tracking-widest text-primary hover:text-secondary"
            >
              Discover
            </NavLink>
            <NavLink
              to="/watchlist"
              className="tracking-widest text-primary hover:text-secondary"
            >
              Watchlist
            </NavLink>
            <NavLink
              to="/search"
              className="tracking-widest text-primary hover:text-secondary"
            >
              Search
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
