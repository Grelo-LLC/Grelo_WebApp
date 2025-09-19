import Products from "@/components/products/Products";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Mağaza - Grelo.Az",
    description: "Grelo Agro Saytıdır",
};

export default function ShopLeftSidebarPage() {
    return (
        <>
            <div className="page-title">
                <div className="container-full">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="heading text-center">Store Products</h3>
                            <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                                <li>
                                    <Link className="link" href={`/`}>
                                        Homepage
                                    </Link>
                                </li>
                                <li>
                                    <i className="icon-arrRight" />
                                </li>
                                <li>Store Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <Products />
        </>
    );
}