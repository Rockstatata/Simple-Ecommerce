"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/cartSlice";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const cartItems = useSelector(selectCartItems); // Get cart items from Redux
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false); // Close mobile menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-neutral-100 shadow-md dark:bg-gray-800">
      <div className="container mx-auto flex flex-row items-center justify-between p-4">
        <Link href="/" className="hover:text-blue-600">
          Simple Ecommerce
        </Link>
        <div className="hidden md:flex space-x-6 justify-end ml-auto">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
        </div>
        <div className="flex items-center space-x-4 ml-8">
          <Link href="/cart" className="relative hover:text-blue-600">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && <nav className="md:hidden bg-neutral-100 shadow-md">
        <ul className="flex flex-col">
          <li className="p-2">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/products" className="block hover:text-blue-600">Products</Link>
            <Link href="/cart" className="block relative hover:text-blue-600">
            </Link>
          </li>
        </ul></nav>}
    </nav>
  );
};

export default Navbar;