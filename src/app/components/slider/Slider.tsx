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
    { src: Project1, alt: "Dashboard login page", text: "Personal" },
    { src: Project2, alt: "Dashboard home page", text: "Personal" },
    { src: Project3, alt: "Project showcase", text: "Personal" },
    { src: Project4, alt: "Vocasia platform", text: "Vocasia" },
    { src: Project5, alt: "Personal website exploration", text: "Personal" },
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
            <div className="group relative h-56 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/40">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 280px, (min-width: 768px) 220px, 90vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent transition-opacity duration-300 group-hover:from-slate-950/80" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 text-white">
                <span className="inline-flex w-max items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {slide.text}
                </span>
                <p className="text-sm font-semibold leading-snug">{slide.alt}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
