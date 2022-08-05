import React from "react";
import background from "../../assets/images/Sec4.png";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
function SectionTech() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="panel h-screen w-screen flex items-end justify-center"
    >
      <div className="w-full h-[90%] flex justify-center items-center">
        <div className="w-full h-[95%] flex justify-center items-center">
          <div className="absolute w-[100vw] h-[85vh] top-[82.5%] overflow-hidden">
            <Image
              className="h-full brightness-[35%]"
              src={background}
              layout="responsive"
              alt="background"
            ></Image>
          </div>
          <div className="z-[4] w-[75%] h-[85%] border-[3.5px] border-[#808080] flex items-center justify-center">
            <div className="h-[80%] w-[80%] flex items-center justify-center flex-col">
              <div className="h-[40%] w-full flex justify-end items-end">
                <div className="h-[65%] w-[15%] border-t-[4px] border-white"></div>
                <motion.div
                  initial={{ x: 600, opacity: 0 }}
                  animate={
                    inView
                      ? {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 1 },
                        }
                      : {
                          x: 600,

                          opacity: 0,
                          transition: { duration: 1 },
                        }
                  }
                  className="h-full w-[75%] pl-8 font-proximaRegular text-left text-4xl tracking-[0.7rem] flex items-center"
                >
                  WE’LL HELP YOU GROW YOUR DIGITAL ASSETS!
                </motion.div>
              </div>
              <div className="h-[45%] w-full flex justify-end items-end">
                <div className="h-[95%] w-[4%] border-t-[4px] border-yellow-300"></div>
                <motion.div
                  initial={{ x: -600, opacity: 0 }}
                  animate={
                    inView
                      ? {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 1 },
                        }
                      : {
                          x: -600,

                          opacity: 0,
                          transition: { duration: 1 },
                        }
                  }
                  className="h-full w-[75%] pl-8 font-proximaRegular text-left text-lg"
                >
                  When was the last time you looked at your digital statistics
                  and felt, ‘Woah! That’s amazing!’? Our team of experts curate
                  your online footprint through customized digital solutions. We
                  build and grow your online presence driven by market data and
                  analytics so you will always be ahead of the digital curve.
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTech;
