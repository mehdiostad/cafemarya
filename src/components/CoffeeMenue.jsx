"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Logo from "@/components/Logo";
import beenIcon from "../../public/coffee-beans.png";
import CamkasCoffeeBar from "./CamkasCoffeeBar";
import CoffeeItems from "@/components/CoffeeItems";
import logo from "../../public/heart.png";
const CoffeeMenue = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimer);
  });
  return (
    <>
      {isLoading ? (
        <div className="h-[100vh] bg-[#8c7652] flex flex-col justify-center items-center text-white scale-150">
          <div>به کافه ماریا خوش آمدید</div>
          <div
            role="status"
            className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            <div className="flex justify-center' items-center " dir="rtl">صبر کنید...</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default CoffeeMenue;
