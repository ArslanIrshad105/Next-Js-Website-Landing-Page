import React from "react";
import Header from "@/components/Header/Header";
import Blog from "@/components/blog/blog";

export const metadata = {
  title: "Your Local Digital Marketing Experts in Melbourne - Devlytica",
  description:
    "We are Melbourne's leading digital marketing agency, helping Australian businesses improve their SEO, PPC & social media marketing",
};
const Blogs = () => {
  return (
    <>
      <div>
        <Header />
        <Blog />
      </div>
    </>
  );
};

export default Blogs;
