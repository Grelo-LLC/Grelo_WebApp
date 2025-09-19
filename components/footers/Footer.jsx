"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ToolbarBottom from "../headers/ToolbarBottom";
import ScrollTop from "../common/ScrollTop";
import { GreloContext } from "@/context/GreloContext";

const socialLinks = [
    { href: "#", className: "social-facebook", iconClass: "icon-fb" },
    { href: "#", className: "social-instagram", iconClass: "icon-instagram" },
    { href: "#", className: "social-tiktok", iconClass: "icon-tiktok" },
];

const footerLinks = [
    {
        heading: "Müştəri Xidmətləri",
        items: [
            { label: "İstifadə Qaydaları", href: "/page/term-of-use", isLink: false },
            { label: "Tez-tez Soruşulan Suallar", href: "/page/FAQs", isLink: true },
        ],
    },
    {
        heading: "Şirkət",
        items: [
            { label: "Haqqımızda", href: "/page/about", isLink: true },
            { label: "Bizimlə Əlaqə", href: "/page/contact", isLink: true },
        ],
    },
];

export default function Footer({ border = true, dark = false, hasPaddingBottom = false }) {
    const { info } = useContext(GreloContext);

    return (
        <>
            <footer
                id="footer"
                className={`footer ${dark ? "bg-main" : ""} ${hasPaddingBottom ? "has-pb" : ""
                    } `}>
                <div className={`footer-wrap ${!border ? "border-0" : ""}`}>
                    <div className="footer-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="footer-infor">
                                        <div className="footer-logo">
                                            <Link href={`/`}>
                                                {info?.footer_img && (
                                                    <Image
                                                        alt="Grelo Logo"
                                                        src={info.footer_img}
                                                        width={127}
                                                        height={24}
                                                        priority
                                                    />
                                                )}
                                            </Link>
                                        </div>
                                        <ul className="footer-info">
                                            <li className="mb-2">
                                                <p>{info?.address}</p>
                                            </li>
                                            <li className="mb-2">
                                                <i className="icon-mail" />
                                                <p>{info?.email}</p>
                                            </li>
                                            <li className="mb-2">
                                                <i className="icon-phone" />
                                                <p>{info?.phone}</p>
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