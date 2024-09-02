'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Dragicard from '../util/DragiCard'

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
const ImageCardCarosel = () => {
    return (
        <div>
              <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Dragicard/>
        </SwiperSlide>
        <SwiperSlide>
            <Dragicard/>
        </SwiperSlide>
        <SwiperSlide>
            <Dragicard/>
        </SwiperSlide>
     
      </Swiper>
        </div>
    );
};

export default ImageCardCarosel;