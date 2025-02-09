// import { client } from "@/sanity/lib/client";
// import { Product } from "../../../../types/product";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// interface ProductPageProps{
// params:Promise<{slug:string}>;
// }
// async function getProduct(slug:string):Promise<Product>{
// return client.fetch(
//     groq `*[_type == "product" && slug. current == $slug][0] {

//     _id,
//     category,
//     _type,
//     image,
//     price,
//     description,
//     } `,{slug}
// )
// }
// export default async function ProductPage({params}:ProductPageProps){
//     const {slug} = await params;
//     const product = await getProduct(slug)

//     return(
//         <div className="max-7xl mx-auto px-4">
//             <div className="grid frid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="aspect-square ">
// {product.image && (
// <Image
// src={urlFor(product.image).url()}
// alt="detail img"
// width={500}
// height={500}
// className="rounded-lg shadow-md"

// />
// )}  
// </div>
// <div className="flex flex-col gap-8">
//     <h1 className="text-4xl font-bold">{product.name}</h1>
//     <p className="text-2xl font-sans">
//         ${product.price}
//     </p>
//     <p className="">
//         {product.description}
//     </p>
// </div>
//             </div>
//         </div>
//     )
// } 


//with ui
// "use client"; // Make this a client component

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import { Product } from "../../../../types/product";

// interface ProductPageProps {
//   params: { slug: string };
// }

// // Function to fetch product data
// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0] {
//       _id,
//       category,
//       _type,
//       image,
//       price,
//       description,
//       name,
//       quantity
//     }`,
//     { slug }
//   );
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const router = useRouter(); // Now it works!
//   const [product, setProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);

//   // Fetch product on mount
//   useEffect(() => {
//     async function fetchProduct() {
//       const data = await getProduct(params.slug);
//       setProduct(data);
//     }
//     fetchProduct();
//   }, [params.slug]);

//   if (!product) return <p className="text-center text-lg">Loading...</p>;

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square flex items-center justify-center">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col gap-6">
//           <h1 className="text-4xl font-bold">{product.name}</h1>
//           <p className="text-2xl font-semibold text-gray-700">${product.price}</p>
//           <p className="text-gray-600">{product.description}</p>

//           {/* Quantity Available */}
//           <p className={`text-lg font-medium ${product.quantity > 0 ? "text-green-600" : "text-red-600"}`}>
//             {product.quantity > 0 ? `In Stock: ${product.quantity}` : "Out of Stock"}
//           </p>

//           {/* Quantity Selector */}
//           {product.quantity > 0 && (
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
//                 className="px-4 py-2 bg-gray-200 text-lg rounded-md"
//               >
//                 -
//               </button>
//               <span className="text-lg font-semibold">{quantity}</span>
//               <button
//                 onClick={() => setQuantity((prev) => Math.min(product.quantity, prev + 1))}
//                 className="px-4 py-2 bg-gray-200 text-lg rounded-md"
//               >
//                 +
//               </button>
//             </div>
//           )}

//           {/* Add to Cart Button */}
//           <button className="bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
//             Add to Cart
//           </button>

//           {/* Back Button */}
//           <button
//             onClick={() => router.back()}
//             className="bg-gray-500 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 transition mt-4"
//           >
//             ← Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


//another
// "use client"; // Enables client-side functionality

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import { Product } from "../../../../types/product";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>; // params is now a Promise
// }

// // Function to fetch product data
// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0] {
//       _id,
//       category,
//       _type,
//       image,
//       price,
//       description,
//       name,
//       quantity
//     }`,
//     { slug }
//   );
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const router = useRouter();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [slug, setSlug] = useState<string | null>(null);

//   // Unwrap params using useEffect
//   useEffect(() => {
//     async function fetchParams() {
//       const resolvedParams = await params; // Await the promise
//       setSlug(resolvedParams.slug);
//     }
//     fetchParams();
//   }, [params]);

//   // Fetch product when slug is available
//   useEffect(() => {
//     if (!slug) return;
//     async function fetchProduct() {
//       const data = await getProduct(slug);
//       setProduct(data);
//     }
//     fetchProduct();
//   }, [slug]);

//   if (!product) return <p className="text-center text-lg">Loading...</p>;

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square flex items-center justify-center">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col gap-6">
//           <h1 className="text-4xl font-bold">{product.name}</h1>
//           <p className="text-2xl font-semibold text-gray-700">${product.price}</p>
//           <p className="text-gray-600">{product.description}</p>

//           {/* Quantity Available */}
//           <p className={`text-lg font-medium ${product.quantity > 0 ? "text-green-600" : "text-red-600"}`}>
//             {product.quantity > 0 ? `In Stock: ${product.quantity}` : "Out of Stock"}
//           </p>

//           {/* Quantity Selector */}
//           {product.quantity > 0 && (
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
//                 className="px-4 py-2 bg-gray-200 text-lg rounded-md"
//               >
//                 -
//               </button>
//               <span className="text-lg font-semibold">{quantity}</span>
//               <button
//                 onClick={() => setQuantity((prev) => Math.min(product.quantity, prev + 1))}
//                 className="px-4 py-2 bg-gray-200 text-lg rounded-md"
//               >
//                 +
//               </button>
//             </div>
//           )}

//           {/* Add to Cart Button */}
//           <button className="bg-[#2A254B] text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#2A254B] transition">
//             Add to Cart
//           </button>

//           {/* Back Button */}
//           <button
//             onClick={() => router.back()}
//             className="bg-gray-300 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 transition mt-4"
//           >
//             ← Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


///with deamnesions, and features
// "use client"; // Enables client-side functionality, in this code, error, and error

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import { Product } from "../../../../types/product";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }

// // Function to fetch product data
// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0] {
//       _id,
//       category,
//       _type,
//       image,
//       price,
//       description,
//       name,
//       quantity,
//       dimensions, 
//       features[] 
//     }`,
//     { slug }
//   );
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const router = useRouter();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [slug, setSlug] = useState<string | null>(null);

//   // Unwrap params using useEffect
//   useEffect(() => {
//     async function fetchParams() {
//       const resolvedParams = await params;
//       setSlug(resolvedParams.slug);
//     }
//     fetchParams();
//   }, [params]);

//   // Fetch product when slug is available
//   useEffect(() => {
//     if (!slug) return;
//     async function fetchProduct() {
//       const data = await getProduct(slug);
//       setProduct(data);
//     }
//     fetchProduct();
//   }, [slug]);

//   if (!product) return <p className="text-center text-lg">Loading...</p>;

//   // Extract dimensions safely
//   const { height,width,depth } = product.dimensions || {};

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square flex items-center justify-center">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col gap-6">
//           <h1 className="text-4xl font-bold">{product.name}</h1>
//           <p className="text-2xl font-semibold text-gray-700">${product.price}</p>
//           <div>
//           <h3 className="text-2xl font-medium font-satoshi">Description:</h3>
//           <p className="text-gray-600  mt-2 font-clash text-base">{product.description}</p>
//           </div>
//           {/* Display Dimensions */}
//           {height  && width && depth ? (
//             <p className="text-black">
//               <span className="text-2xl font-medium font-satoshi">Dimensions:</span> <br />
//               <div className="mt-2 font-clash flex gap-3">
//               <span>Height:
//               <br />{height}</span> 
//               <span>Width:
//               <br />
//                 {width}</span>
//               <span>Depth:
//               <br />
//                 {depth}</span> 
//               </div>
//             </p>
//           ) : (
//             <p className="text-gray-600">
//               <span className="font-semibold">Dimensions:</span> Not Available
//             </p>
//           )}

//           {/* Key Features */}
//           {Array.isArray(product.features) && product.features.length > 0 ? (
//             <div>
//               <h3 className="text-lg font-semibold">Key Features:</h3>
//               <ul className="list-disc list-inside text-gray-600">
//                 {product.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             <p className="text-gray-600">No key features available.</p>
//           )}

//           {/* Quantity Available */}
//           <p className={`text-lg font-medium ${product.quantity > 0 ? "text-green-600" : "text-red-600"}`}>
//             {product.quantity > 0 ? `In Stock: ${product.quantity}` : "Out of Stock"}
//           </p>

//           {/* Quantity Selector */}
//           {product.quantity > 0 && (
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
//                 className="px-4 py-2 bg-gray-200 text-lg rounded-md"
//               >
//                 -
//               </button>
//               <span className="text-lg font-semibold">{quantity}</span>
//               <button
//                 onClick={() => setQuantity((prev) => Math.min(product.quantity, prev + 1))}
//                 className="px-4 py-2 bg-gray-200 text-lg rounded-md"
//               >
//                 +
//               </button>
//             </div>
//           )}

//           {/* Add to Cart Button */}
//           <button className="bg-[#2A254B] text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#2A254B] transition">
//             Add to Cart
//           </button>

//           {/* Back Button */}
//           <button
//             onClick={() => router.back()}
//             className="bg-gray-300 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 transition mt-4"
//           >
//             ← Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"; 

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/product";
import { addToCart } from "@/app/actions/action";
import { useCartStore } from "@/app/store/cartStore";
import Swal from "sweetalert2";
import { addToWishlist,removeFromWishlist ,getWishlistItems } from "@/app/actions/action";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { four2 } from "@/sanity/lib/queries";


interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

//addto card function
const handleAddToCart = (e: React.MouseEvent, product: Product) => {
  e.preventDefault();
  Swal.fire({
    position: "top",
    icon: "success",
    title: `${product.name} added to cart!`,
    timer: 1000,
  });
  addToCart(product);
  useCartStore.getState().updateCart();
};
// Function to fetch product data
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      category,
      _type,
      image,
      price,
      description,
      name,
      quantity,
      dimensions { height, width, depth }, 
      features[] 
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [slug, setSlug] = useState<string | null>(null);

  // you may also like
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  // you may also like
useEffect(() => {
    async function fetchProducts() {
      const fetched: Product[] = await client.fetch(four2);
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


  // Unwrap params using useEffect
  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    fetchParams();
  }, [params]);

  // Fetch product when slug is available
  useEffect(() => {
    if (!slug) return;
    async function fetchProduct() {
      const data = await getProduct(slug as string);
      setProduct(data);
    }
    fetchProduct();
  }, [slug]);

  if (!product) return <p className="text-center text-lg">Loading...</p>;

  
  // Extract dimensions safely
  const dimensions = product?.dimensions;
  const height = dimensions && dimensions.height ? dimensions.height : "N/A";
  const width = dimensions && dimensions.width ? dimensions.width : "N/A";
  const depth = dimensions && dimensions.depth ? dimensions.depth : "N/A";
  
  return (
    <section className="max-w-[1280px] mx-auto caret-transparent">
      <div className="px-4 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:h-[600px] mt-7">
          <div className="w-full md:w-1/2 h-full">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={800}
                height={800}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            )}
          </div>
          {/* Product Details */}
          <div className="w-full md:w-1/2 lg:px-8 py-6 flex items-center justify-center">
          <div className="flex flex-col gap-6 w-full">
            <div>
            <h1 className="text-xl md:text-2xl font-semibold">{product.name}</h1>
            <p className="text-2xl font-medium text-gray-700">Price:${product.price}</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium font-satoshi text-[#505977] md:text-base">Description:</h3>
              <p className="text-gray-600 mt-2 font-clash text-base">{product.description}</p>
            </div>
            {/* Key Features */}
            {Array.isArray(product.features) && product.features.length > 0 ? (
              <div>
                <h3 className="text-lg font-medium">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-600">No key features available.</p>
            )}
            {/* Display Dimensions */}
            <div className="text-black my-8">
              <span className="text-2xl font-medium font-satoshi">Dimensions</span>
              <div className="mt-2 font-clash flex gap-3">
                <span>Height:<br />{height}</span>
                <span>Width:<br />{width}</span>
                <span>Depth:<br />{depth}</span>
              </div>
            </div>
 
          <div className="flex flex-wrap justify-start items-center gap-4">
  
            {/* Quantity Available */}
            <p className={`text-lg font-medium ${product.quantity > 0 ? "text-green-600" : "text-red-600"}`}>
              {product.quantity > 0 ? `In Stock: ${product.quantity}` : "Out of Stock"}
            </p>
            {/* Quantity Selector */}
            {product.quantity > 0 && (
              <div className="flex items-center gap-4">
                <span className="text-lg font-medium">
                  Quantity
                </span>
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 bg-gray-200 text-lg rounded-md"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => Math.min(product.quantity, prev + 1))}
                  className="px-4 py-2 bg-gray-200 text-lg rounded-md"
                  >
                  +
                </button>
              </div>
            )}
            
<div className="flex  flex-wrap gap-5 items-center justify-between">
                  <button
              className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white"
              onClick={(e) => handleAddToCart(e, product)}
              >
              Add To Cart
            </button>
               <button
              onClick={() => router.back()}
              className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white"
            >
              ← Back
            </button>
            </div>
              </div>
          </div>
          </div>
        </div>


        {/* you may also like */}
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12 w-full">
        <h1 className="text-2xl font-semibold mb-2">You Might Also Like</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4 w-full">
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
                <p className="text-[#2A254B] mt-12">
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

{/* static features */}
<div className="px-4 md:px-8 text-[#2A254B] mt-16 container gap-24 w-full">
  {/* Title */}
  <h1 className="text-center text-xl md:text-2xl font-semibold">
    What makes our brand different
  </h1>

  {/* Features */}
  <div className="flex flex-col md:flex-row gap-8 mt-10 text-base md:text-lg">
    {/* Feature 1 */}
    <div className="flex flex-col md:w-[25%] p-4  rounded-lg">
      <Image src='/images/Delivery.png' alt="img" width={22} height={22}></Image>
      <p className="py-4 font-semibold">Next day as standard</p>
      <p>Order before 3pm and get your order the next day as standard.</p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col  md:w-[25%] p-4  rounded-lg">
      <Image src='/images/check.png' alt="img" width={22} height={22}></Image>
      <p className="py-4 font-semibold">Made by true artisans</p>
      <p>Hand-crafted goods made with real passion and craftsmanship.</p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
      <Image src='/images/Wallet.png' alt="img" width={22} height={22}></Image>
      <p className="py-4 font-semibold">Unbeatable prices</p>
      <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col  md:w-[25%] p-4  rounded-lg">
    
      <Image src='/images/sprout.png' alt="img" width={22} height={22}></Image>
      <p className="py-4 font-semibold">Recycled packaging</p>
      <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
