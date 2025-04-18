import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export default function ProductCard({ product }) {
  return (
    <div className="h-full">
      <Link href={`/products/${product.id}`} className="h-full block">
        <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out h-full">
          <div className="flex flex-col items-center justify-between p-4 bg-white transition-shadow duration-300 ease-in-out h-[400px]">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center line-clamp-2 h-14 overflow-hidden">
                {product.title}
              </h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
            </div>
            <Button className="mt-4 text-amber-50 w-full" variant="default">
              View Details
            </Button>
          </div>
        </Card>
      </Link>
    </div>
  );
}
