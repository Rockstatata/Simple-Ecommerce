"use client";

import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from "@/redux/cartSlice";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Find the quantity of the current product in the cart
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      <div className="relative h-96 w-full md:w-1/2 rounded-lg">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          objectFit="contain"
          className="transition duration-300 hover:opacity-90"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold text-green-900 mb-4">
          ${product.price}
        </p>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => dispatch(removeFromCart(product.id))} // Pass product ID
            disabled={quantity === 0}
          >
            -
          </Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button onClick={() => dispatch(addToCart(product))}>+</Button> {/* Pass product */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;