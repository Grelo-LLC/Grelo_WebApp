import React from "react";
import ProductsCards6 from "../productCards/ProductsCards6";
import Pagination from "../common/Pagination";

export default function Listview({ products, pagination = true }) {
  return (
    <>
      {products.map((product, i) => (
        <ProductsCards6 product={product} key={i} />
      ))}

      {pagination ? (
        <ul className="wg-pagination ">
          <Pagination />
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
