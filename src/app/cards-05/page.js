import React from "react";
import "../cards-05/style.css";
import { dataCards05 } from "@/utlis/cardsData";

const Cards05 = () => {
  return (
    <div className="cards">
      {dataCards05.map((item) => {
        return (
          <figure className="card">
            <div className="corner left-top"></div>
            <div className="corner left-bottom"></div>
            <div className="corner right-top"></div>
            <div className="corner right-bottom"></div>
            <img src={item.card_image} alt={item.alt_text} />
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default Cards05;
