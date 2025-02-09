
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToWishlist, removeFromWishlist, getWishlistItems } from "../actions/action";
import { FaHeart } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  
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
          category->{name}
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
        if (selectedPrice === "Under 100") return price < 100;
        if (selectedPrice === "100-500") return price >= 100 && price <= 500;
        if (selectedPrice === "Above 500") return price > 500;
        return true;
      });
    }

    // Product Type Filter
    if (selectedType) {
      filtered = filtered.filter((product) => product.type === selectedType);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedPrice, selectedType, products]);

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
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Crockery">Crockery</option>
          <option value="Cutlery">Cutlery</option>
          <option value="Ceramics">Ceramics</option>
          <option value="Chairs">Chairs</option>
          <option value="Tableware">Tableware</option>
        </select>

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
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center w-full text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
