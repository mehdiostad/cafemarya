"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import CoffeeMenue from "@/components/Menues/CoffeeMenue";
import NoneRangeCoffeeMenue from "@/components/Menues/NoneRangeCoffeeMenue";
import TeaMenue from "@/components/Menues/TeaMenue";
import ColdMenue from "@/components/Menues/ColdMenue";
import BreakFastMenue from "@/components/Menues/BreakFastMenue";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const page = () => {
  const [scroll, setScroll] = useState(false);
  const [renderComponent, setRenderComponent] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexChanged, setActiveIndexChanged] = useState(false);
  useEffect(() => {
    if (activeIndexChanged) {
      setRenderComponent(true);
      setActiveIndexChanged(false);
    }
    if (scroll) return;
    const timer = setTimeout(() => {
      toast.info("صفحات دیگه رو هم ببینید!");
    }, 15000);
    return () => clearTimeout(timer);
  }, [scroll, activeIndex, activeIndexChanged]);
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
        modules={[Navigation, Scrollbar, Pagination]}
        spaceBetween={0}
        slidesPerView={0.8}
        navigation
        scrollbar={{ draggable: true }}
        // cssMode={true}
        onSlideChange={(Swiper) => {
          setScroll(true);
          setActiveIndex(Swiper.activeIndex);
          setActiveIndexChanged(true);
        }}
      >
        <SwiperSlide>
          <CoffeeMenue />
        </SwiperSlide>
        <SwiperSlide>
          <NoneRangeCoffeeMenue isReRender={renderComponent} />
        </SwiperSlide>
        <SwiperSlide>
          <TeaMenue isReRender={renderComponent} />
        </SwiperSlide>
        <SwiperSlide>
          <ColdMenue isReRender={renderComponent} />
        </SwiperSlide>
        <SwiperSlide>
          <BreakFastMenue isReRender={renderComponent} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default page;
