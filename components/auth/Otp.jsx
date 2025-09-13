"use client";

import React, { useEffect, useRef, useState } from "react";
import AuthImg from "./AuthImg";

export default function Otp() {
    const inputsRef = useRef([]);
    const [isMobile, setIsMobile] = useState(false);

    const handleChange = (e, index) => {
        let value = e.target.value;

        if (!/^[0-9]$/.test(value)) {
            e.target.value = "";
            return;
        }

        if (value && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
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
                            <h4 className="mb_8">Check your email</h4>
                            <p>Enter the 6-digit code we sent to your email</p>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="form-login">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                    marginBottom: "20px",
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
                                            border: "1px solid #ddd",
                                            borderRadius: "6px",
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="button-submit">
                                <button className="tf-btn btn-fill" type="submit">
                                    <span className="text text-button">Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
