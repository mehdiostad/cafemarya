"use client";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import CoffeeMenue from "@/components/CoffeeMenue";
import NoneRangeCoffeeMenue from "@/components/NoneRangeCoffeeMenue";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const page = () => {
  useEffect(() => {
    console.log("timer started");
    const timer = setTimeout(() => {
      toast.warn(" صفحه بعدی رو هم ببینید");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="lg:hidden">
      <div className="flex justify-center items-center mr-72 ">
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <Swiper
        // modules={[Navigation,]}
        spaceBetween={0}
        slidesPerView={0.8}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        cssMode={true}
      >
        <SwiperSlide>
          <CoffeeMenue />
        </SwiperSlide>
        <SwiperSlide>
          <NoneRangeCoffeeMenue />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default page;
