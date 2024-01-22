import React from "react";

import Logo from "./Logo";
import CoffeeItems from "./CoffeeItems";
import iceCoffeIcon from "../../public/iced-coffee.png"
import NoneRangeCoffees from "./NoneRangeCoffees";
import CamkasCoffeeBar from "../components/CamkasCoffeeBar"
const IceCoffeeMenue = () => {
  return (
    <div className=" border-t-2 border-r-2 border-b-2 border-dashed shadow-2xl z-10 flex flex-col bg-[url('../../public/Untitled-3.jpg')]  text-white h-[100vh] bg-[#8c7652] bg-cover bg-center object-cover">
      {/* cafe logo */}
      <div className="lg:items-end lg:flex lg:flex-col mr-24">
        <Logo logo={iceCoffeIcon}/>
        <div>
          <NoneRangeCoffees />
        </div>
        <div>
          <CamkasCoffeeBar/>
        </div>
      </div>
    </div>
  );
};

export default IceCoffeeMenue;
