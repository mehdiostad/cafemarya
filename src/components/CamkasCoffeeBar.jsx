import React from "react";
import Card from "./Card";

const camkasCoffeeBar = () => {
  return (
    <div className="flex flex-col justify-center items-center  mt-4 w-96  gap-2 border-white py-2 rouded-lg  ">
      {/* <div className="font-bold text-xl">قهوه دمی کمکس</div> */}
      <div className="flex gap-4 items-center justify-center border-2 border-dashed  border-[#ffffff] p-2 bg-black bg-opacity-40 border-opacity-40 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="font-bold">
            سیروپ ها: فندق، بادام، آیریش، کارامل، شکلات، وانیل
          </div>
          <div className="animate-pulse">+تومان٨٠٠٠</div>
          <div className="border-t-1 border mb-2 border-white w-full"></div>
          <div className="font-bold">نوشیدنی + آیس = ۵۰۰۰ تومان افزایش قیمت</div>
        </div>
      </div>
    </div>
  );
};

export default camkasCoffeeBar;
