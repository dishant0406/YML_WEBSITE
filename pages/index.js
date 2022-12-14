import React from "react";

import Head from "next/head";
import Image from "next/image";
import Hero from "../components/index/Hero";
import SectionOne from "../components/index/SectionOne";
import SectionTwo from "../components/index/SectionTwo";
import styles from "../styles/Home.module.css";

import ScrollInitiate from "../components/scroll";
import SectionThree from "../components/index/SectionThree";
import SectionFour from "../components/index/SectionFour";
import Navbar from "../components/index/Navbar";
import HomeContact from "../components/index/HomeContact";
import SectionTech from "../components/index/SectionTech";

export default function Home() {
  React.useLayoutEffect(() => {
    const width = window.innerWidth;
    console.log("Called scroll");
    if (Number(width) >= 1366) {
      // console.log('Scroll initiated')
      ScrollInitiate();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Yellomonkey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main
        id="well"
        className="bg-[#2A2F35] text-white font-butler text-center flex flex-col items-center justify-center"
      >
        <Hero />
        {/* <HomeContact /> */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        {/* <SectionTech /> */}
      </main>

      <footer className="w-screen"></footer>
    </div>
  );
}
