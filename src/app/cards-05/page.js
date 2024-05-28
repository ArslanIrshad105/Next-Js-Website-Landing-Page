import React from "react";
import "../cards-05/style.css";
import { dataCards05 } from "@/utlis/cardsData";

const Cards05 = () => {
  return (
    <div class="cards">
      {dataCards05.map((item) => {
        return (
          <figure class="card">
            <div class="corner left-top"></div>
            <div class="corner left-bottom"></div>
            <div class="corner right-top"></div>
            <div class="corner right-bottom"></div>
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
