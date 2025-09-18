"use client";

import { useEffect, useState } from "react";
import AuthImg from "./AuthImg";
import PersonalForm from "./PersonalForm";
import BusinessForm from "./BusinessForm";

export default function Register() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState("personal");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
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
                                <h4>Qeydiyyat</h4>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    marginBottom: "20px",
                                }}
                            >
                                <button
                                    onClick={() => setActiveTab("personal")}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        border: "none",
                                        background:
                                            activeTab === "personal" ? "#181818" : "transparent",
                                        color: activeTab === "personal" ? "#fff" : "#333",
                                        cursor: "pointer",
                                        fontWeight: activeTab === "personal" ? "bold" : "normal",
                                        justifyContent: "center"
                                    }}
                                >
                                    Fərdi
                                </button>
                                <button
                                    onClick={() => setActiveTab("business")}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        border: "none",
                                        background:
                                            activeTab === "business" ? "#181818" : "transparent",
                                        color: activeTab === "business" ? "#fff" : "#333",
                                        cursor: "pointer",
                                        fontWeight: activeTab === "business" ? "bold" : "normal",
                                        justifyContent: "center"
                                    }}
                                >
                                    Biznes
                                </button>
                            </div>

                            {activeTab === "personal" ? <PersonalForm /> : <BusinessForm />}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}