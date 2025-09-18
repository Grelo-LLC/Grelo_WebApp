"use client";

import React, { useEffect, useRef, useState } from "react";
import AuthImg from "./AuthImg";

export default function Otp() {
    const inputsRef = useRef([]);
    const [isMobile, setIsMobile] = useState(false);
    const [errors, setErrors] = useState("");
    const [otp, setOtp] = useState(Array(6).fill(""));

    const handleChange = (e, index) => {
        let value = e.target.value;

        if (!/^[0-9]$/.test(value)) {
            e.target.value = "";
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }

        if (errors) setErrors("");
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (otp.some((digit) => digit === "")) {
            setErrors("Bütün xanaları doldurmaq vacibdir!");
            return;
        }

        console.log("OTP kodu:", otp.join(""));
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
                            <h4 className="mb_8">Email ünvanınızı yoxlayın</h4>
                            <p>Email ünvanınıza göndərilən 6 rəqəmli kodu daxil edin</p>
                        </div>
                        <form onSubmit={handleSubmit} className="form-login">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        ref={(el) => (inputsRef.current[index] = el)}
                                        onChange={(e) => handleChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        placeholder="0"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            textAlign: "center",
                                            fontSize: "20px",
                                            border: errors ? "1px solid red" : "1px solid #ddd",
                                            backgroundColor: errors ? "#ffdddb" : "",
                                            borderRadius: "6px",
                                        }}
                                        className={errors ? "placeholder-red" : ""}
                                    />
                                ))}
                            </div>

                            {errors && <small className="text-danger">{errors}</small>}
                            <div className="button-submit" style={{ marginTop: "15px" }}>
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