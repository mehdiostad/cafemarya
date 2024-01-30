"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Logo from "@/components/Logo";

import CoffeeItems from "@/components/MenueItems/CoffeeItems";
import logo from "../../../public/heart.png";
const CoffeeMenue = () => {
  return (
    <div className=" !border-0 !shadow-none flex md: flex-col bg-zinc-800 text-white h-[100vh] bg-[url('../../public/CafeMarya1.jpg')] bg-cover bg-center">
      {/* cafe logo */}
      <div className="lg:items-end lg:flex lg:flex-col mr-24 mt-8">
        <div>
          <Logo logo={logo} />
        </div>

        <div>
          <CoffeeItems />
        </div>
      </div>
    </div>
  );
};

export default CoffeeMenue;
