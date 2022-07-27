import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <motion.div
          initial="offscreen"
          animate={inView ? "onscreen" : "offscreen"}
          // transition={{ duration: 1.2, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <motion.div variants={cardVariants}>
            <div className="h-[60%]">
              <h2 className="text-3xl">Y</h2>
              <h2 className="text-3xl">E</h2>
              <h2 className="text-3xl">L</h2>
              <h2 className="text-3xl">L</h2>
              <h2 className="text-3xl">O</h2>
              <h2 className="text-3xl">M</h2>
              <h2 className="text-3xl">O</h2>
              <h2 className="text-3xl">N</h2>
              <h2 className="text-3xl">K</h2>
              <h2 className="text-3xl">E</h2>
              <h2 className="text-3xl">Y</h2>
            </div>

            <div className="h-[30%]">
              <h2 className="text-3xl">L</h2>
              <h2 className="text-3xl">A</h2>
              <h2 className="text-3xl">B</h2>
              <h2 className="text-3xl">S</h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
