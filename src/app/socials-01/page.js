import React from "react";
import "../socials-01/style.css";

const Socials = () => {
  return (
    <span className="background">
      <span className="social-media-buttons">
        <span className="social-media-button">
          <img alt="Instagram" src="assets/media/socials-01/instagram.svg" />
        </span>
        <span className="social-media-button">
          <img alt="Twitter" src="assets/media/socials-01/twitter.svg" />
        </span>
        <span className="social-media-button">
          <img alt="Youtube" src="assets/media/socials-01/youtube.svg" />
        </span>
        <span className="social-media-button">
          <img alt="LinkedIn" src="assets/media/socials-01/linkedin.svg" />
        </span>
      </span>
    </span>
  );
};

export default Socials;
