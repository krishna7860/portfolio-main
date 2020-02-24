import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={styles.Navbar}>
      <NavLink activeClassName={styles.active} to="/about" exact>
        /About
      </NavLink>
      <NavLink activeClassName={styles.active} to="/projects">
        /Projects
      </NavLink>
      <NavLink activeClassName={styles.active} to="/writings">
        /Writings
      </NavLink>
      <NavLink activeClassName={styles.active} to="/achievement">
        /Achievement
      </NavLink>
    </div>
  );
}
