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
    <div className=" border-t-2 border-r-2 border-b-2 border-dashed shadow-2xl z-10 flex flex-col bg-[url('../../public/Untitled-3.jpg')]  text-white h-[100vh] bg-[#8c7652] bg-cover bg-center object-cover">
      {/* cafe logo */}
      <div className="lg:items-end lg:flex lg:flex-col mr-24">
        <Logo logo={iceCoffeIcon} />
        <div>
          <NoneRangeCoffees />
        </div>
        <div>
          <CamkasCoffeeBar />
        </div>
        <div className="flex justify-end mr-8 mt-32 animate-bounce ml-2 ">
          <a href="https://instagram.com/cafemarya" target="_blank">
          <Image src={Instagram} width={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IceCoffeeMenue;
