"use client";

import React, { useEffect, useState } from "react";
import { ENDPOINTS } from "@/config/endpoints";
import { REQUEST } from "@/config/config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Faqs() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await REQUEST.get(ENDPOINTS.FAQS());
                const sortedData = response.results
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                    .slice(0, 10);
                setData(sortedData);
            } catch (error) {
                console.error("Error fetching faqs data:", error);
            }
        };
        getData();
    }, []);

    const skeletonArray = Array.from({ length: 10 });

    return (
        <section className="flat-spacing">
            <div className="container">
                <div className="page-faqs-wrap wow fadeInRight">
                    <div className="list-faqs">
                        <ul
                            className="accordion-product-wrap style-faqs"
                            id="accordion-faq-1"
                        >
                            {data.length > 0
                                ? data.map((faq, index) => (
                                    <li key={faq.id} className="accordion-product-item">
                                        <a
                                            href={`#accordion-${faq.id}`}
                                            className={`accordion-title ${index === 0 ? "current" : "collapsed"}`}
                                            data-bs-toggle="collapse"
                                            aria-expanded={index === 0 ? "true" : "false"}
                                            aria-controls={`accordion-${faq.id}`}
                                        >
                                            <h6>{faq.question}</h6>
                                            <span className="btn-open-sub" />
                                        </a>
                                        <div
                                            id={`accordion-${faq.id}`}
                                            className={`collapse ${index === 0 ? "show" : ""}`}
                                            data-bs-parent="#accordion-faq-1"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="text-secondary">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                                : skeletonArray.map((_, index) => (
                                    <li key={index} className="accordion-product-item">
                                        <h6><Skeleton width={300} /></h6>
                                        <div className="accordion-faqs-content">
                                            <p><Skeleton count={2} /></p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}