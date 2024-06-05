import React from "react";
import "../gallery-05/style.css";
import { GALLERY05 } from "@/utlis/data";

const Gallery = () => {
  return (
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        {GALLERY05.map((item) => {
          return (
            <div class="swiper-slide">
              <img src={item.image} alt={item.altText} />
            </div>
          );
        })}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  );
};

export default Gallery;
