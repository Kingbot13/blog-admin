import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/Nav.module.css';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/create-post">Create Post</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/log-in">Log In</NavLink>
      </div>
    </nav>
  );
};
