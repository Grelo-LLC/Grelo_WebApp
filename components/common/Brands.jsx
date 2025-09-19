"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ENDPOINTS } from "@/config/endpoints";
import { REQUEST } from "@/config/config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Brands({ parentClass = "flat-spacing-5 line-top" }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await REQUEST.get(ENDPOINTS.BRANDS());
                setData(response.results);
            } catch (error) {
                console.error("Error fetching brand data:", error);
            }
        };
        getData();
    }, []);

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
                {data.length > 0
                    ? data.map((brand) => (
                        <SwiperSlide key={brand.id}>
                            <Image
                                src={brand.image}
                                alt={brand.name}
                                width={150}
                                height={60}
                                priority
                            />
                        </SwiperSlide>
                    ))
                    : Array.from({ length: 5 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <Skeleton width={150} height={60} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}