import React from "react";

import Header from "../components/Header";
import data from "../data/constants.json";
import heroImage from "../assets/images/hero-mobile.jpg";
import heroImageDesktop from "../assets/images/hero-desktop.jpg";
import styles from "./ComingSoon.module.css";

const BannerMessage = ({ heading, message }) => {
  return (
    <article className={styles["banner-message"]}>
      <h1>{heading || "lorem ipsum"}</h1>
      <p>{message || "ipsum lorem"}</p>
    </article>
  );
};

const BannerImage = () => {
  return (
    <picture style={{ backgroundColor: "green" }}>
      <source srcSet={heroImageDesktop} media="(min-width: 768px)" />
      <img src={heroImage} alt="hero" style={{ width: "100%" }} />
    </picture>
  );
};

const ComingSoon = () => {
  const id = "comingSoon";
  const { config } = data.pages.find(({ id: configId }) => configId === id);
  const { heading, message } = config;

  return (
    <>
      <Header contained />
      <main className={styles["cs-grid"]}>
        <BannerImage />
        <BannerMessage heading={heading} message={message} />
      </main>
    </>
  );
};

export default ComingSoon;
