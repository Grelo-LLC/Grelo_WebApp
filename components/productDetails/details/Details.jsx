"use client";

import React, { useState } from "react";
import Slider from "../sliders/Slider";
import { useContextElement } from "@/context/Context";

export default function Details({ product }) {
  const [activeColor, setActiveColor] = useState("gray");
  const [quantity, setQuantity] = useState(1);
  const {
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    cartProducts,
    updateQuantity,
  } = useContextElement();

  const currentQuantity = isAddedToCartProducts(product.id)
    ? cartProducts.find((elm) => elm.id === product.id)?.quantity || 1
    : quantity;

  return (
    <section className="flat-spacing">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <Slider
                  setActiveColor={setActiveColor}
                  activeColor={activeColor}
                  firstItem={product.imgSrc}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative mw-100p-hidden">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <div className="tf-product-info-name">
                      <div className="text text-btn-uppercase">Clothing</div>
                      <h3 className="name">{product.title}</h3>
                      <ul className="tf-product-info-sku">
                        <li>
                          <p className="text-caption-1">SKU:</p>
                          <p className="text-caption-1 text-1">53453412</p>
                        </li>
                        <li>
                          <p className="text-caption-1">Vendor:</p>
                          <p className="text-caption-1 text-1">Modave</p>
                        </li>
                        <li>
                          <p className="text-caption-1">Available:</p>
                          <p className="text-caption-1 text-1">Instock</p>
                        </li>
                        <li>
                          <p className="text-caption-1">Categories:</p>
                          <p className="text-caption-1">
                            <a href="#" className="text-1 link">
                              Clothes
                            </a>
                            ,
                            <a href="#" className="text-1 link">
                              women
                            </a>
                            ,
                            <a href="#" className="text-1 link">
                              T-shirt
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="text-caption-1">Reytinq:</p>
                          <div className="tf-product-info-rate">
                            <div className="list-star">
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Qiymət */}
                    <div className="tf-product-info-desc">
                      <div className="tf-product-info-price">
                        <h5 className="price-on-sale font-2">
                          ${product.price.toFixed(2)}
                        </h5>
                        {product.oldPrice && (
                          <>
                            <div className="compare-at-price font-2">
                              ${product.oldPrice.toFixed(2)}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="tf-product-info-choose-option">
                    <div className="tf-product-info-quantity">
                      <div className="title mb_12">Quantity:</div>
                      <div className="wg-quantity">
                        <span
                          className="btn-quantity btn-decrease"
                          onClick={() => {
                            if (isAddedToCartProducts(product.id)) {
                              updateQuantity(
                                product.id,
                                currentQuantity > 1 ? currentQuantity - 1 : 1
                              );
                            } else {
                              setQuantity(
                                currentQuantity > 1 ? currentQuantity - 1 : 1
                              );
                            }
                          }}
                          role="button"
                          tabIndex={0}
                        >
                          -
                        </span>
                        <input
                          className="quantity-product"
                          type="number"
                          name="number"
                          value={currentQuantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            if (!isNaN(value) && value > 0) {
                              if (isAddedToCartProducts(product.id)) {
                                updateQuantity(product.id, value);
                              } else {
                                setQuantity(value);
                              }
                            }
                          }}
                        />
                        <span
                          className="btn-quantity btn-increase"
                          onClick={() => {
                            if (isAddedToCartProducts(product.id)) {
                              updateQuantity(product.id, currentQuantity + 1);
                            } else {
                              setQuantity(currentQuantity + 1);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                        >
                          +
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="tf-product-info-by-btn mb_10">
                        <a
                          onClick={() =>
                            addProductToCart(product.id, currentQuantity)
                          }
                          className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 btn-add-to-cart"
                        >
                          <span>
                            {isAddedToCartProducts(product.id)
                              ? "Already Added"
                              : "Add to cart -"}
                          </span>
                          <span className="tf-qty-price total-price">
                            $
                            {isAddedToCartProducts(product.id)
                              ? (
                                product.price *
                                cartProducts.find(
                                  (elm) => elm.id === product.id
                                )?.quantity
                              ).toFixed(2)
                              : (product.price * currentQuantity).toFixed(2)}
                          </span>
                        </a>
                        <a
                          onClick={() => addToWishlist(product.id)}
                          className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                        >
                          <span className="icon icon-heart" />
                          <span className="tooltip text-caption-2">
                            {isAddedtoWishlist(product.id)
                              ? "Already Wishlished"
                              : "Wishlist"}
                          </span>
                        </a>
                      </div>
                      <a href="#" className="btn-style-3 text-btn-uppercase">
                        Buy it now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
