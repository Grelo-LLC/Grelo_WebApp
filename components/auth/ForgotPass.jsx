"use client";

import React, { useEffect, useState } from "react";
import AuthImg from "./AuthImg";

export default function ForgotPass() {
    const [isMobile, setIsMobile] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({ email: "" });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!formData.email) {
            newErrors.email = "Email ünvanı vacibdir!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form göndərildi:", formData);
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
                            <h4 className="mb_8">Şifrənizi sıfırlayın</h4>
                            <p>Email ünvanınıza şifrə sıfırlama linki göndəriləcək</p>
                        </div>
                        <form onSubmit={handleSubmit} className="form-login">
                            <div className="wrap">
                                <fieldset>
                                    <input
                                        type="email"
                                        placeholder="İstifadəçi adı və ya email *"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: errors.email ? "#ffdddb" : "",
                                            border: errors.email ? "1px solid red" : "",
                                            "::placeholder": {
                                                color: errors.email ? "red" : "#999",
                                            },
                                        }}
                                        className={`text-black ${errors.email ? "placeholder-red" : ""}`}
                                    />
                                    {errors.email && (
                                        <small className="text-danger">{errors.email}</small>
                                    )}
                                </fieldset>
                            </div>
                            <div className="button-submit">
                                <button className="tf-btn btn-fill" type="submit">
                                    <span className="text text-button">Təsdiqlə</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}