import Brands from "@/components/common/Brands";
import Link from "next/link";
import About from "@/components/otherPages/About";
import React from "react";
import Features from "@/components/common/Features";

export const metadata = {
    title: "Haqqımızda - Grelo.Az",
    description: "Grelo Agro Saytıdır",
};

export default function AboutUsPage() {
    return (
        <>
            <div className="page-title">
                <div className="container-full">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="heading text-center">Haqqımızda</h3>
                            <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                                <li>
                                    <Link className="link" href={`/`}>
                                        Ana Səhifə
                                    </Link>
                                </li>
                                <li>
                                    <i className="icon-arrRight" />
                                </li>
                                <li>Haqqımızda</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <About />

            <Features parentClass="flat-spacing-4 line-top-container" />

            <Brands parentClass="flat-spacing-5 bg-surface" />
        </>
    );
}