import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Logo from "@/components/Logo";
import beenIcon from "../../public/coffee-beans.png";
import CamkasCoffeeBar from "./CamkasCoffeeBar";
import CoffeeItems from "@/components/CoffeeItems";
import logo from "../../public/heart.png";
const CoffeeMenue = () => {


  return (
    <div className=" border-t-2 border-dashed shadow-2xl z-10 flex flex-col bg-zinc-800 text-white h-[100vh] bg-[url('../../public/Untitled-2.jpg')] bg-cover bg-center">
      {/* cafe logo */}
      <div className="lg:items-end lg:flex lg:flex-col mr-24">
        <div onClick={() => toast("salam")}>
          <Logo logo={logo} />
        </div>

        <div>
          <CoffeeItems />
        </div>
        {/* <div className="flex justify-center">
          <CamkasCoffeeBar />
        </div> */}
      </div>
    </div>
  );
};

export default CoffeeMenue;
