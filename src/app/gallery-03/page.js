import React from "react";
import "../gallery-03/style.css";
import { GALLERY03 } from "@/utlis/data";

const Gallery = () => {
  return (
    <div className="background">
      <div className="gallery">
        {GALLERY03.map((item) => {
          return (
            <div className="card">
              <div className="card__side">
                <img src={item.frontImage} alt={item.altTextFrontImage} />
              </div>
              <div className="card__side card__side--back">
                <img src={item.backImage} alt={item.altTextBackImage} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
