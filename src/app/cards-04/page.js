"use client";
import React, { useState } from "react";
import "../cards-04/style.css";
import { dataCards04 } from "@/utlis/cardsData";

const Cards04 = () => {
  const [isLike, setIsLike] = useState(false);
  const toggleButton = (val) => {
    if (isLike === val) {
      setIsLike(null);
    } else {
      setIsLike(val);
    }
  };
  return (
    <div className="cards">
      {dataCards04.map((item) => {
        return (
          <article className="card">
            <div className="card__preview">
              <img src={item.card_image} alt={item.alt_text} />
              <div className="card__price">{item.price}</div>
            </div>
            <div className="card__content">
              <h2 className="card__title">{item.title}</h2>
              <p className="card__address">{item.address}</p>
              <p className="card__description"> {item.description}</p>
              <div className="card__bottom">
                <div className="card__properties">{item.properties}</div>
                <button className="card__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isLike === item.id ? "card__btn--like" : null}
                    onClick={() => toggleButton(item.id)}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Cards04;
