import * as React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/articles"> Articles</NavLink>
        <NavLink to="/blogs"> Blogs</NavLink>
      </nav>
    </React.Fragment>
  );
};
