"use client";

import { GreloContext } from "@/context/GreloContext";
import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function StoreLocations() {
    const { info } = useContext(GreloContext);

    return (
        <section className="flat-spacing">
            <div className="container">
                <div className="row align-items-center justify-center">
                    <div className="col-12">
                        <div className="contact-us-map">
                            <div className="wrap-map">
                                <div
                                    id="map-contact"
                                    className="map-contact"
                                    data-map-zoom={16}
                                    data-map-scroll="true"
                                >
                                    {info ? (
                                        <iframe
                                            src={info.map_link}
                                            width={600}
                                            height={450}
                                            style={{ border: 0, width: "100%", height: "100%" }}
                                            allowFullScreen=""
                                            loading="lazy"
                                        />
                                    ) : (
                                        <Skeleton height={450} />
                                    )}
                                </div>
                            </div>
                            <div className="right">
                                <h4>
                                    {info ? "Məlumat" : <Skeleton width={120} />}
                                </h4>

                                <div className="mb_20">
                                    <div className="text-title mb_8">Telefon:</div>
                                    <p className="text-secondary">
                                        {info ? info.phone : <Skeleton width={150} />}
                                    </p>
                                </div>
                                <div className="mb_20">
                                    <div className="text-title mb_8">Email:</div>
                                    <p className="text-secondary">
                                        {info ? info.email : <Skeleton width={200} />}
                                    </p>
                                </div>
                                <div className="mb_20">
                                    <div className="text-title mb_8">Ünvan:</div>
                                    <p className="text-secondary">
                                        {info ? info.address : <Skeleton count={2} />}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}