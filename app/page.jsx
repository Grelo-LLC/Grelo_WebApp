import Brands from "@/components/common/Brands";
import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar6 from "@/components/headers/Topbar6";
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
      <Topbar6 />
      <Header11 />
      <Hero />
      <Categories />
      <Products />
      <Features parentClass="flat-spacing-4 line-top-container" />
      <Brands parentClass="flat-spacing-5 line-top" />
      <Footer1 dark />
    </>
  );
}
