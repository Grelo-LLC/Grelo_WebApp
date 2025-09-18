import React from "react";
import Pagination from "../common/Pagination";
import ProductCard from "../productCards/ProductCard";

export default function GridView({ products, pagination = true }) {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}

      {pagination ? (
        <ul className="wg-pagination justify-content-center">
          <Pagination />
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
