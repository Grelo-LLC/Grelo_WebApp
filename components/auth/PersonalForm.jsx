"use client";

import Link from "next/link";
import { useState } from "react";

export default function PersonalForm() {
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [errors, setErrors] = useState({});

    const togglePassword = () => {
        setPasswordType((prev) => (prev === "password" ? "text" : "password"));
    };

    const toggleConfirmPassword = () => {
        setConfirmPasswordType((prev) =>
            prev === "password" ? "text" : "password"
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let newErrors = {};

        if (!formData.get("fullname")) {
            newErrors.fullname = "Ad və Soyad vacibdir!";
        }
        if (!formData.get("email")) {
            newErrors.email = "Email vacibdir!";
        }
        if (!formData.get("password")) {
            newErrors.password = "Şifrə vacibdir!";
        }
        if (!formData.get("confirmPassword")) {
            newErrors.confirmPassword = "Şifrəni təkrar daxil edin!";
        } else if (formData.get("password") !== formData.get("confirmPassword")) {
            newErrors.confirmPassword = "Şifrələr uyğun gəlmir!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form uğurla göndərildi ✅");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-login form-has-password">
            <fieldset>
                <input
                    type="text"
                    className="my-2 text-black"
                    placeholder="Ad və Soyad *"
                    name="fullname"
                    style={{ backgroundColor: errors.fullname ? "#ffdddb" : "", border: errors.fullname ? "1px solid red" : "" }}
                />
                {errors.fullname && (
                    <small className="text-danger">{errors.fullname}</small>
                )}
            </fieldset>

            <fieldset>
                <input
                    type="email"
                    className="my-2"
                    placeholder="Email ünvanı *"
                    name="email"
                    style={{ backgroundColor: errors.email ? "#ffdddb" : "", border: errors.email ? "1px solid red" : "" }}
                />
                {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                )}
            </fieldset>

            <fieldset className="position-relative password-item">
                <input
                    className="my-2"
                    type={passwordType}
                    placeholder="Şifrə *"
                    name="password"
                    style={{ backgroundColor: errors.password ? "#ffdddb" : "", border: errors.password ? "1px solid red" : "" }}
                />
                <span
                    className={`toggle-password ${!(passwordType === "text") ? "unshow" : ""
                        }`}
                    onClick={togglePassword}
                >
                    <i
                        className={`icon-eye-${!(passwordType === "text") ? "hide" : "show"
                            }-line`}
                    />
                </span>
                {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                )}
            </fieldset>

            <fieldset className="position-relative password-item">
                <input
                    className="my-2"
                    type={confirmPasswordType}
                    placeholder="Şifrəni təkrarla *"
                    name="confirmPassword"
                    style={{ backgroundColor: errors.confirmPassword ? "#ffdddb" : "", border: errors.confirmPassword ? "1px solid red" : "" }}
                />
                <span
                    className={`toggle-password ${!(confirmPasswordType === "text") ? "unshow" : ""
                        }`}
                    onClick={toggleConfirmPassword}
                >
                    <i
                        className={`icon-eye-${!(confirmPasswordType === "text") ? "hide" : "show"
                            }-line`}
                    />
                </span>
                {errors.confirmPassword && (
                    <small className="text-danger">{errors.confirmPassword}</small>
                )}
            </fieldset>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="tf-cart-checkbox">
                    <label htmlFor="login-form_agree"> Qeydiyyatdan keçmisiniz? </label>
                </div>
                <Link
                    href={`/auth/login`}
                    className="font-2 text-button forget-password link"
                >
                    Giriş edin
                </Link>
            </div>

            <div className="button-submit mt-3">
                <button className="tf-btn btn-fill" type="submit">
                    <span className="text text-button">Qeydiyyatdan Keç</span>
                </button>
            </div>
        </form>
    );
}
