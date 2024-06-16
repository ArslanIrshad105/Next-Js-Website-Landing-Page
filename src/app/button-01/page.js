import React from "react";
import "../button-01/style.css";

export const metadata = {
  title: "Button-01",
  description: "Button Animation",
};
const Button01 = () => {
  return (
    <span className="background">
      <a href="#" className="button">
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        Learn
      </a>
    </span>
  );
};

export default Button01;
