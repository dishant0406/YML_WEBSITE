import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Contactimg from "../../assets/images/sdc.png";
import Image from "next/image";
import Carousel from "../Carousel";

const cardVariants = {
  offscreen: {
    x: -500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

function SectionOne({ deviceType }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.onChange((latest) => {
      console.log("Page Scroll: ", latest);
    });
  }, [scrollY]);
  return (
    <div
      ref={ref}
      className="panel h-screen w-screen flex items-end justify-center bg-black"
    >
      <div className="h-[90%] w-full flex flex-col-reverse justify-around items-center">
        <div className="h-[50%] w-full flex">
          <div className="w-[50%] flex justify-end items-center">
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={
                inView
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1 },
                    }
                  : { y: -200, opacity: 0, transition: { duration: 1 } }
              }
              className="w-[40%] h-full flex  flex-col justify-center items-end p-4"
            >
              <div className="h-[20%] w-[50%] border-t-[3px] border-yellow-400"></div>
              <div className="h-[35%] w-[15%] border-t-[3px] border-yellow-400"></div>
              <div className="border-t-[3px] border-yellow-300 w-[15%] "></div>
            </motion.div>

            {/* <div className="border-t-[3px] border-yellow-300 w-[10%]"> </div> */}
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={
                inView
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1 },
                    }
                  : { y: 200, opacity: 0, transition: { duration: 1 } }
              }
              className="w-[50%] h-[70%] flex flex-col justify-around"
            >
              <div className="text-white font-proximaRegular text-5xl text-left tracking-[0.7rem]">
                PORTFOLIO
              </div>
              <div className="text-white font-proximaRegular text-md text-left">
                Lörem ipsum monodoskapet fira är dovadat ifall pafiss i jire.
                Oren nell reana anten sar. Tivis osade. Yligt reabel
                lånegarderob.{" "}
              </div>
              <div className="text-slate-400 font-proximaBold text-lg text-left w-[40%]">
                {" "}
                WATCH MORE --&gt;
              </div>
            </motion.div>
            {/* <div className="absolute left-96 border-t-[3px] border-yellow-300 w-[4%]"></div> */}
          </div>
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
            className="w-[50%] flex justify-start items-center"
          >
            <div className="w-[90%] h-full flex justify-around items-center">
              {/* <div className="w-[30%] h-[60%] bg-slate-100">
                <img src="https://picsum.photos/300" alt="img" />
              </div>
              <div className="w-[30%] h-[60%] bg-slate-100">
                <img src="https://picsum.photos/300" alt="img" />
              </div>
              <div className="w-[30%] h-[60%] bg-slate-100">
                <img src="https://picsum.photos/300" alt="img" />
              </div> */}

              <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
                <Carousel />
              </div>
              {/* <Simple deviceType={deviceType} /> */}
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="h-[50%] w-full flex justify-center items-center">
          {/* <div className="w-full h-[10%]  flex items-start"> */}
          {/* <Image alt="contact" src={Contactimg} /> */}
          {/* </div> */}
          <div className="absolute w-[83vw] h-[85vh] top-[21%] overflow-hidden">
            <Image
              className="h-full"
              src={Contactimg}
              layout="responsive"
              alt="background"
            ></Image>
          </div>
          <div className="h-[90%] w-[75%] flex justify-center items-center">
            <div className="h-[90%] w-[95%] flex justify-between items-center">
              <div className="h-full w-[90%] flex flex-col justify-between items-center">
                <div className="h-[20%] w-full flex justify-between">
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
                    className="h-[100%] w-full flex justify-between"
                  >
                    <div className="h-full w-[32.5%] border"></div>
                    <div className="h-full w-[32.5%] border"></div>
                    <div className="h-full w-[32.5%] border"></div>
                  </motion.div>
                  {/* <motion.div
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
                    className="h-full w-[32.5%] border"
                  ></motion.div> */}
                  {/* <motion.div
                    initial={{ x: 700, opacity: 0 }}
                    animate={
                      inView
                        ? {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 1, delay: 0.5 },
                        }
                        : { x: 700, opacity: 0, transition: { duration: 1 } }
                    }
                    className="h-full w-[32.5%] border"
                  ></motion.div> */}
                  {/* <motion.div
                    initial={{ x: 700, opacity: 0 }}
                    animate={
                      inView
                        ? {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 1, delay: 1 },
                        }
                        : { x: 700, opacity: 0, transition: { duration: 1 } }
                    }
                    className="h-full w-[32.5%] border"
                  ></motion.div> */}
                  {/* <div className="h-full w-[32.5%] border"></div>
                  <div className="h-full w-[32.5%] border"></div> */}
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
                      : { opacity: 0 }
                  }
                  className="h-[75%] border w-full"
                ></motion.div>
              </div>

              {/* Click Me btn */}
              {/* <div id="click-me-container" className="h-full w-[5%] border"> */}
                <div
                  id="click-me"
                  className="border h-[53px] w-[200px] origin-center -rotate-90 "
                >
                  CLICK ME
                </div>
              {/* </div> */}

              {/* <div className="h-full w-[10%]">
                <a
                  className="btn book-now border w-[300px] origin-center"
                  href="#"
                  title="Click Me"
                >
                  Click Me
                </a>
              </div> */}
            </div>
          </div>
          {/* </motion.div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}

// SectionOne.getInitialProps = ({ req }) => {
//   let userAgent;
//   if (req) {
//     userAgent = req.headers["user-agent"];
//   } else {
//     userAgent = navigator.userAgent;
//   }
//   const parser = new UAParser();
//   parser.setUA(userAgent);
//   const result = parser.getResult();
//   const deviceType = (result.device && result.device.type) || "desktop";
//   return { deviceType };
// };

export default SectionOne;
