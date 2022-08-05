import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heroimg from "../../assets/images/Heroimg.png";
import Image from "next/image";

const cardVariants = {
  offscreen: {
    y: -500,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 1.2,
    },
  },
};

function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="panel h-screen w-screen flex items-center justify-center"
    >
      <div className="h-[90%] w-full flex flex-col justify-around items-center">
        <div className="absolute w-[100%] overflow-hidden heroimg">
          {/* <Image
            className="h-full heroimg"
            src={Heroimg}
            layout="responsive"
            alt="background"
          ></Image> */}
        </div>

        <motion.div
          initial="offscreen"
          animate={inView ? "onscreen" : "offscreen"}
          // transition={{ duration: 1.2, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <motion.div variants={cardVariants}>
            <div className="h-[60%] relative">
              <h2 className="text-4xl">Y</h2>
              <h2 className="text-4xl">E</h2>
              <h2 className="text-4xl">L</h2>
              <h2 className="text-4xl">L</h2>
              <h2 className="text-4xl">O</h2>
              <h2 className="text-4xl">M</h2>
              <h2 className="text-4xl">O</h2>
              <h2 className="text-4xl">N</h2>
              <h2 className="text-4xl">K</h2>
              <h2 className="text-4xl">E</h2>
              <h2 className="text-4xl">Y</h2>
            </div>
            {/* &nbsp; */}
            <br />
            <div className="h-[30%] relative">
              <h2 className="text-4xl">L</h2>
              <h2 className="text-4xl">A</h2>
              <h2 className="text-4xl">B</h2>
              <h2 className="text-4xl">S</h2>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -700, opacity: 0 }}
        animate={
          inView
            ? {
                x: 0,
                opacity: 1,
                transition: { duration: 1 },
              }
            : { x: -700, opacity: 0, transition: { duration: 1 } }
        }
        className="text_right"
      >
        {/* <div className="left_yellow_border"></div> */}
        <div className="left_white_border"></div>
        <br />
        <p>
          Lörem ipsum prelig antesm falingar heterosion lyrån samt nivis. Bel
          ygisk berat. Nigen or, nyr den autosän jöfar dosonedade i rål är fal.
          Kvasint jöbel kosabögure: nisade heteronilyrade, om vaprengar: för att
          fadiv tålig halvtaktsjobb..
        </p>
        <br />
        <div className="left_yellow_border"></div>
        {/* <div className="left_white_border"></div> */}
      </motion.div>

      <motion.div
        initial={{ x: 700, opacity: 0 }}
        animate={
          inView
            ? {
                x: 0,
                opacity: 1,
                transition: { duration: 1 },
              }
            : { x: 700, opacity: 0, transition: { duration: 1 } }
        }
        className="text_left"
      >
        <div className="right_white_border"></div>
        <br />
        <p>
          Lörem ipsum prelig antesm falingar heterosion lyrån samt nivis. Bel
          ygisk berat. Nigen or, nyr den autosän jöfar dosonedade i rål är fal.
          Kvasint jöbel kosabögure: nisade heteronilyrade, om vaprengar: för att
          fadiv tålig halvtaktsjobb..
        </p>
        <br />
        <div className="right_yellow_border"></div>
      </motion.div>
    </div>
  );
}

export default Hero;
