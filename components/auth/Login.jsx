"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AuthImg from "./AuthImg";

export default function Login() {
    const [passwordType, setPasswordType] = useState("password");
    const [isMobile, setIsMobile] = useState(false);
    const [errors, setErrors] = useState({});

    const togglePassword = () => {
        setPasswordType((prevType) =>
            prevType === "password" ? "text" : "password"
        );
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let newErrors = {};

        if (!formData.get("email")) {
            newErrors.email = "Email vacibdir!";
        }
        if (!formData.get("password")) {
            newErrors.password = "Şifrə vacibdir!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Giriş uğurla edildi ✅");
        }
    };

    return (
        <section style={{ display: "flex", minHeight: "100vh" }}>
            {!isMobile && (
                <div
                    style={{
                        flex: 1,
                        height: "100vh",
                        position: "relative",
                    }}
                >
                    <AuthImg />
                </div>
            )}

            <div
                style={{
                    flex: 1,
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "40px",
                    width: isMobile ? "100%" : "50%",
                    margin: "0 auto",
                }}
            >
                <div className="login-wrap" style={{ maxWidth: "400px", width: "100%" }}>
                    <div className="left">
                        <div className="heading">
                            <h4>Giriş</h4>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="form-login form-has-password"
                        >
                            <div className="wrap">
                                <fieldset>
                                    <input
                                        className="text-black"
                                        type="email"
                                        placeholder="Email *"
                                        name="email"
                                        style={{
                                            backgroundColor: errors.email ? "#ffdddb" : "",
                                            border: errors.email ? "1px solid red" : "",
                                        }}
                                    />
                                    {errors.email && (
                                        <small className="text-danger">{errors.email}</small>
                                    )}
                                </fieldset>

                                <fieldset className="position-relative password-item">
                                    <input
                                        className="text-black"
                                        type={passwordType}
                                        placeholder="Şifrə *"
                                        name="password"
                                        style={{
                                            backgroundColor: errors.password ? "#ffdddb" : "",
                                            border: errors.password ? "1px solid red" : "",
                                        }}
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

                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="tf-cart-checkbox">
                                        <div className="tf-checkbox-wrapp">
                                            <input
                                                defaultChecked
                                                className=""
                                                type="checkbox"
                                                id="login-form_agree"
                                                name="agree_checkbox"
                                            />
                                            <div>
                                                <i className="icon-check" />
                                            </div>
                                        </div>
                                        <label htmlFor="login-form_agree"> Xatırla </label>
                                    </div>
                                    <Link
                                        href={`/auth/forget-password`}
                                        className="font-2 text-button forget-password link"
                                    >
                                        Şifrəmi unutdum?
                                    </Link>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="tf-cart-checkbox">
                                    <label htmlFor="login-form_agree"> Hesabınız yoxdur? </label>
                                </div>
                                <Link
                                    href={`/auth/register`}
                                    className="font-2 text-button forget-password link"
                                >
                                    Qeydiyyat
                                </Link>
                            </div>

                            <div className="button-submit">
                                <button className="tf-btn btn-fill" type="submit">
                                    <span className="text text-button">Giriş edin</span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}