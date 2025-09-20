"use client";

import Link from "next/link";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { REQUEST } from "@/config/config";
import { ENDPOINTS } from "@/config/endpoints";

const valid = [
    "ən azı 1 rəqəm olmalıdır (0 - 9)",
    "ən azı 1 kiçik hərf olmalıdır (a - z)",
    "ən azı 1 böyük hərf olmalıdır (A - Z)",
    "ən azı 8 simvol olmalıdır"
]

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        let newErrors = {};

        if (!form.get("fullname")) {
            newErrors.fullname = "Ad və Soyad vacibdir!";
        }
        if (!form.get("email")) {
            newErrors.email = "Email vacibdir!";
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
                user_type: "individual",
                full_name: form.get("fullname"),
                email: form.get("email"),
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
                    autoClose: 2000,
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
                    toast.error(errorData.alert, {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored",
                        transition: Bounce,
                    });
                } else {
                    toast.error("Qeydiyyat zamanı xəta baş verdi!", {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
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
                    placeholder="Ad və Soyad *"
                    name="fullname"
                    style={{
                        backgroundColor: errors.fullname ? "#ffdddb" : "",
                        border: errors.fullname ? "1px solid red" : "",
                    }}
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
                    className="my-2"
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
                        style={{ fontSize: "13px", listStyleType: "disc", margin: "0 10px" }}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <fieldset className="position-relative password-item">
                <input
                    className="my-2"
                    type={confirmPasswordType}
                    placeholder="Şifrəni təkrarla *"
                    name="confirmPassword"
                    style={{
                        backgroundColor: errors.confirmPassword
                            ? "#ffdddb"
                            : "",
                        border: errors.confirmPassword
                            ? "1px solid red"
                            : "",
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
                    <label htmlFor="login-form_agree">
                        {" "}
                        Qeydiyyatdan keçmisiniz?{" "}
                    </label>
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