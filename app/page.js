import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <section className="rounded bg-white py-8 sm:py-12 border-2 border-gray-200 shadow-md">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to Simple Ecommerce
            </h2>
            <p className="text-neutral-600">
              {" "}
              Discover the latest products at the best price
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
              >
                View Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Banner Image"
            width={450}
            height={450}
            className="rounded-lg"
            src={products[0].image}
          />
        </div>
      </section>
    </div>
  );
}
