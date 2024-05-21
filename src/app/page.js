// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Particle from "@/components/Particle/Particle";
import Services from "@/components/services/Services";
import Hero from "@/sections/Hero/Hero";
import Hero2 from "@/sections/Hero/Hero2";
import Portfolio from "@/sections/Hero/Portfolio/Portfolio";

export default function Home() {
  return (
    //
    <>
      <Header />
      {/* <Hero /> */}
      <Hero2 />
      <Particle />
      <Services />
      <Portfolio />
    </>
  );
}
