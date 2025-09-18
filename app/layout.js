"use client";

import { usePathname } from "next/navigation";
import "../public/scss/main.scss";
import "photoswipe/style.css";
import "react-range-slider-input/dist/style.css";
import "../public/css/image-compare-viewer.min.css";
import { useEffect, useState } from "react";
import Context from "@/context/Context";
import MobileMenu from "@/components/modals/MobileMenu";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;

      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lastScrollY = { current: window.scrollY };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
      } else {
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const bootstrap = require("bootstrap");
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) modalInstance.hide();
    });

    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) offcanvasInstance.hide();
    });
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    if (scrollDirection === "up") {
      header.style.top = "0px";
    } else {
      header.style.top = "-185px";
    }
  }, [scrollDirection]);

  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  return (
    <html lang="en">
      <body className="preload-wrapper popup-loader" cz-shortcut-listen="true">
        <Context>
          <div id="wrapper">
            {children}
          </div>
          <MobileMenu />
        </Context>
      </body>
    </html>
  );
}