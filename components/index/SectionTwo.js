import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DesignIcon from "../../assets/images/Hexagonal_Pattern.png";
import DevelopmentIcon from "../../assets/images/Compare_Git.png";
import MarketingIcon from "../../assets/images/Commercial.png";
import { useInView } from "react-intersection-observer";

function SectionTwo() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="panel h-screen w-screen flex items-end justify-center"
    >
      <div className="h-full w-full flex flex-col justify-around items-center">
        <div className="h-[90%] w-[75%] flex flex-col justify-center items-center">
          <motion.div
            intial={{ y: -50, opacity: 0 }}
            animate={
              inView
                ? { y: 0, opacity: 1, transition: { duration: 1 } }
                : { y: -50, opacity: 0 }
            }
            className="h-[10%] w-full text-white text-5xl tracking-[0.7rem] font-proximaRegular"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.div initial={{ y: -700, opacity: 0 }}
            animate={
              inView
                ? {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1 },
                }
                : { y: -700, opacity: 0, transition: { duration: 1 } }
            } className="w-[7%] border-b-[3px] border-yellow-300"></motion.div>
          <div className="h-[90%] w-full flex justify-between">
            <div className="w-[47%] h-full flex justify-end items-center">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={
                  inView
                    ? { x: 0, opacity: 1, transition: { duration: 1 } }
                    : { x: -200, opacity: 0 }
                }
                className="h-[25%] w-[70%]  mt-[20%] flex items-end"
              >
                <div className="h-full w-[80%]">
                  <div className="flex justify-end w-full h-[37.5%] text-3xl p-1 font-proximaRegular tracking-[0.35rem] text-right">
                    Development
                  </div>
                  <div className="w-full text-sm h-[62.5%] text-right font-proximaRegular p-2">
                    L??rem ipsum monodoskapet fira ??r dovadat ifall pafiss i
                    jire. Oren nell reana anten sar. Tivis osade. Yligt reabel
                    l??negarderob.
                  </div>
                </div>
                <motion.div initial={{ x: 700, opacity: 0 }}
                  animate={
                    inView
                      ? {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                      }
                      : { x: 700, opacity: 0, transition: { duration: 1 } }
                  } className="h-[85%] w-[20%]">
                  <div className="h-[40%] w-[90%] border-t-[2px] "></div>
                  <div className="h-[60%] w-[40%] border-t-[2px] border-yellow-300"></div>
                </motion.div>
              </motion.div>
            </div>




            <div className="w-[3%] h-[85%] pt-4 flex flex-col justify-around items-center">
              <motion.div initial={{ y: -700, opacity: 0 }}
                animate={
                  inView
                    ? {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1 },
                    }
                    : { y: 700, opacity: 0, transition: { duration: 1 } }
                } className="w-0 h-[15%] border-r-[2px] border-white">
              </motion.div>
              <div className="w-full h-[8%] flex items-center">
                <Image alt="Design" src={DesignIcon} />
              </div>


              <motion.div initial={{ y: -700, opacity: 0 }}
                animate={
                  inView
                    ? {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1 },
                    }
                    : { y: 700, opacity: 0, transition: { duration: 1 } }
                } className="w-0 h-[20%] border-r-[2px] border-white">
              </motion.div>
              <div className="w-full h-[8%]  flex items-center">
                <Image alt="Development" src={DevelopmentIcon} />
              </div>


              <motion.div initial={{ y: -700, opacity: 0 }}
                animate={
                  inView
                    ? {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1 },
                    }
                    : { y: 700, opacity: 0, transition: { duration: 1 } }
                } className="w-0 h-[20%] border-r-[2px] border-white">
              </motion.div>
              <div className="w-full h-[10%]  flex items-start">
                <Image alt="Marketing" src={MarketingIcon} />
              </div>
            </div>




            <div className="w-[47%] h-[97.5%] flex flex-col justify-between items-start">
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={
                  inView
                    ? { x: 0, opacity: 1, transition: { duration: 1 } }
                    : { x: 200, opacity: 0 }
                }
                className="h-[20%] w-[70%]  mt-[21%] flex items-end"
              >
                <motion.div initial={{ x: -700, opacity: 0 }}
                  animate={
                    inView
                      ? {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                      }
                      : { x: -700, opacity: 0, transition: { duration: 1 } }
                  } className="h-[85%] w-[20%] flex flex-col items-end">
                  <div className="h-[40%] w-[90%] border-t-[2px] "></div>
                  <div className="h-[60%] w-[40%] border-t-[2px] border-yellow-300"></div>
                </motion.div>

                <div className="h-full w-[80%]">
                  <div className="flex justify-start w-full h-[37.5%] text-3xl p-1 font-proximaRegular tracking-[0.35rem] text-right">
                    Design
                  </div>
                  <div className="w-full text-sm h-[62.5%] text-left font-proximaRegular p-2">
                    L??rem ipsum monodoskapet fira ??r dovadat ifall pafiss i
                    jire. Oren nell reana anten sar. Tivis osade. Yligt reabel
                    l??negarderob.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={
                  inView
                    ? { x: 0, opacity: 1, transition: { duration: 1 } }
                    : { x: 200, opacity: 0 }
                }
                className="h-[20%] w-[70%] flex items-end mb-[3.5%]"
              >
                <motion.div initial={{ x: -700, opacity: 0 }}
                  animate={
                    inView
                      ? {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                      }
                      : { x: -700, opacity: 0, transition: { duration: 1 } }
                  } className="h-[85%] w-[20%] flex flex-col items-end">
                  <div className="h-[40%] w-[90%] border-t-[2px] "></div>
                  <div className="h-[60%] w-[40%] border-t-[2px] border-yellow-300"></div>
                </motion.div>

                <div className="h-full w-[80%]">
                  <div className="flex justify-start w-full h-[37.5%] text-3xl p-1 font-proximaRegular tracking-[0.35rem] text-right">
                    Marketing
                  </div>
                  <div className="w-full text-sm h-[62.5%] text-left font-proximaRegular p-2">
                    L??rem ipsum monodoskapet fira ??r dovadat ifall pafiss i
                    jire. Oren nell reana anten sar. Tivis osade. Yligt reabel
                    l??negarderob.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
