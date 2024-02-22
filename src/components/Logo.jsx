import React from "react";
import Image from "next/image";

const Logo = ({ logo }) => {
  return (
    <div className="flex items-center w-full justify-center ">
      <div className="flex items-center">
        <div className="relative flex items-center w-5 h-5 mr-2 mb-2">
          <Image
            src={logo}
            fill={true}
            className=" motion-safe:animate-ping ease-in-out absolute inline-flex h-full w-full rounded-full  opacity-75"
          ></Image>
          <Image src={logo} className="relative " fill={true}></Image>
        </div>
        <div className="brightness-100 text-white flex justify-center  font-black text-3xl -mr-2   pr-2 rounded-lg pb-1">
          کافه ماریا
        </div>
      </div>
    </div>
  );
};

export default Logo;
