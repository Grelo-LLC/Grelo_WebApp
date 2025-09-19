import Faqs from "@/components/otherPages/Faqs";
import React from "react";
import Link from "next/link";

export const metadata = {
    title: "Tez-tez verilən suallar - Grelo.Az",
    description: "Grelo Agro Saytıdır",
};

export default function FAQSPage() {
    return (
        <>
            <div className="page-title">
                <div className="container-full">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="heading text-center">Tez-tez verilən suallar</h3>
                            <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                                <li>
                                    <Link className="link" href={`/`}>
                                        Ana Səhifə
                                    </Link>
                                </li>
                                <li>
                                    <i className="icon-arrRight" />
                                </li>
                                <li>Tez-tez verilən suallar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Faqs />
        </>
    );
}