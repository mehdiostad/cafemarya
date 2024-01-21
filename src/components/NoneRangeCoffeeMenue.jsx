import React from "react";

import Logo from "./Logo";
import CoffeeItems from "./CoffeeItems";
import iceCoffeIcon from "../../public/iced-coffee.png"
import NoneRangeCoffees from "./NoneRangeCoffees";
const IceCoffeeMenue = () => {
  return (
    <div className="flex flex-col bg-zinc-800 text-white h-[100vh] bg-[url('../../public/ice.jpg')] bg-cover bg-center object-cover">
      {/* cafe logo */}
      <div className="lg:items-end lg:flex lg:flex-col ">
        <Logo logo={iceCoffeIcon}/>
        <div>
          <NoneRangeCoffees />
        </div>
      </div>
    </div>
  );
};

export default IceCoffeeMenue;
