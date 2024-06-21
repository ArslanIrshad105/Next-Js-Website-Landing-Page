"use client";
import React, { useState } from "react";
import "../socials-02/style.css";

const Socials = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "socials-wrapper active" : "socials-wrapper"}>
      <button className="share-button" onClick={handleClick}>
        {!active ? (
          <img src="assets/media/socials-02/share.svg" alt="Share On Socials" />
        ) : (
          <img src="assets/media/socials-02/close.svg" alt="Share On Socials" />
        )}
      </button>
      <ul className="socials-menu">
        <li className="social">
          <a href="#" title="Instagram">
            <img src="assets/media/socials-02/instagram.svg" alt="Instagram" />
          </a>
        </li>
        <li className="social">
          <a href="#" title="Twitter">
            <img src="assets/media/socials-02/twitter.svg" alt="Twitter" />
          </a>
        </li>
        <li className="social" title="Threads">
          <a href="#">
            <img src="assets/media/socials-02/threads.svg" alt="Threads" />
          </a>
        </li>
        <li className="social">
          <a href="#" title="Youtube">
            <img src="assets/media/socials-02/youtube.svg" alt="Youtube" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
