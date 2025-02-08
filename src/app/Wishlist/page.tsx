
"use client";

import { useEffect, useState } from "react";
import { getWishlistItems, removeFromWishlist } from "@/app/actions/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    setWishlist(getWishlistItems());
  }, []);

  const handleRemove = (productId: string) => {
    removeFromWishlist(productId);
    setWishlist(getWishlistItems());
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Removed from wishlist!",
      timer: 1000,
    });
  };

  return (
    <div className="container mx-auto p-6">
     
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
            >
              <Image
                src={urlFor(product.image).url()}
                alt="image"
                width={300}
                height={300}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm">${product.price}</p>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md w-full mt-4 hover:bg-red-600 transition"
                onClick={() => handleRemove(product._id)}
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}


       {/* Back Button */}
       <button
        onClick={() => router.back()}
        className="bg-gray-800 text-white px-4 py-2 rounded-md mb-4 hover:bg-gray-600 transition mt-9 md:w-full sm:w-36"
      >
        ← Back to Shopping
      </button>
    </div>
  );
};

export default WishlistPage;
