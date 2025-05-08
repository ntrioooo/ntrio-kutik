"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // impor CSS dari swiper
import "swiper/css/navigation"; // impor CSS untuk navigasi
import "swiper/css/pagination"; // impor CSS untuk pagination
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Project1 from "../../../../public/images/experience/project-1.png";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        loop={true}
        autoplay={{ disableOnInteraction: false, delay: 0 }}
        speed={2000}
        className="trusted-by-swiper"
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-blue-500 h-[150px] flex items-center justify-center text-white text-2xl font-bold rounded-xl">
            <Image src={Project1} alt="project-1" className="rounded-xl"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 h-[150px] flex items-center justify-center text-white text-2xl font-bold">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 h-[150px] flex items-center justify-center text-white text-2xl font-bold">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 h-[150px] flex items-center justify-center text-white text-2xl font-bold">
            Slide 4
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 h-[150px] flex items-center justify-center text-white text-2xl font-bold">
            Slide 5
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 h-[150px] flex items-center justify-center text-white text-2xl font-bold">
            Slide 6
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
