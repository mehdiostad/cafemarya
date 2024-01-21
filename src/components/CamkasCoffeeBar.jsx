import React from "react";
import Card from "./Card";
const camkasCoffeeBar = () => {
  return (
    <div className="flex flex-col justify-center items-center border-dashed  mt-4 border-opacity-30 w-96  gap-2 border-white py-2 rouded-lg">
      {/* <div className="font-bold text-xl">قهوه دمی کمکس</div> */}
      <div className="flex gap-4 items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="font-bold">عربیکا اتیوپی</div>
          <div>٧٠ </div>
        </div>
        <div className="flex flex-col items-center text-[#8d6a20]">
          <div className="font-bold">عربیکا ٧٠/٣٠</div>
          <div>٦٥ </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold">ربوستا ٧٠/٣٠</div>
          <div>٦٥ </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold">ربوستا اوگاندا</div>
          <div>٦٠ </div>
        </div>
      </div>
    </div>
  );
};

export default camkasCoffeeBar;
