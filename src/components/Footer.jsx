import React from 'react';
import Logo from '../assets/saco.png';

const Footer = () => {
  return (
    <footer className="bg-[#153d64] text-white py-8">
      <div className="container mx-auto px-6">
        {/* First Row: 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          <div className="col-span-1">
            <img src={Logo} alt="Logo" className="w-32" />
          </div>
          <div className="col-span-1 hidden sm:block">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul>
              <li><a href="#" className="text-sm hover:underline">All</a></li>
              <li><a href="#" className="text-sm hover:underline">Trending</a></li>
              <li><a href="#" className="text-sm hover:underline">Art</a></li>
              <li><a href="#" className="text-sm hover:underline">Furniture</a></li>
              <li><a href="#" className="text-sm hover:underline">Car Accessories</a></li>
              <li><a href="#" className="text-sm hover:underline">Sports</a></li>
              <li><a href="#" className="text-sm hover:underline">Utilities</a></li>
              <li><a href="#" className="text-sm hover:underline">Custom Designs</a></li>
              <li><a href="#" className="text-sm hover:underline">SACO Membership</a></li>
            </ul>
          </div>
          <div className="md:block col-span-1 hidden sm:block">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul>
              <li><a href="#" className="text-sm hover:underline">Blog</a></li>
              <li><a href="#" className="text-sm hover:underline">User Guide</a></li>
              <li><a href="#" className="text-sm hover:underline">Webinars</a></li>
              <li><a href="#" className="text-sm hover:underline">Help Center</a></li>
              <li><a href="#" className="text-sm hover:underline">Partners</a></li>
              <li><a href="#" className="text-sm hover:underline">Taxes</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul>
              <li><a href="#" className="text-sm hover:underline">About Us</a></li>
              <li><a href="#" className="text-sm hover:underline">Join Us</a></li>
              <li><a href="#" className="text-sm hover:underline">Careers</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            {/* 5th Column with heading, paragraph, and email input */}
            <h3 className="text-lg font-semibold">Stay in the loop</h3>
            <p className="text-sm mb-4">Email us for updates and news directly to your inbox.</p>
            <div className="flex sm:flex-row items-center">
              <div className="relative flex-grow max-w-3xl">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 rounded-l-lg bg-transparent border-1 border-white text-white placeholder-white focus:outline-none focus:border-white"
                />
              </div>
              <button
                type="button"
                className="bg-white text-[#153d64] p-2 ml-1  sm:w-auto rounded-r-md relative "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-white pt-5">
          <p className="text-sm">2024 SACO All Rights Reserved CR 1010056595</p>
          {/* Social Media Icons */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
