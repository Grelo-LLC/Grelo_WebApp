import Brands from "@/components/common/Brands";
import Footer from "@/components/footers/Footer";
import Link from "next/link";
import Topbar from "@/components/headers/Topbar";
import About from "@/components/otherPages/About";
import React from "react";
import Header from "@/components/headers/Header";
import Features from "@/components/common/Features";

export const metadata = {
  title: "About Us || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function AboutUsPage() {
  return (
    <>
      <Topbar />
      <Header />
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
      <Features parentClass="flat-spacing-4 line-top-container" />
      <Brands parentClass="flat-spacing-5 bg-surface" />
      <Footer dark />
    </>
  );
}
