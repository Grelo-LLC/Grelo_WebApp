"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const iconboxItems = [
    {
        id: 1,
        icon: "icon-return",
        title: "14 Günlük Geri Qaytarma",
        description: "Asan qaytarma ilə risksiz alış-veriş.",
    },
    {
        id: 2,
        icon: "icon-shipping",
        title: "Pulsuz Çatdırılma",
        description: "Əlavə xərc yoxdur, yalnız göstərilən qiymət.",
    },
    {
        id: 3,
        icon: "icon-headset",
        title: "24/7 Dəstək",
        description: "Hər zaman sizin üçün mövcud olan dəstək.",
    },
    {
        id: 4,
        icon: "icon-sealCheck",
        title: "Üzv Endirimləri",
        description: "Sadiq müştərilərimiz üçün xüsusi qiymətlər.",
    },
];

export default function Features({ parentClass = "flat-spacing" }) {
    return (
        <section className={parentClass}>
            <div className="container wow fadeInUp">
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