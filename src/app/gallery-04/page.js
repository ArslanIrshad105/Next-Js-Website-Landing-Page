import React from "react";
import "../gallery-04/style.css";
import { GALLERY04 } from "@/utlis/data";

const Gallery = () => {
  return (
    <div class="gallery">
      {GALLERY04.map((item) => {
        return (
          <div class="card">
            <figure>
              <img src={item.image} alt={item.text} />
              <figcaption>
                <h3>{item.text}</h3>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
