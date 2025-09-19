import ShopCart from "@/components/otherPages/ShopCart";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Alış-veriş Səbəti - Grelo.Az",
    description: "Grelo Agro Saytıdır",
};

export default function ShopingCartPage() {
    return (
        <>
            <div className="page-title">
                <div className="container">
                    <h3 className="heading text-center">Shopping Cart</h3>
                    <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                        <li>
                            <Link className="link" href={`/`}>
                                Homepage
                            </Link>
                        </li>
                        <li>
                            <i className="icon-arrRight" />
                        </li>
                        <li>
                            <Link className="link" href={`/shop-default-grid`}>
                                Shop
                            </Link>
                        </li>
                        <li>
                            <i className="icon-arrRight" />
                        </li>
                        <li>Shopping Cart</li>
                    </ul>
                </div>
            </div>

            <ShopCart />
        </>
    );
}