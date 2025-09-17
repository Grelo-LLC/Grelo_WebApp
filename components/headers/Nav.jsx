"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Ana Səhifə" },
    { href: "/store/products", label: "Mağaza" },
    { href: "/page/about", label: "Haqqımızda" },
    { href: "/page/faqs", label: "Tez-tez verilən suallar" },
    { href: "/page/term-of-use", label: "İstifadə qaydaları" },
    { href: "/page/contact", label: "Əlaqə" },
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
