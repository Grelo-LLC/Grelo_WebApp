"use client";

import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section className="flat-spacing about-us-main pb_0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-us-features wow fadeInLeft">
                            <Image
                                className="lazyload"
                                data-src="/images/banner/about-us.jpg"
                                alt="image-team"
                                src="/images/banner/about-us.jpg"
                                width={930}
                                height={618}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-us-content">
                            <h3 className="title wow fadeInUp">
                                Modave – Offering rare and beautiful items worldwide
                            </h3>
                            <p>
                                Welcome to Modave Store, your premier destination for
                                fashion-forward clothing and accessories. We pride
                                ourselves on offering a curated selection of rare and
                                beautiful items sourced both locally and globally. Our
                                mission is to bring you the latest trends and timeless
                                styles, ensuring every piece reflects quality and
                                elegance. Discover the perfect addition to your wardrobe
                                at Modave Store.
                                Welcome to Modave Store, your premier destination for
                                fashion-forward clothing and accessories. We pride
                                ourselves on offering a curated selection of rare and
                                beautiful items sourced both locally and globally. Our
                                mission is to bring you the latest trends and timeless
                                styles, ensuring every piece reflects quality and
                                elegance. Discover the perfect addition to your wardrobe
                                at Modave Store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}