"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../../../types/product";
import { allProducts, four, three } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToWishlist, removeFromWishlist, getWishlistItems } from "../actions/action";
import { FaHeart } from "react-icons/fa";
const Ourproduct = () => {

 const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetched: Product[] = await client.fetch(three);
      // const fetched: Product[] = await client.fetch(four);
      setProducts(fetched);
    }
    fetchProducts();

    // Load wishlist from localStorage
    const storedWishlist = getWishlistItems().map((item) => item._id);
    setWishlist(storedWishlist);
  }, []);

  const toggleWishlist = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    if (wishlist.includes(product._id)) {
      removeFromWishlist(product._id);
      setWishlist((prev) => prev.filter((id) => id !== product._id));
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Removed from wishlist!",
        timer: 1000,
      });
    } else {
      addToWishlist(product);
      setWishlist((prev) => [...prev, product._id]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Added to wishlist!",
        timer: 1000,
      });
    }
  };


  return (
    <div>
     <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
  {products.map((product) => (
    <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 relative">
      <Link href={`/product/${product.slug.current}`}>
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt="image"
            width={500} // Adjust width
            height={400} // Adjust height
            className="w-full h-64 object-cover rounded-md"
          />
        )}

        {/* Wishlist Icon */}
        <button className="absolute top-4 right-4 text-xl" onClick={(e) => toggleWishlist(e, product)}>
          <FaHeart className={`${wishlist.includes(product._id) ? "text-red-500" : "text-gray-400"} transition-colors duration-300`} />
        </button>

        <h1 className="text-lg font-semibold mt-4">{product.name}</h1>
        <p className="text-[#2A254B] mt-2">
        {product.price ? `$${product.price}` : "Price is not available"}
        </p>
      </Link>
    </div>
  ))}
</div>


          {/* Button */}
          <div className='my-10 flex justify-center items-center'>
          <Link href="/Allproducts">
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]'>
              View products
            </button>
          </Link>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default Ourproduct

