import React from "react";
import "../cards-01/style.css";
import { dataCards01 } from "@/utlis/blogData";
import Link from "next/link";

export const metadata = {
  title: "Cards-01",
  description: "Cards 01",
};
const Cards01 = () => {
  return (
    <div class="background">
      <div class="centering">
        <div class="articles">
          {dataCards01.map((item) => {
            return (
              <article>
                <figure>
                  <img src={item.blog_image} alt={item.alt_text} />
                </figure>
                <div class="article-preview">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Link
                    href={item.link_url}
                    class="read-more"
                    title="Read More"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards01;
