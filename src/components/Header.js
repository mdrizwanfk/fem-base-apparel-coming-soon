import React from "react";
import logo from "../assets/images/logo.svg";

const Header = ({ contained = false }) => {
  return (
    <div className="container">
      <img src={logo} alt="base apparel logo" />
      hello world
    </div>
  );
};

export default Header;
