"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelect from "../common/LanguageSelect";

export default function MobileMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/store/products", label: "Shop" },
    { href: "/page/about", label: "About Us" },
    { href: "/page/faqs", label: "FAQs" },
    { href: "/page/term-of-use", label: "Terms Of Use" },
    { href: "/page/contact", label: "Contact Us" },
  ];

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              {menuItems.map((item) => (
                <li key={item.href} className="nav-mb-item">
                  <Link
                    href={item.href}
                    className={`mb-menu-link ${pathname.startsWith(item.href) ? "active" : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-other-content">
            <div className="group-icon">
              <Link href={`/store/wish-list`} className="site-nav-icon">
                ❤️ Wishlist
              </Link>
              <Link href={`/auth/login`} className="site-nav-icon">
                👤 Login
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-bottom">
          <div className="bottom-bar-language">
            <div className="tf-languages">
              <LanguageSelect parentClassName="image-select center style-default type-languages" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
