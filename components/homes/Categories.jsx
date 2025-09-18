"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";

const categories5 = [
  {
    imgSrc: "/images/collections/collection-circle/cls-electronic1.jpg",
    alt: "collection-img",
    title: "Electronics",
  },
  {
    imgSrc: "/images/collections/collection-circle/cls-electronic2.jpg",
    alt: "collection-img",
    title: "Appliances",
  },
  {
    imgSrc: "/images/collections/collection-circle/cls-electronic3.jpg",
    alt: "collection-img",
    title: "Kitchen",
  },
  {
    imgSrc: "/images/collections/collection-circle/cls-electronic4.jpg",
    alt: "collection-img",
    title: "Audio",
  },
  {
    imgSrc: "/images/collections/collection-circle/cls-electronic5.jpg",
    alt: "collection-img",
    title: "Smart Home",
  },
  {
    imgSrc: "/images/collections/collection-circle/cls-electronic6.jpg",
    alt: "collection-img",
    title: "Game",
  },
  {
    imgSrc: "/images/collections/collection-circle/cls-electronic7.jpg",
    alt: "collection-img",
    title: "Office",
  },
  {
    imgSrc: "/images/collections/collection-circle/cls-electronic1.jpg",
    alt: "collection-img",
    title: "Electronics",
  },
];

export default function Categories() {
  return (
    <section className="flat-spacing-4">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Popular Categories</h3>
        </div>
        <div
          className="flat-collection-circle wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <Swiper
            dir="ltr"
            className="swiper tf-sw-categories"
            slidesPerView={7}
            breakpoints={{
              1200: { slidesPerView: 7 },
              992: { slidesPerView: 4 },
              576: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            spaceBetween={15}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spd22",
            }}
            navigation={{
              prevEl: ".snbp8",
              nextEl: ".snbn8",
            }}
          >
            {categories5.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="collection-circle hover-img">
                  <Link href={`/store/products`} className="img-style">
                    <Image
                      className="lazyload"
                      data-src={category.imgSrc}
                      alt={category.alt}
                      src={category.imgSrc}
                      width={253}
                      height={252}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <div>
                      <Link href={`/store/products`} className="cls-title">
                        <h6 className="text">{category.title}</h6>
                        <i className="icon icon-arrowUpRight" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="d-flex d-lg-none sw-pagination-categories sw-dots type-circle justify-content-center spd22" />
          </Swiper>
          <div className="nav-prev-categories d-none d-lg-flex nav-sw style-line nav-sw-left snbp8">
            <i className="icon icon-arrLeft" />
          </div>
          <div className="nav-next-categories d-none d-lg-flex nav-sw style-line nav-sw-right snbn8">
            <i className="icon icon-arrRight" />
          </div>
        </div>
      </div>
    </section>
  );
}