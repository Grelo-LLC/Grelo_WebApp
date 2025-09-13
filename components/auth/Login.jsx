"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AuthImg from "./AuthImg";

export default function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [isMobile, setIsMobile] = useState(false);

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
              <h4>Login</h4>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="form-login form-has-password"
            >
              <div className="wrap">
                <fieldset className="">
                  <input
                    className=""
                    type="email"
                    placeholder="Username or email address*"
                    name="email"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="position-relative password-item">
                  <input
                    className="input-password"
                    type={passwordType}
                    placeholder="Password*"
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
                    <label htmlFor="login-form_agree"> Remember me </label>
                  </div>
                  <Link
                    href={`/forget-password`}
                    className="font-2 text-button forget-password link"
                  >
                    Forgot Your Password?
                  </Link>
                </div>
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