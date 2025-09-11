"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelect from "../common/LanguageSelect";

export default function MobileMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/shop-left-sidebar", label: "Shop" },
    { href: "/product-detail/1", label: "Products" },
    { href: "/about-us", label: "About Us" },
    { href: "/FAQs", label: "FAQs" },
    { href: "/term-of-use", label: "Terms Of Use" },
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

              <li className="nav-mb-item">
                <a
                  href="https://themeforest.net/user/themesflat"
                  className="mb-menu-link"
                >
                  Buy Theme
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-other-content">
            <div className="group-icon">
              <Link href={`/wish-list`} className="site-nav-icon">
                ❤️ Wishlist
              </Link>
              <Link href={`/login`} className="site-nav-icon">
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
