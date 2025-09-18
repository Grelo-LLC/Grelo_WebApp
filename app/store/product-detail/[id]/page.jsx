import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Topbar from "@/components/headers/Topbar";
import Breadcumb from "@/components/productDetails/Breadcumb";
import Info from "@/components/productDetails/descriptions/Info";
import Details from "@/components/productDetails/details/Details";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { allProducts } from "@/data/products";
import React from "react";

export const metadata = {
  title: "Məhsul Detalı - Grelo.Az",
  description: "Grelo Agro Saytıdır",
};

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  return (
    <>
      <Topbar />
      <Header />
      <Breadcumb product={product} />
      <Details product={product} />
      <Info />
      <RelatedProducts />
      <Footer dark />
    </>
  );
}