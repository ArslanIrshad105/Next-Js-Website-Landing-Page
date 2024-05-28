import React from "react";
import "../animation-02/style.css";

export const metadata = {
  title: "Animation 01",
  description:
    "We are Melbourne's leading digital marketing agency, helping Australian businesses improve their SEO, PPC & social media marketing",
};
const Animation02 = () => {
  return (
    <a class="button" href="#">
      <svg height="60" width="300" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="300" />
        <div class="text">Learn CSS</div>
      </svg>
    </a>
  );
};

export default Animation02;
