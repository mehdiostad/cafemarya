import React, { useEffect } from "react";
import { useState } from "react";
import { star, heart, hand, plane, lightning, note } from "./paths/paths";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { getIndex, useFlubber } from "./paths/use-flubber";
import Image from "next/image";
import cafeIcon from "../../public/coffee.png";
import heartMain from "../../public/heart.png";
const Logo = ({ logo }) => {
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
    <div className="flex items-center w-full justify-center  mt-1 mb-2 mr-4">
      <div>
        <svg className=" flex  w-16 h-16 items-center justify-center mt-8 -mr-9 ">
          {/* <motion.path fill={fill} d={path} /> */}
        </svg>
      </div>
      <div className="flex items-center gap-0 mr-9 mb-3">
        <div className="relative flex items-center w-6 h-6 mr-2 mb-2">
          <Image
            src={logo}
            className=" motion-safe:animate-ping ease-in-out absolute inline-flex h-full w-full rounded-full  opacity-75"
          ></Image>
          <Image src={logo} className="relative "></Image>
        </div>
        <div className="rightness-100 text-white flex justify-center  font-black text-3xl -mr-2 shadow-2xl border-r-2 border-dashed pr-2 border-b-2 border-[#3f3220] rounded-lg pb-1">
          کافه ماریا
        </div>
      </div>
    </div>
  );
};

export default Logo;
