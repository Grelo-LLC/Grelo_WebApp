import Terms from "@/components/otherPages/Terms";
import React from "react";
import Link from "next/link";

export const metadata = {
    title: "İstifadə şərtləri - Grelo.Az",
    description: "Grelo Agro Saytıdır",
};

export default function TermsOfUsePage() {
    return (
        <>
            <div className="page-title">
                <div className="container-full">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="heading text-center">İstifadə qaydaları</h3>
                            <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                                <li>
                                    <Link className="link" href={`/`}>
                                        Ana Səhifə
                                    </Link>
                                </li>
                                <li>
                                    <i className="icon-arrRight" />
                                </li>
                                <li>İstifadə qaydaları</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Terms />
        </>
    );
}