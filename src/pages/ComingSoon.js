import React, { useState } from "react";

import Header from "../components/Header";
import data from "../data/constants.json";
import styles from "./ComingSoon.module.css";
import iconArrow from "../assets/images/icon-arrow.svg";
import iconError from "../assets/images/icon-error.svg";

const BannerCTA = ({ heading, message, onSubmit }) => {
  return (
    <article id={styles["banner-message"]} className="text-clr-pr-1">
      <Header />
      <h1 dangerouslySetInnerHTML={{ __html: heading || "lorem ipsum" }}></h1>
      <p>{message || "ipsum lorem"}</p>
      <BannerForm onSubmit={onSubmit} />
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

const BannerForm = ({ onSubmit }) => {
  const [helpText, setHelpText] = useState("help text");
  const [errors, setErrors] = useState({ email: false });

  const onSubmitPreProcess = (e) => {
    e.preventDefault();
    const enteredEmail = e.target["email"].value;
    if (enteredEmail.includes("@") && enteredEmail.includes(".")) {
      const postObj = {
        email: enteredEmail,
      };
      onSubmit(postObj);
    } else {
      setHelpText("Please provide a valid email");
      setErrors({ email: true });
    }
  };

  return (
    <form id={styles["banner-form"]} onSubmit={onSubmitPreProcess}>
      <label htmlFor="email"></label>
      <div
        className={`${styles["input-group"]} ${
          errors.email ? styles["error"] : ""
        }`}
      >
        <input type="email" id="email" placeholder="email address" />
        {errors.email && <img src={iconError} alt="error" />}
        <button type="submit">
          <img src={iconArrow} alt="submit" />
        </button>
        {errors.email && <p>{helpText}</p>}
      </div>
    </form>
  );
};

const ComingSoon = () => {
  const id = "comingSoon";
  const { config } = data.pages.find(({ id: configId }) => configId === id);
  const { heading, message } = config;

  const onSubmit = ({ email }) => {
    console.log("email", email);
  };

  return (
    <main className={styles["container"]}>
      <Header contained />
      <section className={styles["cs-grid"]}>
        <BannerImage />
        <BannerCTA heading={heading} message={message} onSubmit={onSubmit} />
      </section>
    </main>
  );
};

export default ComingSoon;
