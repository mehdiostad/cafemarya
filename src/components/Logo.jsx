import React, { useEffect } from "react";
import { useState } from "react";
import { star, heart, hand, plane, lightning, note } from "./paths/paths";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { getIndex, useFlubber } from "./paths/use-flubber";
import Image from "next/image";
import cafeIcon from "../../public/coffee.png";
import beenIcon from "../../public/coffee-beans.png";
import heartMain from "../../public/heart.png"
const Logo = () => {
  //   const paths = [lightning, hand, plane, heart, note, star, lightning];
  //   const colors = [
  //     "#00cc88",
  //     "#0099ff",
  //     "#8855ff",
  //     "#ff0055",
  //     "#ee4444",
  //     "#ffcc00",
  //     "#00cc88",
  //   ];

  //     const [pathIndex, setPathIndex] = useState(0);
  //   const progress = useMotionValue(pathIndex);
  //   const fill = useTransform(progress, paths.map(getIndex), colors);
  //   const path = useFlubber(progress, paths);
  //     useEffect(() => {
  //       const animation = animate(progress, pathIndex, {
  //         duration: 1.5,
  //         ease: "easeInOut",
  //         onComplete: () => {
  //           if (pathIndex === paths.length - 1) {
  //             progress.set(0);
  //             setPathIndex(1);
  //           } else {
  //             setPathIndex(pathIndex + 1);
  //           }
  //         },
  //       });

  //       return () => animation.stop();
  //     }, [pathIndex]);



  

  return (
    <div className="flex items-center w-full justify-center  mt-2 mb-2">
      <div>
        <svg className=" flex  w-16 h-16 items-center justify-center mt-8 -mr-9 ">
          {/* <motion.path fill={fill} d={path} /> */}
        </svg>
      </div>
      <div className="flex items-center gap-0">
        <div className="rightness-100 text-white flex justify-center  font-black text-3xl -mr-2 shadow-2xl">
          کافه ماریا
        </div>
        <div className="flex items-center w-16 h-16 ml-2">
      <Image src={beenIcon}></Image>
        </div>
      </div>
    </div>
  );
};

export default Logo;
