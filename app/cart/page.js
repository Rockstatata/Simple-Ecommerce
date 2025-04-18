"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectCartTotal, addToCart, removeFromCart } from "@/redux/cartSlice";
import Link from "next/link";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {cartItems.length === 0 ? (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty.</h1></div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    disabled={item.quantity === 0}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8  p-6 rounded-lg ">
            <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium">Total Quantity:</span>
              <span className="text-lg">{totalQuantity}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total Price:</span>
              <span className="text-lg font-semibold text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-center">
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
                <Link href="/success">Proceed to Checkout</Link>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;