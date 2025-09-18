"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const brands = [
  {
    id: 1,
    imgSrc: "/images/brand/vanfaba.png",
    alt: "brand",
    width: 174,
    height: 40,
  },
  {
    id: 2,
    imgSrc: "/images/brand/anvouge.png",
    alt: "brand",
    width: 137,
    height: 30,
  },
  {
    id: 3,
    imgSrc: "/images/brand/carolin.png",
    alt: "brand",
    width: 129,
    height: 40,
  },
  {
    id: 4,
    imgSrc: "/images/brand/shangxi.png",
    alt: "brand",
    width: 146,
    height: 40,
  },
  {
    id: 5,
    imgSrc: "/images/brand/ecomife.png",
    alt: "brand",
    width: 118,
    height: 26,
  },
  {
    id: 6,
    imgSrc: "/images/brand/cheryl.png",
    alt: "brand",
    width: 110,
    height: 40,
  },
  {
    id: 7,
    imgSrc: "/images/brand/sopify.png",
    alt: "brand",
    width: 87,
    height: 35,
  }
];

export default function Brands({ parentClass = "flat-spacing-5 line-top" }) {
  return (
    <section className={parentClass}>
      <Swiper
        dir="ltr"
        className="swiper tf-sw-partner sw-auto"
        spaceBetween={50} 
        loop={true} 
        autoplay={{ delay: 0 }} 
        breakpoints={{
          1024: {
            slidesPerView: "auto", 
            spaceBetween: 74, 
          },
          768: {
            slidesPerView: "auto", 
            spaceBetween: 50, 
          },
          0: {
            slidesPerView: 2, 
            spaceBetween: 50, 
          },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <a href="#" className="brand-item">
              <Image
                alt={brand.alt}
                src={brand.imgSrc}
                width={brand.width}
                height={brand.height}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
