import Brands from "@/components/common/Brands";
import Features2 from "@/components/common/Features2";
import Footer1 from "@/components/footers/Footer1";
import Link from "next/link";
import Topbar6 from "@/components/headers/Topbar6";
import About from "@/components/otherPages/About";
import React from "react";
import Header11 from "@/components/headers/Header11";

export const metadata = {
  title: "About Us || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function AboutUsPage() {
  return (
    <>
      <Topbar6 />
      <Header11 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">About Our Store</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>
                  <a className="link" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>About Our Store</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Features2 parentClass="flat-spacing line-bottom-container" />
      <Brands parentClass="flat-spacing-5 bg-surface" />
      <Footer1 dark />
    </>
  );
}
