"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // impor CSS dari swiper
import "swiper/css/navigation"; // impor CSS untuk navigasi
import "swiper/css/pagination"; // impor CSS untuk pagination
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Project1 from "../../../../public/images/experience/Login.png";
import Project2 from "../../../../public/images/experience/Home.png";
import Project3 from "../../../../public/images/experience/project3.png";
import Project4 from "../../../../public/images/experience/project4.png";
import Project5 from "../../../../public/images/experience/project5.png";
import Image from "next/image";

const Slider = () => {

  const slidesData = [
    { src: Project1, alt: "project-1", text: "Personal" },
    { src: Project2, alt: "project-2", text: "Personal" },
    { src: Project3, alt: "project-3", text: "Personal" },
    { src: Project4, alt: "project-4", text: "Vocasia" },
    { src: Project5, alt: "project-5", text: "Personal" },
  ];


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
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Jadikan div ini sebagai kontainer relatif */}
            <div className={`relative h-[150px] flex items-center justify-center text-white text-2xl font-bold rounded-md overflow-hidden`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              {/* Div untuk teks, posisi absolut di kiri bawah */}
              <div className="absolute bottom-0 left-0">
                <p className="text-white text-sm md:text-base font-semibold bg-black bg-opacity-50 p-1 px-4 rounded">
                  {slide.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
