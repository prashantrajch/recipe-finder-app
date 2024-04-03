import React from "react";
import Search from "./Search";
import NavBar from "./NavBar";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-body-tertiary navbar ">
      <div className="container-fluid gap-3">
        <NavLink to={"/recipe-finder-app/"} className="logo nav-link">
          Food Recipe App
        </NavLink>
        <Search />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
