"use client";

import React, { useEffect, useState } from "react";
import { ENDPOINTS } from "@/config/endpoints";
import { REQUEST } from "@/config/config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Terms() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await REQUEST.get(ENDPOINTS.TERM_OF_USE());
                setData(response);
            } catch (error) {
                console.error("Error fetching about data:", error);
            }
        };
        getData();
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg p-8" style={{ margin: "30px 0" }}>
                    {data ? (
                        <div
                            className="prose prose-lg max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: data.text }}
                        />
                    ) : (
                        <Skeleton count={5} />
                    )}
                </div>
            </div>
        </section>
    );
}