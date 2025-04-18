import Link from "next/link";
import React from "react";

const SuccessPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-4xl font-bold text-green-600 mb-4">
                    🎉 Order Placed Successfully!
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Thank you for your purchase. Your order has been placed and is being processed.
                </p>
                <button
                    className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    <Link href="/products" className="text-white">
                        Continue Shopping
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;