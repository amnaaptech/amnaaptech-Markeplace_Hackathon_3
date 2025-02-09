
"use client";

import { useEffect, useState } from "react";
import { getWishlistCount } from "@/app/actions/action";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // ✅ Run only on client to avoid hydration issues
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setWishlistCount(getWishlistCount());
      }, 100);
    }
  }, []);

  useEffect(() => {
    // ✅ Zustand should be used only in useEffect
    if (typeof window !== "undefined") {
      setCartCount(useCartStore.getState().cart.length);
    }
  }, []);

  return (
    <nav className="bg-white shadow-md">
      {/* Top Header */}
      <div className="container mx-auto py-2 flex items-center justify-between border-b border-gray-200">
        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Avion
          </Link>
          <div className="flex items-center">
            {/* Search Icon */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full">
              <Image src="/images/search.png" alt="Search Icon" width={22} height={22} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search products..."
                className="border px-2 py-1 ml-2 transition-all duration-300 focus:outline-none"
              />
            )}
  
   {/* Cart Icon */}
   <Link href="/Cart" className="relative cursor-pointer">
              <Image src="/images/cart.png" alt="Cart Icon" width={27} height={27} />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{cartCount}</span>}
            </Link>
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none block text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="relative flex items-center">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-300 transition">
              <Image src="/images/search.png" alt="Search Icon" width={22} height={22} />
            </button>
            <div className={`absolute left-12 top-0 transition-all duration-300 overflow-hidden bg-white ${isSearchOpen ? "w-56 opacity-100 p-2 rounded-md border" : "w-0 opacity-0 p-0"}`}>
              <input type="text" placeholder="Search products..." className="w-full focus:outline-none" />
            </div>
          </div>

          <Link href="/" className="text-2xl font-bold text-gray-800">Avion</Link>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href="/LogIn">
                <button className="flex items-center px-3 py-2 bg-[#2A254B] text-white text-xs rounded hover:bg-gray-400 mx-2">Signup</button>
              </Link>
            </div>

            {/* Cart Icon */}
            <Link href="/Cart" className="relative cursor-pointer">
              <Image src="/images/cart.png" alt="Cart Icon" width={27} height={27} />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{cartCount}</span>}
            </Link>

            {/* User Profile */}
            <Image src="/images/user.png" alt="User Icon" width={27} height={27} />

            {/* Wishlist Notification Icon */}
            <div className="relative">
              <Link href="/Wishlist">
                <Image src="/images/wish.png" alt="wishlist" width={27} height={27} />
                {wishlistCount > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{wishlistCount}</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center mt-6">
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800">Plant Pots</Link>
          <Link href="/Allproducts" className="text-gray-600 hover:text-gray-800">Ceramics</Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">Tables</Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">Chairs</Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">Cutlery</Link>
          <Link href="/About" className="text-gray-600 hover:text-gray-800">About Us</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 py-4">
          <div className="space-y-2 text-center">
            <Link href="/" className="block text-gray-600 hover:text-gray-800">Plant Pots</Link>
            <Link href="/Allproducts" className="block text-gray-600 hover:text-gray-800">Ceramics</Link>
            <Link href="/" className="block text-gray-600 hover:text-gray-800">Tables</Link>
            <Link href="/" className="block text-gray-600 hover:text-gray-800">Chairs</Link>
            <Link href="/" className="block text-gray-600 hover:text-gray-800">Cutlery</Link>
            <Link href="/About" className="block text-gray-600 hover:text-gray-800">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
