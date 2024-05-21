"use client";
import React, { useState } from "react";
import "./Portfolio.css";
import "../../../components/services/Services.css";
import { PORTFOLIO } from "../../../utlis/data";
import Link from "next/link";
const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(PORTFOLIO[0]);
  const [index, setIndex] = useState(0);

  const handleSelectedSlide = () => {
    if (index === PORTFOLIO.length - 1) {
      setIndex(0);
      setActiveSlide(PORTFOLIO[0]);
    } else {
      setIndex(index + 1);
      setActiveSlide(PORTFOLIO[index + 1]);
    }
  };
  const handleSelected = () => {
    if (index === 0) {
      setIndex(PORTFOLIO.length - 1);
      setActiveSlide(PORTFOLIO.slice(-1)[0]);
    } else {
      setIndex(index - 1);
      setActiveSlide(PORTFOLIO[index - 1]);
    }
  };
  //   return (
  //     <section className="portfolio-section">
  //       <h2>Our Work Portfolio</h2>
  //       <div className="portfolio-gallery">
  //         {PORTFOLIO.map((item) => {
  //           return (
  //             <div>
  //               <div key={item.id} className="portfolio-item">
  //                 <img src={item.image} alt="Portfolio Item 1" />
  //                 <h3>Portfolio Item 1</h3>
  //                 <p>Description of Portfolio Item 1</p>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </section>
  //   );
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

        {/* {PORTFOLIO.map((item) => {
          return ( */}
        <div className="row">
          <div className="col-md-6">
            <div className="row justify-content-center">
              <img src={activeSlide.image} alt="alt" />
            </div>
          </div>

          <div className="pl-md-5 Services-module--serviceDetail--99387 col-md-6">
            <div>
              <img
                className="portfolioArrowIconCover WorkPortfolio-module--iconContainerLeft--543e7"
                src="./assets/media/icons/arrow_left_ff8e28ead0.svg"
                alt="Left Arrow"
                onClick={handleSelected}
              />
              <img
                className="portfolioArrowRightIconCover WorkPortfolio-module--iconContainer--137e5"
                src="./assets/media/icons/arrow_right_444cea6456.svg"
                alt="Right Arrow"
                onClick={handleSelectedSlide}
              />
            </div>
            <p className="Services-module--para--5ad1a">{activeSlide.title}</p>
            <p className="pb-2">{activeSlide.descritpion}</p>
            {/* <div className="d-flex align-items-center flex-wrap">
          {icons.map((i) => {
            return (
              <div className="pb-2 mb-3 pr-4 hover-text">
                <img height={30} width={30} src={i.icon} alt={i.altText} />
                <span class="tooltip-text" id="top">
                  {i.altText}
                </span>
              </div>
            );
          })}
        </div> */}
            <Link href={activeSlide.buttonlink} className="btn_black_border">
              Learn More
            </Link>
          </div>
        </div>
        {/* );
        })} */}
      </div>
    </section>
  );
};

export default Portfolio;
