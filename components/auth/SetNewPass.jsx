"use client";

import React, { useEffect, useState } from "react";
import AuthImg from "./AuthImg";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { REQUEST } from "@/config/config";
import { ENDPOINTS } from "@/config/endpoints";

export default function SetNewPass() {
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [isMobile, setIsMobile] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const togglePassword = () => {
        setPasswordType((prev) => (prev === "password" ? "text" : "password"));
    };

    const toggleConfirmPassword = () => {
        setConfirmPasswordType((prev) =>
            prev === "password" ? "text" : "password"
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.password) {
            newErrors.password = "Yeni şifrəni daxil edin!";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Təkrar şifrəni daxil edin!";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Şifrələr uyğun gəlmir!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const email = sessionStorage.getItem("reset_email");
                const otp = sessionStorage.getItem("reset_otp");

                const response = await REQUEST.post(
                    ENDPOINTS.SET_NEW_PASSWORD(),
                    {
                        email,
                        otp,
                        password: formData.password,
                        confirm_password: formData.confirmPassword,
                    }
                );

                if (response.success) {
                    toast.success(response.message, {
                        position: "top-right",
                        autoClose: 1000,
                        theme: "colored",
                        transition: Bounce,
                    });

                    setFormData({ password: "", confirmPassword: "" });

                    sessionStorage.removeItem("reset_email");
                    sessionStorage.removeItem("reset_otp");

                    setTimeout(() => {
                        window.location.href = "/auth/login";
                    }, 1500);

                } else if (response.error) {
                    toast.error(response.error, {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "colored",
                        transition: Bounce,
                    });
                }
            } catch (err) {
                const error = err.response?.data?.error;
                toast.error(error, {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                    transition: Bounce,
                });
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section style={{ display: "flex", minHeight: "100vh" }}>
            {!isMobile && (
                <div style={{ flex: 1, height: "100vh", position: "relative" }}>
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
                <div
                    className="login-wrap"
                    style={{ maxWidth: "400px", width: "100%" }}
                >
                    <div className="left">
                        <div className="heading">
                            <h4 className="mb_8">Yeni şifrə təyin edin</h4>
                            <p>
                                Zəhmət olmasa yeni şifrənizi yazın və təkrar
                                təsdiqləyin
                            </p>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="form-login form-has-password"
                        >
                            <div className="wrap">
                                <fieldset className="position-relative password-item">
                                    <input
                                        className="input-password"
                                        type={passwordType}
                                        placeholder="Yeni şifrə *"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: errors.password
                                                ? "#ffdddb"
                                                : "",
                                            border: errors.password
                                                ? "1px solid red"
                                                : "",
                                        }}
                                    />
                                    <span
                                        className={`toggle-password ${!(passwordType === "text")
                                                ? "unshow"
                                                : ""
                                            }`}
                                        onClick={togglePassword}
                                    >
                                        <i
                                            className={`icon-eye-${!(passwordType === "text")
                                                    ? "hide"
                                                    : "show"
                                                }-line`}
                                        />
                                    </span>
                                    {errors.password && (
                                        <small className="text-danger">
                                            {errors.password}
                                        </small>
                                    )}
                                </fieldset>

                                <fieldset className="position-relative password-item">
                                    <input
                                        className="input-password"
                                        type={confirmPasswordType}
                                        placeholder="Təkrar şifrə *"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor:
                                                errors.confirmPassword
                                                    ? "#ffdddb"
                                                    : "",
                                            border: errors.confirmPassword
                                                ? "1px solid red"
                                                : "",
                                        }}
                                    />
                                    <span
                                        className={`toggle-password ${!(confirmPasswordType === "text")
                                                ? "unshow"
                                                : ""
                                            }`}
                                        onClick={toggleConfirmPassword}
                                    >
                                        <i
                                            className={`icon-eye-${!(confirmPasswordType ===
                                                    "text")
                                                    ? "hide"
                                                    : "show"
                                                }-line`}
                                        />
                                    </span>
                                    {errors.confirmPassword && (
                                        <small className="text-danger">
                                            {errors.confirmPassword}
                                        </small>
                                    )}
                                </fieldset>
                            </div>
                            <div className="button-submit">
                                <button className="tf-btn btn-fill" type="submit">
                                    <span className="text text-button">
                                        Təsdiqlə
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
}