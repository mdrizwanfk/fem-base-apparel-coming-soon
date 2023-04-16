import React from "react";

import Header from "../components/Header";
import data from "../data/constants.json";
import styles from "./ComingSoon.module.css";

const BannerMessage = ({ heading, message }) => {
  return (
    <article id={styles["banner-message"]} className={styles["banner-message"]}>
      <h1 dangerouslySetInnerHTML={{ __html: heading || "lorem ipsum" }}></h1>
      <p>{message || "ipsum lorem"}</p>
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

const ComingSoon = () => {
  const id = "comingSoon";
  const { config } = data.pages.find(({ id: configId }) => configId === id);
  const { heading, message } = config;

  return (
    <main className={styles["container"]}>
      <Header contained />
      <section className={styles["cs-grid"]}>
        <BannerImage />
        <BannerMessage heading={heading} message={message} />
      </section>
    </main>
  );
};

export default ComingSoon;
