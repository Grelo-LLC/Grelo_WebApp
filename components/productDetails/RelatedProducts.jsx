"use client";
import React from "react";
import { products29 } from "@/data/products";
import ProductCard3 from "../productCards/ProductCard3";

export default function RelatedProducts() {
  return (
    <section className="flat-spacing">
      <div className="container flat-animate-tab">
        <ul
          className="tab-product justify-content-sm-center wow fadeInUp"
          data-wow-delay="0s"
          role="tablist"
        >
          <li className="nav-tab-item" role="presentation">
            <a href="#ralatedProducts" className="active" data-bs-toggle="tab">
              Ralated Products
            </a>
          </li>
        </ul>
        <div className="row">
          {products29.slice(0, 4).map((product, i) => (
            <div className="my-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" key={i}>
              <ProductCard3 product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
