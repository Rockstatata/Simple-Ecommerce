import React from "react";
import ProductList from "@/components/ProductList";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function page() {
  const products = await getProducts();
  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-light text-foreground text-center mb-8">
        {" "}
        All Products
      </h1>
      <ProductList products={products} />
    </div>
  );
}
