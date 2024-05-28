import React from "react";
import "../cards-06/style.css";

const Cards06 = () => {
  return (
    <div class="container">
      <article class="card">
        <div class="background">
          <img
            src="/assets/media/cards06/preview.png"
            alt="Fetch API GraphQL Preview"
          />
        </div>
        <div class="content">
          <div class="card-header">
            <div class="card-type">Web Dev</div>
            <div class="latest-article">Latest Article</div>
          </div>
          <div class="card-content">
            <h2>Using Fetch API For Executing GraphQL Queries And Mutations</h2>
            <p>
              GraphQL is a powerful tool for querying data from remote servers
              and my preferred way of building APIs (Application Programming
              Interface). For some people, it might be difficult to learn as the
              tutorials are usually written using tools such as Apollo or Relay.
              These tools are great but often suited for more complicated
              projects. In certain scenarios, there might be better to choose a
              more lightweight approach and not increase bundle size with
              additional libraries. In these cases, you can work directly with
              the tools available in the browser. In this quick tutorial, we
              will use fetch, commonly available in your browser. Let’s first
              quickly revise what fetch is and how it is usually used with REST
              API, then we can move to simple GraphQL queries execution.
            </p>
          </div>
          <div class="blog-preview__bottom">
            <div class="blog-author">
              <img src="/assets/media/cards06/profile.jpg" alt="Avatar" />
              <div class="blog-author__name">
                <div class="blog-author__name">Arslán Irshád</div>
                <a
                  rel="author"
                  href="mailto:arslan@sozie.com"
                  class="blog-author__alias"
                >
                  Email
                </a>
              </div>
            </div>
            <a class="go-to-article-button" href="/my-blog" title="New Blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Cards06;
