import React from "react";

import Logo from "@/components/Logo";

import CoffeeItems from "@/components/CoffeeItems";
const CoffeeMenue = () => {
  return (
    <div className="flex flex-col bg-zinc-800 text-white h-[100vh] bg-[url('../../public/pexels-chevanon-photography-312418.jpg')] bg-cover bg-center">
      {/* cafe logo */}
      <div className="lg:items-end lg:flex lg:flex-col ">
        <div>
          <Logo />
        </div>
        <div>
          <CoffeeItems />
        </div>
      </div>
    </div>
  );
};

export default CoffeeMenue;
