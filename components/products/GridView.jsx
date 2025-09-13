import React from "react";
import Pagination from "../common/Pagination";
import ProductCard3 from "../productCards/ProductCard3";

export default function GridView({ products, pagination = true }) {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard3 product={product} />
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
