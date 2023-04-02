import React from "react";
import Header from "../components/Header";
import data from "../data/constants.json";

const BannerMessage = ({ heading, message }) => {
  return <></>;
};

const BannerImage = () => {
  return <></>;
};

const ComingSoon = () => {
  console.log(data);

  return (
    <main>
      <BannerMessage />
      <BannerImage />
      <Header contained />
    </main>
  );
};

export default ComingSoon;
