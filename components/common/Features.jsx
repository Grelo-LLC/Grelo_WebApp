"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const iconboxItems = [
  {
    id: 1,
    icon: "icon-return",
    title: "14-Day Returns",
    description: "Risk-free shopping with easy returns.",
  },
  {
    id: 2,
    icon: "icon-shipping",
    title: "Free Shipping",
    description: "No extra costs, just the price you see.",
  },
  {
    id: 3,
    icon: "icon-headset",
    title: "24/7 Support",
    description: "24/7 support, always here just for you.",
  },
  {
    id: 4,
    icon: "icon-sealCheck",
    title: "Member Discounts",
    description: "Special prices for our loyal customers.",
  },
];

export default function Features({ parentClass = "flat-spacing" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <Swiper
          dir="ltr"
          className="swiper tf-sw-iconbox"
          spaceBetween={15}
          breakpoints={{
            1200: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd2",
          }}
        >
          {iconboxItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="tf-icon-box">
                <div className="icon-box">
                  <span className={`icon ${item.icon}`} />
                </div>
                <div className="content text-center">
                  <h6>{item.title}</h6>
                  <p className="text-secondary">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-iconbox spd2 sw-dots type-circle justify-content-center" />
        </Swiper>
      </div>
    </section>
  );
}
