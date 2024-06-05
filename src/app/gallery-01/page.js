import React from "react";
import "../gallery-01/style.css";
import { GALLERY01 } from "@/utlis/data";

const Gallery = () => {
  return (
    <div class="background">
      <div class="gallery">
        {GALLERY01.map((item) => {
          return (
            <div class="card">
              <figure>
                <img src={item.image} alt={item.altText} />
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
