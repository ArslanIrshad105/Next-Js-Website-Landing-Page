import React from "react";
import "../gallery-02/style.css";
import { GALLERY02 } from "@/utlis/data";

const Gallery = () => {
  return (
    <div className="gallery">
      {GALLERY02.map((item) => {
        return (
          <div className="card">
            <figure>
              <img src={item.image} alt={item.altText} />
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
