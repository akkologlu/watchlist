import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="container relative mx-auto p-6 mainNav">
        <div className="flex items-center justify-between space-x-20 my-6">
          <div className="z-30 w-40">
            <img src={logo} alt="" />
          </div>
          <div className="hidden text-lg items-center space-x-10 font-mukta uppercase md:flex">
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
              to="/search"
              className="tracking-widest text-primary hover:text-secondary"
            >
              Search
            </NavLink>
            <NavLink
              to="/watchlist"
              className="tracking-widest text-primary hover:text-secondary"
            >
              Watchlist
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
