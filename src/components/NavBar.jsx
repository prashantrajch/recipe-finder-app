import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="navbar-nav flex-row gap-4">
      <NavLink to={"/recipe-finder-app/"} className="nav-link">
        Home
      </NavLink>
      <NavLink to={"/recipe-finder-app/favourite"} className="nav-link">
        Favourites
      </NavLink>
    </ul>
  );
}

export default NavBar;
