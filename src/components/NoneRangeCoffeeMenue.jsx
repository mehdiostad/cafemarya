import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import CoffeeItems from "./CoffeeItems";
import iceCoffeIcon from "../../public/coffee-beans.png";
import NoneRangeCoffees from "./NoneRangeCoffees";
import CamkasCoffeeBar from "../components/CamkasCoffeeBar";
import logo from "../../public/heart.png";
import Instagram from "../../public/instagram.png";
const IceCoffeeMenue = () => {
  return (
    <div className="!border-0 !shadow-none flex flex-col items-center bg-[url('../../public/Untitled-3.jpg')]  text-white h-[100vh] bg-[#8c7652] bg-cover bg-center ">
      {/* cafe logo */}
      <div className="lg:items-end lg:flex lg:flex-col mr-24 mt-8">
        <Logo logo={iceCoffeIcon} />
        <div>
          <NoneRangeCoffees />
        </div>
        <div className="ml-8">
          <CamkasCoffeeBar />
        </div>
        <div className="absolute bottom-4 animate-bounce right-40 ">
          <a href="https://instagram.com/cafemarya" target="_blank">
          <Image src={Instagram} width={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IceCoffeeMenue;
