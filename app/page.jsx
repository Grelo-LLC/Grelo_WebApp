import Features from "@/components/common/Features";
import Categories from "@/components/homes/Categories";
import Hero from "@/components/homes/Hero";
import Products from "@/components/homes/Products";
import React from "react";

export const metadata = {
    title: "Ana Səhifə - Grelo.Az",
    description: "Grelo Agro Saytıdır",
};

export default function HomeElectronicPage() {
    return (
        <>
            <Hero />

            <Categories />

            <Products />

            <Features parentClass="flat-spacing-4 line-top-container" />
        </>
    );
}