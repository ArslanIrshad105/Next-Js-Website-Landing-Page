"use client";
import React from "react";
import "../gallery-06/style.css";
import { GALLERY06 } from "@/utlis/data";

const Gallery = () => {
  return (
    <div className="gallery">
      {GALLERY06.map((item) => {
        return (
          <div className="card">
            <img src={item.image} alt={item.altText} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
