"use client";

import React, { useEffect, useState } from "react";
import AuthImg from "./AuthImg";

export default function SetNewPass() {
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [isMobile, setIsMobile] = useState(false);

    const togglePassword = () => {
        setPasswordType((prevType) =>
            prevType === "password" ? "text" : "password"
        );
    };

    const toggleConfirmPassword = () => {
        setConfirmPasswordType((prevType) =>
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
                            <h4 className="mb_8">Set new password</h4>
                            <p>Write password with confirm password</p>
                        </div>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="form-login form-has-password"
                        >
                            <div className="wrap">
                                <fieldset className="position-relative password-item">
                                    <input
                                        className="input-password"
                                        type={passwordType}
                                        placeholder="New Password*"
                                        name="password"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required
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
                                </fieldset>

                                <fieldset className="position-relative password-item">
                                    <input
                                        className="input-password"
                                        type={confirmPasswordType}
                                        placeholder="Confirm Password*"
                                        name="confirmPassword"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required
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
                                </fieldset>
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