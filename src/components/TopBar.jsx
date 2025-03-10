import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; // Added FaTimes for the close icon
import Logo from '../assets/saco.png';
import { useState, useEffect } from 'react';

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu toggle

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Disable/Enable body scroll based on menu state
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Disable scroll when menu is open
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // Also lock the html element to prevent scrolling
    } else {
      // Enable scroll when menu is closed
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto'; // Allow scrolling again on html element
    }

    // Clean up by resetting overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <div>
      {/* Desktop and above: Logo, Search Bar, and Icons (without Cart) */}
      <div className="hidden md:flex bg-[#153D64FF] text-white px-6 py-4 justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <img src={Logo} alt="SACO Logo" />
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow max-w-lg mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 rounded-lg bg-white text-black focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        {/* Icons (without Cart in desktop view) */}
        <div className="flex gap-6">
          <button className="flex items-center gap-2 cursor-pointer">
            <span>SACO CLUB</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer">
            <span>Help</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer">
            <span>My Account</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer">
            <FaShoppingCart className="text-lg" /> {/* Shopping cart icon in mobile menu */}
          </button>
        </div>
      </div>

      {/* Mobile View: Logo, Hamburger Menu, and Cart Button */}
      <div className="md:hidden bg-[#153D64FF] text-white px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <img src={Logo} alt="SACO Logo" />
        </div>

        {/* Hamburger Menu and Cart Button */}
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 cursor-pointer">
            <FaShoppingCart className="text-lg" /> {/* Shopping cart icon in mobile menu */}
          </button>

          <button onClick={toggleMobileMenu} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default, shown when hamburger is clicked) */}
      <div 
        className={`w-full md:hidden bg-[#F8F8F6] text-white px-6 py-4 fixed top-[40] right-0 w-64 h-full transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 1000 }}
      >
        {/* Close Button (X) */}
        <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-2xl text-[#153D64FF]">
          <FaTimes />
        </button>

        <div className="flex flex-col gap-4 mt-1"> {/* Added mt-16 to ensure the menu starts below the top bar */}
          {/* Existing Menu Items */}
          <button className="flex items-center gap-2 cursor-pointer text-[#153D64FF]">
            <span>SACO CLUB</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer text-[#153D64FF]">
            <span>Help</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer text-[#153D64FF]">
            <span>My Account</span>
          </button>

          {/* New Menu Items */}
          {[
            "All",
            "Offers",
            "Exclusive at SACO",
            "SACO Catalogues",
            "Appliances",
            "Outdoor & Garden",
            "Tools & Hardware",
            "Home & Kitchen",
            "Store Locator",
          ].map((item, index) => (
            <button key={index} className="flex items-center gap-2 cursor-pointer text-[#153D64FF]">
              <span>{item}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
