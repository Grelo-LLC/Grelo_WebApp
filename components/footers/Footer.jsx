"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import ToolbarBottom from "../headers/ToolbarBottom";
import ScrollTop from "../common/ScrollTop";
import { footerLinks, socialLinks } from "@/data/footerLinks";
import axios from "axios";

export default function Footer({
  border = true,
  dark = false,
  hasPaddingBottom = false,
}) {

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset();
        setSuccess(true);
        handleShowMessage();
      } else {
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false);
      handleShowMessage();
      e.target.reset();
    }
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });


    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []);
  return (
    <>
      <footer
        id="footer"
        className={`footer ${dark ? "bg-main" : ""} ${hasPaddingBottom ? "has-pb" : ""
          } `}
      >
        <div className={`footer-wrap ${!border ? "border-0" : ""}`}>
          <div className="footer-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="footer-infor">
                    <div className="footer-logo">
                      <Link href={`/`}>
                        <Image
                          alt=""
                          src={
                            dark
                              ? "/images/logo/logo-white.svg"
                              : "/images/logo/logo.svg"
                          }
                          width={127}
                          height={24}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </Link>
                    </div>
                    <ul className="footer-info">
                      <li className="mb-2">
                        <p>549 Oak St.Crystal Lake, IL 60014</p>
                      </li>
                      <li className="mb-2">
                        <i className="icon-mail" />
                        <p>themesflat@gmail.com</p>
                      </li>
                      <li className="mb-2">
                        <i className="icon-phone" />
                        <p>315-666-6688</p>
                      </li>
                    </ul>
                    <ul
                      className={`tf-social-icon  ${dark ? "style-white" : ""
                        } `}
                    >
                      {socialLinks.map((link, index) => (
                        <li key={index} className="me-1">
                          <a href={link.href} className={link.className}>
                            <i className={`icon ${link.iconClass}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="footer-menu">
                    {footerLinks.map((section, sectionIndex) => (
                      <div className="footer-col-block" key={sectionIndex}>
                        <div className="footer-heading text-button footer-heading-mobile">
                          {section.heading}
                        </div>
                        <div className="tf-collapse-content">
                          <ul className="footer-menu-list">
                            {section.items.map((item, itemIndex) => (
                              <li className="text-caption-1" key={itemIndex}>
                                {item.isLink ? (
                                  <Link
                                    href={item.href}
                                    className="footer-menu_item hover:text-white"
                                  >
                                    {item.label}
                                  </Link>
                                ) : (
                                  <a
                                    href={item.href}
                                    className="footer-menu_item"
                                  >
                                    {item.label}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-bottom-wrap flex align-items-center justify-content-center">
                    <div className="left">
                      <p className="text-caption-1">
                        {new Date().getFullYear()} ©  Grelo. Bütün hüquqlar qorunur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop hasPaddingBottom={hasPaddingBottom} />
      <ToolbarBottom />
    </>
  );
}
