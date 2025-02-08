"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <Link href="/Allproducts">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
          </Link>
        </div>
      </div>
      {/* Story Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 gap-4">
        {/* Left Side */}
        <div className="bg-[#2A254B] text-white p-6 sm:p-8 md:p-16 flex flex-col justify-between w-full md:w-[634px] md:h-[478px] sm:w-[324px] sm:h-[281px] sm:top-[32px] sm:left-[24px]">
          <h1 className="text-base sm:text-lg md:text-2xl font-[\'Clash Display\'] leading-[24px] sm:leading-[28px] md:leading-[32px]">
            It started with a small idea
          </h1>
          <p className="sm:mt-4 font-[\'Satoshi\'] text-xs sm:text-sm md:text-base leading-[18px] sm:leading-[21px] md:leading-[24px]">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
          <button className="mt-6 sm:mt-8 md:mt-10 bg-[#F9F9F926] text-white py-2 px-6 sm:px-8 rounded-sm w-full sm:w-1/2 md:w-40 md:pb-14 md:h-16 h-14 sm:h-10 sm:justify-center bg-input-bg  ">
            View Collection
          </button>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-[634px] md:h-[478px] sm:w-[324px] sm:h-[259px] sm:top-[337px] sm:left-[24px]">
          <img
            src="/images/About1.png"
            alt="Story Section"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div
          className="w-full md:w-1/2 h-[603px] sm:w-[390px] sm:h-[358px] md:h-[603px]"
          style={{ backgroundImage: `url('/images/About2.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
        ></div>
        {/* Right Side Content */}
        <div
          className="w-full md:w-1/2 bg-[#F9F9F9] p-8 md:py-16 md:px-20 flex flex-col justify-between sm:w-[342px] sm:h-[264] "
          style={{ height: "603px" }}
        >
          <h1 className="text-lg md:text-2xl font-[\'Clash Display\'] text-[#505977]">
            Our service isn’t just personal, it’s actually hyper personally exquisite
          </h1>
          <p className="md:mb-44 sm:mb-48 font-[\'Satoshi\'] text-sm md:text-base text-[#505977] leading-[21.6px]">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button
            className="mt-10 bg-white text-[#2A254B] py-2 px-8 rounded-sm"
            style={{ width: "150px", height: "56px" }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="px-4 md:px-8 py-12 text-[#2A254B]" style={{ backgroundColor: "bg-gray-200" }}>
        {/* Title */}
        <h1 className="text-center text-xl md:text-2xl font-semibold">
          What makes our brand different
        </h1>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-5 mt-12 text-base md:text-lg justify-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center md:w-[25%] p-4 bg-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-10 h-10">
              <Image src="/images/Delivery.png" alt="Delivery Icon" width={22} height={22} />
            </div>
            <p className="py-4 font-semibold text-center text-xl">Next day as standard</p>
            <p className="text-center text-xl">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center md:w-[25%] p-4 bg-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-10 h-10">
              <Image src="/images/check.png" alt="Artisan Icon" width={22} height={22} />
            </div>
            <p className="py-4 font-semibold text-center text-xl">Made by true artisans</p>
            <p className="text-center text-xl">
              Hand-crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center md:w-[25%] p-4 bg-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-10 h-10">
              <Image src="/images/Wallet.png" alt="Wallet Icon" width={22} height={22} />
            </div>
            <p className="py-4 font-semibold text-center text-xl">Unbeatable prices</p>
            <p className="text-center text-xl">
              For our material and quality, you won&apos;t find better prices anywhere.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center md:w-[25%] p-4 bg-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-10 h-10">
              <Image src="/images/sprout.png" alt="Sustainability Icon" width={22} height={22} />
            </div>
            <p className="py-4 font-semibold text-center text-xl">Recycled packaging</p>
            <p className="text-center text-xl">
              We use 100% recycled packaging to ensure our footprint is manageable.
            </p>
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-[#2A254B;]  h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
