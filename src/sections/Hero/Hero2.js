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
      <main class="main">
        <section class="section">
          <div class="container banner-column">
            <Image
              class="banner-image"
              width={500}
              height={500}
              src="/assets/Headphone.png"
              alt="banner"
            />

            <div class="banner-inner">
              <h1 class="heading-xl">
                Software Development Consulting for
                <Autotyping string={autotypingString} />
              </h1>
              <h4 class="heading-med">
                Have Us As your Partner For the Next Big Leap
              </h4>
              <p class="paragraph">
                Your latency period deserves a big goodbye. Devlytica offers
                tailored, industry-specific IT consultation and software
                solutions to upscale your business.
              </p>
              <Link href="#" title="">
                <button class="btn btn-darken btn-inline">
                  I need a future roadmap<i class="bx bx-right-arrow-alt"></i>
                </button>
              </Link>
            </div>
            <div class="banner-links">
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
