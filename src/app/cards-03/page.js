import React from "react";
import "../cards-03/style.css";

export const metadata = {
  title: "Cards-03",
  description: "Cards 03",
};
const Cards03 = () => {
  return (
    <div class="container">
      <ul class="cards">
        <li>
          <div
            class="card-content"
            style={{
              backgroundImage:
                "url('/assets/media/cards03/forest-resized.jpg')",
            }}
          ></div>
        </li>
        <li>
          <div
            class="card-content"
            style={{
              backgroundImage:
                "url('/assets/media/cards03/lavender-field-resized.jpg')",
            }}
          ></div>
        </li>
        <li>
          <div
            class="card-content"
            style={{
              backgroundImage:
                "url('/assets/media/cards03/wooden-bridge-resized.jpg')",
            }}
          ></div>
        </li>
      </ul>
    </div>
  );
};

export default Cards03;
