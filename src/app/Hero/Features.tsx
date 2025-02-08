import Image from "next/image";
import React from "react";


const Brand = () => {
  return (
<section>
<div className="px-4 md:px-8 text-[#2A254B] mt-32">
  {/* Title */}
  <h1 className="text-center text-xl md:text-2xl font-semibold">
    What makes our brand different
  </h1>

  {/* Features */}
  <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
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
</section>
  )};
export default Brand;
