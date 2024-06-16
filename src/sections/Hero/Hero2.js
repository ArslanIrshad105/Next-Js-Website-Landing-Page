"use client";
import Image from "next/image";
import "../Hero/Hero.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Autotyping from "@/components/Autotyping/Autotyping";

const Hero2 = () => {
  const autotypingString = ["Startups", "Businesses"];
  return (
    <>
      <main className="main">
        <section className="section">
          <div className="container banner-column">
            <Image
              className="banner-image"
              width={500}
              height={500}
              src="/assets/Headphone.png"
              alt="banner"
            />

            <div className="banner-inner">
              <h1 className="heading-xl">
                Software Development Consulting for
                <Autotyping string={autotypingString} />
              </h1>
              <h4 className="heading-med">
                Have Us As your Partner For the Next Big Leap
              </h4>
              <p className="paragraph">
                Your latency period deserves a big goodbye. Devlytica offers
                tailored, industry-specific IT consultation and software
                solutions to upscale your business.
              </p>
              <Link href="#" title="">
                <button className="btn btn-darken btn-inline">
                  I need a future roadmap
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </Link>
            </div>
            <div className="banner-links">
              <Link href="/" title="">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <a href="#" title="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" title="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" title="">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero2;
