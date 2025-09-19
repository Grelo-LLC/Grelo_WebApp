"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Reviews() {
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let newErrors = {};

        if (!formData.get("name")) {
            newErrors.name = "Ad və Soyad vacibdir!";
        }
        if (!formData.get("review")) {
            newErrors.review = "Rəy vacibdir!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Rəyiniz uğurla göndərildi ✅");
            e.target.reset();
        }
    };

    return (
        <>
            <div className="tab-reviews-heading"></div>
            <div className="reply-comment style-1 cancel-review-wrap">
                <div className="reply-comment-wrap">
                    <div className="reply-comment-item">
                        <div className="user">
                            <div className="image">
                                <Image
                                    alt=""
                                    src="/images/avatar/user-default.jpg"
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div>
                                <h6>
                                    <a href="#" className="link">
                                        John Doe
                                    </a>
                                    <div className="tf-product-info-rate">
                                        <div className="list-star">
                                            <i className="icon icon-star" />
                                            <i className="icon icon-star" />
                                            <i className="icon icon-star" />
                                            <i className="icon icon-star" />
                                            <i className="icon icon-star" />
                                        </div>
                                    </div>
                                </h6>
                            </div>
                        </div>
                        <p className="text-secondary">
                            Great theme - we were looking for a theme with lots of built in
                            features and flexibility and this was perfect...
                        </p>
                    </div>
                </div>
            </div>

            {/* Review Form */}
            <div className="review-form mt-4">
                <h5 className="mb-3">Leave a Review</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            style={{
                                border: errors.name ? "2px solid red" : "",
                                backgroundColor: errors.name ? "#ffe6e6" : "",
                            }}
                        />
                        {errors.name && (
                            <small className="text-danger">{errors.name}</small>
                        )}
                    </div>

                    <div className="mb-3">
                        <textarea
                            name="review"
                            className="form-control"
                            rows="4"
                            placeholder="Write your review..."
                            style={{
                                border: errors.review ? "2px solid red" : "",
                                backgroundColor: errors.review ? "#ffe6e6" : "",
                            }}
                        ></textarea>
                        {errors.review && (
                            <small className="text-danger">{errors.review}</small>
                        )}
                    </div>

                    <button type="submit" className="btn-style-2 text-btn-uppercase">
                        Submit Review
                    </button>
                </form>
            </div>
        </>
    );
}