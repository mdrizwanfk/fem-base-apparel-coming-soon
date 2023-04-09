import React from "react";
import logo from "../assets/images/logo.svg";

const Header = ({ contained = false }) => {
  return (
    <header className="container" style={{ border: "1px solid black" }}>
      <img src={logo} alt="base apparel logo" />
    </header>
  );
};

export default Header;
