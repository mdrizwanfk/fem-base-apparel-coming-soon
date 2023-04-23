import React from "react";

import Header from "../components/Header";
import data from "../data/constants.json";
import styles from "./ComingSoon.module.css";
import iconArrow from "../assets/images/icon-arrow.svg";

const BannerCTA = ({ heading, message }) => {
  return (
    <article id={styles["banner-message"]} className="text-clr-pr-1">
      <h1 dangerouslySetInnerHTML={{ __html: heading || "lorem ipsum" }}></h1>
      <p>{message || "ipsum lorem"}</p>
      <BannerForm />
    </article>
  );
};

const BannerImage = () => {
  return <div id={styles["banner-image"]}></div>;

  // note: i would love it this way, but i'm blocked to move ahead..
  // ref: README.md
  // return (
  //   <picture id={styles["banner-image"]} style={{ backgroundColor: "green" }}>
  //     <source srcSet={heroImageDesktop} media="(min-width: 768px)" />
  //     <img src={heroImage} alt="hero" style={{ width: "100%" }} />
  //   </picture>
  // );
};

const BannerForm = () => {
  return (
    <form>
      <label htmlFor="email"></label>
      <input type="email" id="email" />
      <button type="submit">
        <img src={iconArrow} alt="submit" />
      </button>
    </form>
  );
};

const ComingSoon = () => {
  const id = "comingSoon";
  const { config } = data.pages.find(({ id: configId }) => configId === id);
  const { heading, message } = config;

  return (
    <main className={styles["container"]}>
      <Header contained />
      <section className={styles["cs-grid"]}>
        <BannerImage />
        <BannerCTA heading={heading} message={message} />
      </section>
    </main>
  );
};

export default ComingSoon;
