"use client";
import React from "react";

import CoffeeMenue from "@/components/CoffeeMenue";
import NoneRangeCoffeeMenue from "@/components/NoneRangeCoffeeMenue";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const page = () => {
  return (
    <div className="lg:hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
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
