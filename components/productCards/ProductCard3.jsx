"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import CountdownTimer from "../common/Countdown";
export default function ProductCard3({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);

  const {
    addToWishlist,
    isAddedtoWishlist,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();

  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);
  return (
    <div
      className={`card-product wow fadeInUp ${
        product.isOnSale ? "on-sale" : ""
      } ${product.sizes ? "card-product-size" : ""}`}
    >
      <div className="card-product-wrapper">
        <Link href={`/product-detail/${product.id}`} className="product-img">
          <Image
            className="lazyload img-product"
            src={currentImage}
            alt={product.title}
            width={600}
            height={800}
          />
          <Image
            className="lazyload img-hover"
            src={product.imgHover}
            alt={product.title}
            width={600}
            height={800}
          />
        </Link>
        {product.isOnSale && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">-{product.salePercentage}</span>
          </div>
        )}
        {product.sizes && (
          <div className="variant-wrap size-list">
            <ul className="variant-box">
              {product.sizes.map((size) => (
                <li key={size} className="size-item">
                  {size}
                </li>
              ))}
            </ul>
          </div>
        )}
        {product.countdown && (
          <div className="variant-wrap countdown-wrap">
            <div className="variant-box">
              <div
                className="js-countdown"
                data-timer={product.countdown}
                data-labels="D :,H :,M :,S"
              >
                <CountdownTimer />
              </div>
            </div>
          </div>
        )}
        <div className="list-product-btn">
          <a
            onClick={() => addToWishlist(product.id)}
            className="box-icon wishlist btn-icon-action"
          >
            <span className="icon icon-heart" />
            <span className="tooltip">
              {isAddedtoWishlist(product.id)
                ? "Already Wishlished"
                : "Wishlist"}
            </span>
          </a>
        </div>
        <div className="list-btn-main">
          <a
            href="#shoppingCart"
            data-bs-toggle="modal"
            className="btn-main-product"
            onClick={() => addProductToCart(product.id)}
          >
            {isAddedToCartProducts(product.id)
              ? "Already Added"
              : "ADD TO CART"}
          </a>
        </div>
      </div>
      <div className="card-product-info">
        <Link href={`/product-detail/${product.id}`} className="title link">
          {product.title}
        </Link>
        <div className="box-rating">
          <ul className="list-star">
            {Array.from({ length: product.rating }).map((_, i) => (
              <li key={i} className="icon icon-star" />
            ))}
          </ul>
          <span className="text-caption-1 text-secondary"> (1.234) </span>
        </div>
        <span className="price">
          {product.oldPrice && (
            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
          )}{" "}
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
