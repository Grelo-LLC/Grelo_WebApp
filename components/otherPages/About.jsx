"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ENDPOINTS } from "@/config/endpoints";
import { REQUEST } from "@/config/config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function About() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await REQUEST.get(ENDPOINTS.ABOUT());
                setData(response);
            } catch (error) {
                console.error("Error fetching about data:", error);
            }
        };
        getData();
    }, []);

    return (
        <section className="flat-spacing about-us-main pb_0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-us-features wow fadeInLeft">
                            {data ? (
                                <Image
                                    src={data.image}
                                    alt="about-image"
                                    width={930}
                                    height={618}
                                    priority
                                />
                            ) : (
                                <Skeleton height={618} width={930} />
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-us-content">
                            <h3 className="title wow fadeInUp">
                                {data ? data.title : <Skeleton width={200} />}
                            </h3>
                            <p>
                                {data ? (
                                    data.description
                                ) : (
                                    <Skeleton count={4} />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}