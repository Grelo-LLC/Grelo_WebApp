"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef();
    const [success, setSuccess] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const handleShowMessage = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    const sendMail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_noj8796", "template_fs3xchn", formRef.current, {
                publicKey: "iG4SCmR-YtJagQ4gV",
            })
            .then((res) => {
                if (res.status === 200) {
                    setSuccess(true);
                    handleShowMessage();

                    formRef.current.reset();
                } else {
                    setSuccess(false);
                    handleShowMessage();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section className="flat-spacing pt-0">
            <div className="container">
                <div className="heading-section text-center">
                    <h3 className="heading">Əlaqə</h3>
                    <p className="subheading">
                        Aşağıdakı formanı dolduraraq satış komandası ilə əlaqə saxlayın
                    </p>
                </div>
                <div
                    className={`tfSubscribeMsg footer-sub-element ${showMessage ? "active" : ""
                        }`}
                >
                    {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                            Mesaj uğurla göndərildi
                        </p>
                    ) : (
                        <p style={{ color: "red" }}>Xəta baş verdi</p>
                    )}
                </div>
                <form
                    onSubmit={sendMail}
                    ref={formRef}
                    id="contactform"
                    className="form-leave-comment"
                >
                    <div className="wrap">
                        <div className="cols">
                            <fieldset className="">
                                <input
                                    className=""
                                    type="text"
                                    placeholder="Adınız*"
                                    name="name"
                                    id="name"
                                    tabIndex={2}
                                    defaultValue=""
                                    aria-required="true"
                                    required
                                />
                            </fieldset>
                            <fieldset className="">
                                <input
                                    className=""
                                    type="email"
                                    placeholder="Email ünvanınız*"
                                    name="email"
                                    id="email"
                                    tabIndex={2}
                                    defaultValue=""
                                    aria-required="true"
                                    required
                                />
                            </fieldset>
                            <fieldset className="">
                                <input
                                    className="form-control"
                                    type="file"
                                    name="email"
                                    style={{ height: "47px", padding: "10px" }}
                                    id="email"
                                    tabIndex={2}
                                    defaultValue=""
                                    aria-required="true"
                                    required
                                />
                            </fieldset>
                        </div>
                        <fieldset className="">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                placeholder="Mesajınız*"
                                tabIndex={2}
                                aria-required="true"
                                required
                                defaultValue={""}
                            />
                        </fieldset>
                    </div>
                    <div className="button-submit send-wrap">
                        <button className="tf-btn btn-fill" type="submit">
                            <span className="text text-button">Mesaj göndər</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}