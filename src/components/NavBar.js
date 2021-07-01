import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex">
          <NavLink
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
            to="/"
          >
            Atharva
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
            to="/post"
          >
            Blog Posts
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
            to="/about"
          >
            About us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
