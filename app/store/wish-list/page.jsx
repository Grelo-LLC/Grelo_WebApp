import Wishlist from "@/components/otherPages/Wishlist";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "İstək səbəti - Grelo.Az",
    description: "Grelo Agro Saytıdır",
};

export default function WishListPage() {
    return (
        <>
            <div className="page-title">
                <div className="container">
                    <h3 className="heading text-center">Your Wishlist</h3>
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
                        <li>Wishlist</li>
                    </ul>
                </div>
            </div>

            <Wishlist />

        </>
    );
}