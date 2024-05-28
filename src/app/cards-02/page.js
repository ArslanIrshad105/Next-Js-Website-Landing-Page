import React from "react";
import "../cards-02/style.css";
import { dataCards02 } from "@/utlis/cardsData";
import Link from "next/link";

export const metadata = {
  title: "Cards-02",
  description: "Cards 02",
};
const Cards02 = () => {
  return (
    <div class="container">
      {dataCards02.map((item) => {
        return (
          <article class="card">
            <div class="card-background">
              <img src={item.card_image} alt={item.alt_text} />
            </div>
            <div class="content">
              <h1>{item.title}</h1>
              <p> {item.description}</p>
            </div>
            <div class="action-bottom-bar">
              <Link href={item.link_url}>
                {item.link_text}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="chevron"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l14 0"></path>
                  <path d="M15 16l4 -4"></path>
                  <path d="M15 8l4 4"></path>
                </svg>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Cards02;
