
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../../../types/product";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToWishlist, removeFromWishlist, getWishlistItems } from "../actions/action";
import { FaHeart } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  

// Pagination state
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8;

  useEffect(() => {
    async function fetchProducts() {
      const fetched: Product[] = await client.fetch(allProducts);
      // const fetched: Product[] = await client.fetch(four);
      setProducts(fetched);
    }
    fetchProducts();

    // Load wishlist from localStorage
    const storedWishlist = getWishlistItems().map((item) => item._id);
    setWishlist(storedWishlist);
  }, []);

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    async function fetchProducts() {
      const fetched: Product[] = await client.fetch(`
        *[_type == "product"]{
          ...,
          category->{name},
          product->{productType}
        }
      `);
      setProducts(fetched);
      setFilteredProducts(fetched);
    }
    fetchProducts();

    // Load wishlist from localStorage
    const storedWishlist = getWishlistItems().map((item) => item._id);
    setWishlist(storedWishlist);
  }, []);

  // Wishlist Toggle
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

  // Apply Filters & Search
  useEffect(() => {
    let filtered = [...products];

    // Search Filter
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category Filter
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category?.name === selectedCategory);
    }

    // Price Filter
    if (selectedPrice) {
      filtered = filtered.filter((product) => {
        const price = product.price || 0;
        if (selectedPrice === "200") return price < 200 ;
        if (selectedPrice === "300") return price < 300 && price >= 500;
        if (selectedPrice === "600-1000") return price >= 600 && price <= 1000;
        return true;
      });
    }

    // Product Type Filter
    if (selectedType) {
      filtered = filtered.filter((product) => product.productType=== selectedType);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedPrice, selectedType, products]);


// Pagination logic
const indexOfLastProduct = currentPage * itemsPerPage;
const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));


const handlePagination = (pageNumber: number) => {
  if (pageNumber > 0 && pageNumber <= totalPages) {
    setCurrentPage(pageNumber);
  }
};

console.log(`Current Page: ${currentPage}, Showing: ${indexOfFirstProduct} to ${indexOfLastProduct}`);
console.log("Current Products: ", currentProducts);



  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[140px] md:h-[209px]">
        <Image
          src="/images/productbanner.png"
          alt="Product banner image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg sm:text-2xl md:text-4xl font-medium">
          All Products
        </div>
      </div>

      {/* Filters & Search */}
      <div className="px-4 py-4 md:px-8 bg-white shadow-sm flex flex-wrap gap-4 items-center justify-between">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-80"
        />

        {/* Category Filter */}
        <div className="gap-2 justify-between fllex flex-row">
        <span className="mr-3">Category</span>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Plant Pots">Plant Pots</option>
          <option value="Cutlery">Cutlery</option>
          <option value="Ceramics">Ceramics</option>
          <option value="Chairs">Chairs</option>
          <option value="Tableware">Tableware</option>
        </select>
        </div>

        {/* Price Filter */}
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Prices</option>
          <option value="Under 100">Under $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="Above 500">Above $500</option>
        </select>

        {/* Product Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Product Types</option>
          <option value="Chair">Chair</option>
          <option value="Sofa">Sofa</option>
          <option value="Lamp">Lamp</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 py-12 text-[#2A254B] mt-7">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 relative">
              <Link href={`/product/${product.slug.current}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
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
                  <FaHeart className={`${wishlist.includes(product._id) ? "text-red-500" : "text-gray-400"} transition-colors duration-300`} />
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

                {/* Add to card button */}
                <button className="mt-5 bg-gradient-to-r from-[#2A254B] to-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                   View Details
          </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center w-full text-gray-500">No products found</p>
        )}
      </div>

  {/* Pagination Controls */}
  <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
       onClick={() => handlePagination(currentPage + 1)}
       disabled={currentPage >= totalPages || filteredProducts.length === 0}
       className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 disabled:opacity-50">
          Next
        </button>
        
      </div>

    </div>
  );
};

export default AllProducts;
