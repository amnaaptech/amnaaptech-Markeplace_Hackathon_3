// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Product } from "../../../types/product";
// import { allProducts, four } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { addToCart } from "../actions/action";
// import Swal from "sweetalert2";



// const Ceramics = () => {

//   const [product, setProduct] = useState<Product[]>([]);
//   useEffect(() => {
//     async function fetchproduct() {
//       // const fetched : Product[] = await client.fetch(four)
//       const fetched: Product[] = await client.fetch(allProducts)
//       setProduct(fetched)
//     }
//     fetchproduct();
//   }, [])

//   const handelAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault()
//     Swal.fire({
//       position: "top-center",
//       icon: "success",
//       title: `${product.name}added to cart `,
//       timer: 1000,

//     })
//     addToCart(product)
//   }
//   return (
//     <section>
//       <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
//         {/* Title */}
//         <h1 className="text-2xl font-semibold mb-2">New Ceramics</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {product.map((product) => (
//             <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ">
//               <Link href={`/product/${product.slug.current}`}>
//                 {product.image && (
//                   <Image src={urlFor(product.image).url()}
//                     alt="image"
//                     width={300}
//                     height={300}
//                     className="w-full h-48 object-cover rounded-md"
//                   />
//                 )}
//                 <h1 className="text-g font-semibold mt-4">{product.name}</h1>
//                 <p className="text-[#2A254B] mt-2">
//                   {product.price ? `$${product.price}` : "Price is not available"}
//                 </p>

//                 {/* Add to card button */}
//                 <button className="bg-gradient-to-r from-[#2A254B] to-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out" onClick={(e) => handelAddToCart(e, product)}>Add To Cart</button>

//                 {/* <p className="mt-5">{product.description}</p> */}
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* View Collection Button */}
//         <div className="my-10 flex justify-center items-center">
//           <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
//             View collection
//           </button>
//         </div>
//       </div>
//     </section>


//   )
// }
// export default Ceramics;


// new wishlist code
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../../../types/product";
import { allProducts, four } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToWishlist, removeFromWishlist, getWishlistItems } from "../actions/action";
import { FaHeart } from "react-icons/fa";


const Ceramics = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetched: Product[] = await client.fetch(four);
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
    <section>
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        <h1 className="text-2xl font-semibold mb-2">New Ceramics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 relative">
              <Link href={`/product/${product.slug.current}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt="image"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                
                {/* Wishlist Icon */}
                <button
                  className="absolute top-4 right-4 text-xl"
                  onClick={(e) => toggleWishlist(e, product)}
                >
                      <FaHeart
               className={`${
                     wishlist.includes(product._id)
                         ? "text-red-500"
                        : "text-gray-400"
                   } transition-colors duration-300`}
                  />
                </button>

                <h1 className="text-lg font-semibold mt-4">{product.name}</h1>
                <p className="text-[#2A254B] mt-2">
                  {product.price ? `$${product.price}` : "Price is not available"}
                </p>
                
                       {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2">
               {product.tags.map((tag, index) => (
                  <span key={`${product._id}-${index}`} className="text-xs bg-slate-400 text-black px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
                <button className="mt-5 bg-gradient-to-r from-[#2A254B] to-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ceramics;
