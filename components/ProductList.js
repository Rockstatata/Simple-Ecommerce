"use client";

import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.title.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;
    return nameMatch || descriptionMatch;
  });

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search products..."
          className="max-w-md border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
        ></input>
      </div>
      <ul className="mt-6 grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols2 lg:grid-cols-3 ">
        {filteredProduct.map((item, key) => {
          return (
            <li key={key}>
              <ProductCard product={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
