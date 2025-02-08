
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#251742] text-white">
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Menu */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Menu</h2>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">New arrivals</Link></li>
                <li><Link href="#" className="hover:underline">Best sellers</Link></li>
                <li><Link href="#" className="hover:underline">Recently viewed</Link></li>
                <li><Link href="#" className="hover:underline">Popular this week</Link></li>
                <li><Link href="#" className="hover:underline">All products</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Categories</h2>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Crockery</Link></li>
                <li><Link href="#" className="hover:underline">Furniture</Link></li>
                <li><Link href="#" className="hover:underline">Homeware</Link></li>
                <li><Link href="#" className="hover:underline">Plant pots</Link></li>
                <li><Link href="#" className="hover:underline">Chairs</Link></li>
              </ul>
            </div>

            {/* Our Company */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Our Company</h2>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About us</Link></li>
                <li><Link href="#" className="hover:underline">Vacancies</Link></li>
                <li><Link href="#" className="hover:underline">Contact us</Link></li>
                <li><Link href="#" className="hover:underline">Privacy</Link></li>
                <li><Link href="#" className="hover:underline">Returns policy</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Join our mailing list</h2>
              <form action="#" className="flex items-center">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-l bg-[#3b3361] text-white placeholder-gray-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 justify-between py-2 bg-white text-[#251742] rounded-r w-[20%] md:w-[100] h-[40] hover:bg-gray-200"
                >


                  {/* md:w-[509px] h-[56px] outline-none bg-[#FFFFFF26] pb-1 w-[70%] pl-4  */}
                  {/* text-[#2A254B] w-[30%] md:w-[118px] h-[56px]  bg-[#FFFFFF]  */}
                  Sign up
                </button>
              </form>
            </div>
          </div>

          <hr className="my-6 border-gray-600" />

          <div className="flex justify-between items-center flex-wrap">
            <p className="text-sm">© 2022 Avion LTD</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></Link>
              <Link href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></Link>
              <Link href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></Link>
              <Link href="#" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></Link>
              <Link href="#" className="hover:text-gray-300"><i className="fab fa-pinterest"></i></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
