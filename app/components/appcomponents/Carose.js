'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../style.css";
import image1 from '/public/man1.png'
import image2 from '/public/man2.png'
import image3 from '/public/man3.png'
import image4 from '/public/man4.png'
import image5 from '/public/man5.png'
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const Carose = () => {
    return (
        <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
         
          <SwiperSlide>
            <Image  className="h-full w-full" alt="image"  src={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image  className="h-full w-full" alt="image"  src={image2} />
          </SwiperSlide>

          <SwiperSlide>
            <Image className="h-full w-full" alt="image"  src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image  className="h-full w-full" alt="image"  src={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image  className="h-full w-full" alt="image"  src={image5} />
          </SwiperSlide>
   
        </Swiper>
      </>
    );
};

export default Carose;