import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Topbar from "@/components/headers/Topbar";
import Products11 from "@/components/products/Products11";

import Link from "next/link";
import React from "react";

export default function ShopLeftSidebarPage() {
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
              <h3 className="heading text-center">Women</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Women</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Products11 />
      <Footer dark />
    </>
  );
}
