import Brands from "@/components/common/Brands";
import Features from "@/components/common/Features";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Topbar from "@/components/headers/Topbar";
import Categories from "@/components/homes/Categories";
import Hero from "@/components/homes/Hero";
import Products from "@/components/homes/Products";
import React from "react";

export const metadata = {
  title:
    "Home Electronics || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function HomeElectronicPage() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Categories />
      <Products />
      <Features parentClass="flat-spacing-4 line-top-container" />
      <Brands parentClass="flat-spacing-5 line-top" />
      <Footer dark />
    </>
  );
}
