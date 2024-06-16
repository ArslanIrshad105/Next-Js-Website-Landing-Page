import React from "react";
import "../gallery-01/style.css";
import { GALLERY01 } from "@/utlis/data";

const Gallery = () => {
  console.log("gallery", GALLERY01);
  return (
    <div className="background">
      <div className="gallery">
        {GALLERY01.map((item) => {
          return (
            <div className="card">
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
