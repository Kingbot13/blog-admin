import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/create-post">Create Post</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/log-in">Log In</NavLink>
      </div>
    </nav>
  );
};
