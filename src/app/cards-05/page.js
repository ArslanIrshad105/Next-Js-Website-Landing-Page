import React from "react";
import "../cards-05/style.css";
// import { dataCards04 } from "@/utlis/cardsData";

const Cards05 = () => {
  return (
    <div class="cards">
      <figure class="card">
        <div class="corner left-top"></div>
        <div class="corner left-bottom"></div>
        <div class="corner right-top"></div>
        <div class="corner right-bottom"></div>
        <img
          src="/assets/media/cards05/lakeview-elegance.png"
          alt="Lakeview Elegance"
        />
        <figcaption>
          <h3>Lakeview Elegance</h3>
          <p>258 Serenity Lane, Crestwood Hills</p>
        </figcaption>
      </figure>
      <figure class="card">
        <div class="corner left-top"></div>
        <div class="corner left-bottom"></div>
        <div class="corner right-top"></div>
        <div class="corner right-bottom"></div>
        <img
          src="/assets/media/cards05/vista-paradiso.png"
          alt="Vista Paradiso"
        />
        <figcaption>
          <h3>Vista Paradiso</h3>
          <p>123 Paradise Road, Lakeview</p>
        </figcaption>
      </figure>
      <figure class="card">
        <div class="corner left-top"></div>
        <div class="corner left-bottom"></div>
        <div class="corner right-top"></div>
        <div class="corner right-bottom"></div>
        <img
          src="/assets/media/cards05/balcony-appartment.jpg"
          alt="Balcony Apartment"
        />
        <figcaption>
          <h3>Garden Vista</h3>
          <p>123 Tranquil Terrace Greenfield Grove</p>
        </figcaption>
      </figure>
      <figure class="card">
        <div class="corner left-top"></div>
        <div class="corner left-bottom"></div>
        <div class="corner right-top"></div>
        <div class="corner right-bottom"></div>
        <img
          src="/assets/media/cards05/skyline-oasis.png"
          alt="Skyline Oasis"
        />
        <figcaption>
          <h3>Skyline Oasis</h3>
          <p>450 Metropolitan Ave, Downtown</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Cards05;
