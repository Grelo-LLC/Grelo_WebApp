"use client";

import { REQUEST } from "@/config/config";
import { ENDPOINTS } from "@/config/endpoints";
import Link from "next/link";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const valid = [
    "ən azı 1 rəqəm olmalıdır (0 - 9)",
    "ən azı 1 kiçik hərf olmalıdır (a - z)",
    "ən azı 1 böyük hərf olmalıdır (A - Z)",
    "ən azı 8 simvol olmalıdır",
];

export default function BusinessForm() {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        let newErrors = {};

        if (!form.get("businessName")) {
            newErrors.businessName = "Biznes adı vacibdir!";
        }
        if (!form.get("businessEmail")) {
            newErrors.businessEmail = "Email vacibdir!";
        }
        if (!form.get("taxId")) {
            newErrors.taxId = "VÖEN vacibdir!";
        }
        if (!form.get("password")) {
            newErrors.password = "Şifrə vacibdir!";
        }
        if (!form.get("confirmPassword")) {
            newErrors.confirmPassword = "Şifrəni təkrar daxil edin!";
        } else if (form.get("password") !== form.get("confirmPassword")) {
            newErrors.confirmPassword = "Şifrələr uyğun gəlmir!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const formData = {
                user_type: "business",
                business_name: form.get("businessName"),
                email: form.get("businessEmail"),
                tax_id: form.get("taxId"),
                password: form.get("password"),
                confirm_password: form.get("confirmPassword"),
            };

            try {
                const response = await REQUEST.post(
                    ENDPOINTS.REGISTER(),
                    formData
                );

                toast.success("Qeydiyyat uğurla tamamlandı ✅", {
                    position: "top-right",
                    autoClose: 100,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "colored",
                    transition: Bounce,
                });

                console.log("Success:", response.data);

                e.target.reset();
                setErrors({});
            }
            catch (error) {
                const errorData = error.response?.data || {};

                if (errorData.alert) {
                    if (errorData.alert.includes("email") && errorData.alert.includes("VÖEN")) {
                        toast.error("Bu email və VÖEN artıq mövcuddur!", {
                            position: "top-right",
                            autoClose: 3000,
                            theme: "colored",
                            transition: Bounce,
                        });
                    } else if (errorData.alert.includes("email")) {
                        toast.error("Bu email artıq mövcuddur!", {
                            position: "top-right",
                            autoClose: 3000,
                            theme: "colored",
                            transition: Bounce,
                        });
                    } else if (errorData.alert.includes("VÖEN")) {
                        toast.error("Bu VÖEN artıq mövcuddur!", {
                            position: "top-right",
                            autoClose: 3000,
                            theme: "colored",
                            transition: Bounce,
                        });
                    } else {
                        toast.error(errorData.alert, {
                            position: "top-right",
                            autoClose: 3000,
                            theme: "colored",
                            transition: Bounce,
                        });
                    }
                } else {
                    toast.error("Qeydiyyat zamanı xəta baş verdi!", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "colored",
                        transition: Bounce,
                    });
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-login form-has-password">
            <fieldset>
                <input
                    type="text"
                    className="my-2 text-black"
                    placeholder="Biznes Adı *"
                    name="businessName"
                    style={{
                        backgroundColor: errors.businessName ? "#ffdddb" : "",
                        border: errors.businessName ? "1px solid red" : "",
                    }}
                />
                {errors.businessName && (
                    <small className="text-danger">{errors.businessName}</small>
                )}
            </fieldset>

            <fieldset>
                <input
                    type="email"
                    className="my-2 text-black"
                    placeholder="Biznes Email *"
                    name="businessEmail"
                    style={{
                        backgroundColor: errors.businessEmail ? "#ffdddb" : "",
                        border: errors.businessEmail ? "1px solid red" : "",
                    }}
                />
                {errors.businessEmail && (
                    <small className="text-danger">{errors.businessEmail}</small>
                )}
            </fieldset>

            <fieldset>
                <input
                    type="text"
                    className="my-2 text-black"
                    placeholder="VÖEN *"
                    name="taxId"
                    style={{
                        backgroundColor: errors.taxId ? "#ffdddb" : "",
                        border: errors.taxId ? "1px solid red" : "",
                    }}
                />
                {errors.taxId && (
                    <small className="text-danger">{errors.taxId}</small>
                )}
            </fieldset>

            <fieldset className="position-relative password-item">
                <input
                    className="my-2 text-black"
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

            <ul style={{ listStyleType: "disc", margin: "0 10px" }}>
                {valid.map((item, index) => (
                    <li
                        key={index}
                        className="fw-bolder"
                        style={{
                            fontSize: "13px",
                            listStyleType: "disc",
                            margin: "0 10px",
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <fieldset className="position-relative password-item">
                <input
                    className="my-2 text-black"
                    type={confirmPasswordType}
                    placeholder="Şifrəni Təkrarla *"
                    name="confirmPassword"
                    style={{
                        backgroundColor: errors.confirmPassword ? "#ffdddb" : "",
                        border: errors.confirmPassword ? "1px solid red" : "",
                    }}
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
                    <small className="text-danger">
                        {errors.confirmPassword}
                    </small>
                )}
            </fieldset>

            <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="tf-cart-checkbox">
                    <label> Qeydiyyatdan keçmisiniz? </label>
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

            <ToastContainer />
        </form>
    );
}