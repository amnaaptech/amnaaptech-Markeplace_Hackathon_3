// // // FIRST CODE 
// // "use Client"
// // // import sanityClient, { SanityClient } from '@sanity/client'
// // import { createClient } from '@sanity/client'
// // import React, { useEffect, useState } from 'react'
// // import Image from 'next/image'


// // const sanity = createClient({
// //     projectId: "m6dcwszi",
// //     dataset: 'production',
// //     apiVersion: "2023-01-01",
// //     useCdn: true
// // })

// // interface Product {
// //     _id: string;
// //     title: string;
// //     price: number;
// //     description: string;
// //     discountPercentage: number;
// //     imgUrl: string;
// //     productImage: {
// //         asset: {
// //             _ref: string;
// //         };
// //     };
// //     tags: string[];
// // }

// // const ProductsCards: React.FC = () => {
// //     const [products, setProducts] = useState<Product[]>([]);
// //     const [cart, setCart] = useState<Product[]>([]);

// //     const fetchProducts = async () => {
// //         try {
// //             const query = `*[_type == "product"] {
// //             _id,
// //             title,
// //             price,
// //             description,
// //             discountPercentage,
// //             "imgUrl": productImage.asset->url,
// //             tags
// //             }`;
       
          
// //             const data = await sanity.fetch(query);
// //             setProducts(data);
// //         } catch (error) {
// //             console.log("Can't fetch products:", error);
// //         }
// //     };

// //     const addToCard = (product: Product) => {
// //         setCart((prevCart) => [...prevCart, product]);
// //         alert(`${product.title} has been successfully added to your Cart!`)
// //     };

// //     const truncateDescription = (description: string)=> {
// //         return description.length > 100 ? description.substring(0,100) + "...":description
// //       };
      

// //     useEffect(() => {
// //         fetchProducts();
// //     }, []);

  
// //     return (
// //         <div className='p-4'>
// //             <h2 className='text-center text-slate-800 mt-4 mb-2'>Products From API's</h2>
// //             {/* responsive */}
// //             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
// //                 {products.map((product) => (
// //                     <div key={product._id} className='bg-white shadow-md rounded-lg gap-4 hover:shadow-lg transition-shadow duration-300'>


// // <Image 
// //     src={product.imgUrl && product.imgUrl !== "" ? product.imgUrl : "/placeholder.jpg"}
// //     alt={product.title || "No Title"}
// //     width={300} 
// //     height={300} 
// //     className='w-full h-48 object-cover rounded-md'
// // />

// //                         <div className='mt-4'>
// //                             <h2 className='text-lg font-semibold'>{product.title}</h2>
// //                             <p className="text-slate-600 text-sm">{truncateDescription(product.description)}</p>
// //                             <div className="flex justify-between items-center mt-4">
// //                                 <div>
// //                                     <p className='text-slate-600 font-bold'>${product.price}</p>
// //                                     {product.discountPercentage > 0 && (
// //                                         <p className='text-sm text-green-600'>{product.discountPercentage} % OFF</p>
// //                                     )}
// //                                 </div>
// //                             </div>
// //                             <div className='mt-2 flex flex-wrap gap-2'>
// //                                 {product.tags.map((tag, index) => (
// //                                     <span key={index} className='text-xs bg-slate-400 text-black px-2 py-1'>{tag}</span>
// //                                 ))}
// //                             </div>
// //                             {/* {add to card functionality} */}

// //                             <button className='mt-4 w-full bg-[#2A254B] text-white py-2 rounded-md hover:bg-slate-50'onClick={() => addToCard(product)}>Add to Cart
// //                             </button>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //             {/* CARd SUMMERY */}
// //             <div className="mt-8 bg-slate-100 rounded-lg shadow-md">
// //                 <h2 className='text-lg font-black text-[#2A254B]'>Cart Summary</h2>
// //                 {cart.length > 0 ? (
// //                     <ul className='space-y-4 '>
// //                         {cart.map((item, index) => (
// //                             <li key={index} className='flex justify-between items-center  bg-white shadow-sm p-4 rounded-md'>
// //                                 <div>
// //                                     <p className='font-medium text-slate-900'>{item.title}</p>
// //                                     {/* <p className='text-sm text-blue-600'>${parseFloat(item.price).toFixed(2)}</p> */}
// //                                     <p className='text-sm text-blue-600'>${item.price.toFixed(2)}</p>
// //                                 </div>

// //                                 <Image src={item.imgUrl} alt={item.title} width={50} height={50} className='rounded-md' />
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 ):(
// //                     <p className='text-black text-center'>Your Cart is Empty Please Add products</p>
// //                 )}
// //             </div>
// //         </div>
// //         )}
// // export default ProductsCards;


































// // 2ND CODE this is ok but, img is not fetched and in this code, when i'm doing addto card then one,by one errror is occurs
// // "use client";

// // import sanityClient from "@sanity/client";
// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";

// // const sanity = sanityClient({
// //   projectId: "m6dcwszi",
// //   dataset: "production",
// //   apiVersion: "2023-01-01",
// //   useCdn: true,
// // });

// // interface Products {
// //   _id: string;
// //   title: string;
// //   price: string;
// //   description: string;
// //   discountPercentage: number;
// //   imgurl: string;
// //   tags: string[];
// // }

// // const ProductsCards: React.FC = () => {
// //   const [products, setProducts] = useState<Products[]>([]);
// //   const [cart, setCart] = useState<Products[]>([]);

// //   const fetchProducts = async () => {
// //     try {
// //     //   const query = `*[_type == "product"] {
// //     //     _id,
// //     //     title,
// //     //     price,
// //     //     description,
// //     //     discountPercentage,
// //     //     "imgurl": productImage.asset->url,
// //     //     tags
// //     //   }`;
// //     const query = `*[_type == "product"] {
// //         _id,
// //         title,
// //         price,
// //         description,
// //         discountPercentage,
// //         "imgurl": productImage.asset->url,
// //         tags
// //       }`;
      
// //     //   const data = await sanity.fetch(query);
// //     //   console.log("Fetched Products:", data);
// //     //   setProducts(data);
// //     const data = await sanity.fetch(query);
// // console.log("Fetched Products:", data);
// // setProducts(data);

// //     } catch (error) {
// //       console.error("Can't fetch products", error);
// //     }
// //   };

// //   const addToCart = (product: Products) => {
// //     setCart((prevCart) => [...prevCart, product]);
// //     alert(`${product.title} has been successfully added to your Cart!`);
// //   };


// // const truncateDescription = (description: string)=> {
// //   return description.length > 100 ? description.substring(0,100) + "...":description
// // };

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

  
// //   useEffect(() => {
// //     console.log("Products state:", products); // Add this line
// //   }, [products]);
  

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API</h2>

// //       {/* Product Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {products.map((product) => (
// //           <div key={product._id} className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 p-4">
// //             {/* Image with fallback */}
// //             <Image
// //               src={product.imgurl || "/fallback-image.jpg"}
// //               alt={product.title || "Product image"}
// //               width={300}
// //               height={300}
// //               className="w-full h-48 object-cover rounded-md"
// //             />
            

// //             <div className="mt-4">
// //               <h2 className="text-lg font-semibold">{product.title}</h2>
// //               <p className="text-slate-800 text-sm">{truncateDescription(product.description)}</p>

// //               <div className="flex justify-between items-center mt-4">
// //                 <div>
// //                   <p className="text-slate-600 font-bold">${parseFloat(product.price).toFixed(2)}</p>
// //                   {product.discountPercentage > 0 && (
// //                     <p className="text-sm text-green-600">{product.discountPercentage}% OFF</p>
// //                   )}
// //                 </div>
// //               </div>

// //               <div className="mt-2 flex flex-wrap gap-2">
// //                 {product.tags.map((tag, index) => (
// //                   <span key={index} className="text-xs bg-slate-400 text-black px-2 py-1 rounded-full">
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>

// //               {/* Add to Cart Button */}
// //               <button
// //                 className="mt-4 w-full bg-[#2A254B] text-white py-2 rounded-md hover:bg-gray-700 transition"
// //                 onClick={() => addToCart(product)}
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Cart Summary */}
// //       <div className="mt-8 bg-slate-100 p-4 rounded-lg shadow-md">
// //         <h2 className="text-lg font-bold text-[#2A254B]">Cart Summary</h2>
// //         {cart.length > 0 ? (
// //           <ul className="space-y-4">
// //             {cart.map((item, index) => (
// //               <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
// //                 <div>
// //                   <p className="font-medium text-slate-900">{item.title}</p>
// //                   <p className="text-sm text-black">${parseFloat(item.price).toFixed(2)}</p>
// //                 </div>
// //                 <Image
// //                   src={item.imgurl }
// //                   alt={item.title || "Product image"}
// //                   width={50}
// //                   height={50}
// //                   className="rounded-md"
// //                 />
// //               </li>
              
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className="text-black text-center">Your Cart is Empty. Please Add Products.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductsCards;




// //its fetch products but img is not shown,and  in sanity there is no errro,and its give output in console

// "use client";

// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const sanity = sanityClient({
//   projectId: "m6dcwszi",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: true,
// });

// const builder = imageUrlBuilder(sanity);
// const urlFor = (source: any) => builder.image(source).url();

// interface Products {
//   _id: string;
//   title: string;
//   price: string;
//   description: string;
//   discountPercentage: number;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
//   tags: string[];
// }

// const ProductsCards: React.FC = () => {
//   const [products, setProducts] = useState<Products[]>([]);
//   const [cart, setCart] = useState<Products[]>([]);

//   const fetchProducts = async () => {
//     try {
//     //   const query = `*[_type == "product"] {
//     //     _id,
//     //     title,
//     //     price,
//     //     description,
//     //     discountPercentage,
//     //      productImage.asset->_ref,
//     //     tags
//     //   }`;
//     const query = `*[_type == "product"] {
//         _id,
//         title,
//         price,
//         description,
//         discountPercentage,
//         "imageUrl": productImage.asset->_ref,
//         tags
//       }`;
      
//       const data = await sanity.fetch(query);

//       console.log("Fetched Products:", data); // Debugging: Check API response

//       setProducts(data);
//     } catch (error) {
//       console.error("Can't fetch products", error);
//     }
//   };

//   const addToCart = (product: Products) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} has been successfully added to your Cart!`);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API</h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 p-4">
//             {/* <Image
//               src={urlFor(product.productImage)}
//               alt={product.title}
//               width={300}
//               height={300}
//               className="w-full h-48 object-cover rounded-md"
//             /> */}
           

// {/* <Image
//   src={product.productImage?.asset?._ref ? urlFor(product.productImage) : "/fallback-image.jpg"}
//   alt={product.title || "Product image"}
//   width={300}
//   height={300}
//   className="w-full h-48 object-cover rounded-md"
// /> */}
// <Image
//   src={product.imageUrl ? urlFor(product.imageUrl) : "/fallback-image.jpg"}
//   alt={product.title || "Product image"}
//   width={300}
//   height={300}
//   className="w-full h-48 object-cover rounded-md"
// />



//             <div className="mt-4">
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-slate-800 text-sm">{product.description}</p>

//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="text-slate-600 font-bold">${parseFloat(product.price).toFixed(2)}</p>
//                   {product.discountPercentage > 0 && (
//                     <p className="text-sm text-green-600">{product.discountPercentage} % OFF</p>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.tags.map((tag, index) => (
//                   <span key={`${product._id}-${index}`} className="text-xs bg-slate-400 text-black px-2 py-1 rounded-full">{tag}</span>
//                 ))}
//               </div>

//               {/* Add to Cart Button */}
//               <button
//                 className="mt-4 w-full bg-[#2A254B] text-white py-2 rounded-md hover:bg-gray-700 transition"
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsCards;
