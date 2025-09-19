"use client";

import ProductCard from "@/components/productCards/ProductCard";
import { products29 } from "@/data/products";
import { useEffect, useState } from "react";

const tabItems = ["All Products", "Smart Phone", "Electronic", "Audio"];

export default function Products() {
    const [activeItem, setActiveItem] = useState(tabItems[0]);
    const [selectedItems, setSelectedItems] = useState(products29);

    useEffect(() => {
        if (activeItem === "All Products") {
            setSelectedItems(products29);
        } else {
            setSelectedItems(
                products29.filter((product) =>
                    product.tabFilterOptions?.includes(activeItem)
                )
            );
        }
    }, [activeItem]);

    const [isLg, setIsLg] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLg(window.innerWidth >= 1200);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="flat-spacing-4 pt-0">
            <div className="container">
                <div className="heading-section-2 wow fadeInUp">
                    <h4>Deal of the day</h4>
                    <ul
                        className="tab-product-v3 justify-content-sm-center mw-100p-scroll"
                        role="tablist"
                    >
                        {tabItems.map((item) => (
                            <li key={item} className="nav-tab-item" role="presentation">
                                <a
                                    href="#"
                                    className={`text-caption-1 ${activeItem === item ? "active" : ""
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveItem(item);
                                    }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="row">
                    {selectedItems.length > 0 ? (
                        selectedItems.map((product, index) => (
                            <div
                                key={index}
                                className="col-md-4 col-sm-6 col-xs-12 my-3"
                                style={
                                    isLg
                                        ? { flex: "0 0 20%", maxWidth: "20%" }
                                        : {}
                                }
                            >
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center mt-4">No products found.</p>
                    )}
                </div>
            </div>
        </section>
    );
}