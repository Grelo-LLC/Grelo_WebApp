"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
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
