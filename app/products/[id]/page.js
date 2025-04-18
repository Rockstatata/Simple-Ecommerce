import ProductDetail from "@/components/ProductDetail";
import React from "react";


export default async function ProductPage(product) {
  const { params } = product;
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return (
    <div >
      <ProductDetail product={data} />
    </div>
  );
}
