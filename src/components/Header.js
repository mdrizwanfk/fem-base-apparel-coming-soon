import React from "react";
import logo from "../assets/images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["container"]}>
      <img src={logo} alt="base apparel logo" />
    </header>
  );
};

export default Header;
