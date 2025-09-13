"use client";

import React, { useEffect, useState } from "react";
import AuthImg from "./AuthImg";

export default function ForgotPass() {
  const [isMobile, setIsMobile] = useState(false);

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
              <h4 className="mb_8">Reset your password</h4>
              <p>We will send you an email to reset your password</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="form-login">
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
