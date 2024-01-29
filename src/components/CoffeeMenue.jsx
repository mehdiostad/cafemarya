"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Logo from "@/components/Logo";
import beenIcon from "../../public/coffee-beans.png";
import CamkasCoffeeBar from "./CamkasCoffeeBar";
import CoffeeItems from "@/components/CoffeeItems";
import logo from "../../public/heart.png";
const CoffeeMenue = () => {
  return (
    <div className=" !border-0 !shadow-none flex md: flex-col bg-zinc-800 text-white h-[100vh] bg-[url('../../public/Untitled-2.jpg')] bg-cover bg-center">
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
