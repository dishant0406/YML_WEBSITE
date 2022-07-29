import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SectionThree() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="panel h-screen w-screen flex items-end justify-center"
    >
      <div className="h-[90%] w-[75%]">
        <div className="h-[25%] w-full flex flex-col items-center justify-between">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={
              inView
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1 },
                  }
                : { x: -300, opacity: 0, transition: { duration: 1 } }
            }
            className="w-full h-[35%] text-5xl font-proximaRegular tracking-[0.7rem]"
          >
            OUR CLIENTS
          </motion.div>
          <div className="w-[10%] h-0 border-t-[3px] border-yellow-300"></div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={
              inView
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1 },
                  }
                : { x: 300, opacity: 0, transition: { duration: 1 } }
            }
            className="w-[60%] h-[50%] text-xl font-proximaRegular flex justify-center items-center"
          >
            Lörem ipsum ter hunav dosm, berade. Döplagen ponera med ljudaffisch
            i kidiktig plus syrur, depreligen. Deplaling nybel öv då
            Gretaeffekten multin eftersom till favis.
          </motion.div>
        </div>
        <div className="h-[70%] w-full flex justify-center items-center">
          <div className="h-[90%] w-[90%] flex justify-between items-center">
            <div className="h-full w-[20%] flex flex-col justify-around items-center">
              <div className="h-[48%] w-[95%] bg-[#c3c3c3]"></div>
              <div className="h-[48%] w-[95%] bg-[#a3a3a3]"></div>
            </div>
            <div className="h-full w-[20%] flex flex-col justify-around items-center">
              <motion.div
                initial={{ x: -600, opacity: 0 }}
                animate={
                  inView
                    ? {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                      }
                    : { x: -600, opacity: 0, transition: { duration: 1 } }
                }
                className="h-[98%] w-[95%] bg-[#d3d2d2]"
              ></motion.div>
            </div>
            <div className="h-full w-[40%] flex flex-col justify-around items-center">
              <motion.div
                initial={{ y: -600, opacity: 0 }}
                animate={
                  inView
                    ? {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                      }
                    : { y: -600, opacity: 0, transition: { duration: 1 } }
                }
                className="h-[48%] w-[97%] bg-[#eeeeee]"
              ></motion.div>
              <div className="h-[48%] w-[97%] flex justify-between items-center">
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
                  className="w-[49%] h-full bg-[#858585]"
                ></motion.div>
                <div className="w-[49%] h-full bg-[#c3c3c3]"></div>
              </div>
            </div>
            <div className="h-full w-[20%] flex flex-col justify-around items-center">
              <div className="h-[48%] w-[95%] bg-[#c3c3c3]"></div>
              <div className="h-[48%] w-[95%] bg-[#a3a3a3]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
