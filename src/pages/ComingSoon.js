import React, { useState, useContext } from "react";

import isEmail from "validator/lib/isEmail";

import Header from "../components/Header";
import data from "../data/constants.json";
import styles from "./ComingSoon.module.css";
import iconArrow from "../assets/images/icon-arrow.svg";
import iconError from "../assets/images/icon-error.svg";

import WindowContext from "../store/window-context";

const BannerCTA = ({ heading, message, onSubmit }) => {
  const ctx = useContext(WindowContext);
  return (
    <article id={styles["banner-message"]} className="text-clr-pr-1">
      {ctx.isDesktop && <Header />}
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
  const [helpText, setHelpText] = useState("");
  const [errors, setErrors] = useState({ email: undefined });
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const onSubmitPreProcess = (e) => {
    e.preventDefault();
    const enteredEmail = e.target["email"].value;

    if (enteredEmail.length === 0) {
      setHelpText("This field can't be empty.");
      setErrors({ email: true });
    }

    if (!isEmail(enteredEmail)) {
      setHelpText("Please provide a valid email");
      setErrors({ email: true });
    } else {
      const postObj = {
        email: enteredEmail,
      };
      onSubmit(postObj);

      setHelpText(`Success! You'll not be notified on ${enteredEmail}.`);
      setErrors({ email: false });
    }
  };

  const emailChangeHandler = (e) => {
    const enteredEmail = e.target.value;
    setIsSubmitEnabled(enteredEmail.length > 0);
    setHelpText("");
    setErrors({ email: undefined });
  };

  return (
    <form id={styles["banner-form"]} onSubmit={onSubmitPreProcess}>
      <label htmlFor="email"></label>
      <div
        className={`${styles["input-group"]} ${
          errors.email === true
            ? styles["error"]
            : errors.email === false
            ? styles["success"]
            : ""
        }`}
      >
        <input
          type="email"
          id="email"
          placeholder="email address"
          onChange={emailChangeHandler}
          maxLength={55}
        />
        {errors.email && <img src={iconError} alt="error" />}
        <button type="submit" disabled={!isSubmitEnabled}>
          <img src={iconArrow} alt="submit" />
        </button>
        <p id={styles["help-text"]}>{helpText}</p>
      </div>
    </form>
  );
};

const ComingSoon = () => {
  const ctx = useContext(WindowContext);

  const id = "comingSoon";
  const { config } = data.pages.find(({ id: configId }) => configId === id);
  const { heading, message } = config;

  const onSubmit = ({ email }) => {};

  return (
    <main className={styles["container"]}>
      {!ctx.isDesktop && <Header />}
      <section className={styles["cs-grid"]}>
        <BannerImage />
        <BannerCTA heading={heading} message={message} onSubmit={onSubmit} />
      </section>
    </main>
  );
};

export default ComingSoon;
