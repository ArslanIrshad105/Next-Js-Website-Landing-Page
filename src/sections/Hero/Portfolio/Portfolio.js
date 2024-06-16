"use client";
import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import "../../../components/services/Services.css";
import { PORTFOLIO } from "@/utlis/dat";
import Link from "next/link";

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(PORTFOLIO[0]);
  const [index, setIndex] = useState(0);

  const handleRightButton = () => {
    if (index === PORTFOLIO.length - 1) {
      setIndex(0);
      setActiveSlide(PORTFOLIO[0]);
    } else {
      setIndex(index + 1);
      setActiveSlide(PORTFOLIO[index + 1]);
    }
  };
  const handleLeftButton = () => {
    if (index === 0) {
      setIndex(PORTFOLIO.length - 1);
      setActiveSlide(PORTFOLIO.slice(-1)[0]);
    } else {
      setIndex(index - 1);
      setActiveSlide(PORTFOLIO[index - 1]);
    }
  };
  const handleSelectedButton = (b) => {
    setIndex(b);
    setActiveSlide(PORTFOLIO[b]);
  };

  const getData = async () => {
    const response = await fetch("http://localhost:3000/hello/", {
      method: "GET",
    });
    const movies = await response.json();
    console.log(movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="text-align">
              <h2 className="main-heading-1">Work Portfolio</h2>
              <p className="pb-2">
                Transform your vision into reality and drive exemplary results
                through InvoZone's dynamic engagement models.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row justify-content-center portfolio-item">
              <img src={activeSlide.image} alt="alt" />
            </div>
          </div>

          <div className="pl-md-5 Services-module--serviceDetail--99387 col-md-6">
            <div>
              <ul className="button__bar">
                {PORTFOLIO.map((item) => {
                  return (
                    <li
                      onClick={() => {
                        handleSelectedButton(item.id);
                      }}
                    >
                      <button
                        id={item.id}
                        className={
                          item.id === index
                            ? "li-button active-li-button"
                            : "li-button "
                        }
                      ></button>
                    </li>
                  );
                })}
              </ul>
              <img
                height={25}
                width={25}
                className="portfolioArrowIconCover WorkPortfolio-module--iconContainerLeft--543e7"
                src="./assets/media/icons/arrow_left_ff8e28ead0.svg"
                alt="Left Arrow"
                onClick={handleLeftButton}
              />
              <img
                height={25}
                width={25}
                className="portfolioArrowRightIconCover WorkPortfolio-module--iconContainer--137e5 "
                src="./assets/media/icons/arrow_right_444cea6456.svg"
                alt="Right Arrow"
                onClick={handleRightButton}
              />
            </div>
            <div style={{ marginTop: "100px" }}>
              <p className="Services-module--para--5ad1a">
                {activeSlide.title}
              </p>
              <p className="pb-2">{activeSlide.descritpion}</p>
            </div>

            <Link href={activeSlide.buttonlink} className="btn_black_border">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
