"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
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
    <>
      {menuItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <li
            key={item.href}
            className={`menu-item ${isActive ? "active" : ""}`}
          >
            <Link href={item.href} className="item-link">
              {item.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}
