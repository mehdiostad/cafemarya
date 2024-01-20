import React from "react";

import Logo from "./Logo";
import CoffeeItems from "./CoffeeItems";

const IceCoffeeMenue = () => {
  return (
    <div className="flex flex-col bg-zinc-800 text-white h-[100vh] bg-[url('../../public/ice.jpg')] bg-cover bg-center object-cover">
      {/* cafe logo */}
      <div className="lg:items-end lg:flex lg:flex-col ">
        <Logo />
        <div>
          <CoffeeItems />
        </div>
      </div>
    </div>
  );
};

export default IceCoffeeMenue;
