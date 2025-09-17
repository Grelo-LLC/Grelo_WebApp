import Footer from "@/components/footers/Footer";
import Topbar from "@/components/headers/Topbar";
import Contact3 from "@/components/otherPages/Contact3";
import StoreLocations3 from "@/components/otherPages/StoreLocations3";
import React from "react";
import Link from "next/link";
import Header from "@/components/headers/Header";

export const metadata = {
  title: "Əlaqə - Grelo.Az",
  description: "Grelo Agro Saytıdır",
};

export default function ContactPage2() {
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
              <h3 className="heading text-center">Contact Us</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <StoreLocations3 />
      <Contact3 />
      <Footer dark />
    </>
  );
}
