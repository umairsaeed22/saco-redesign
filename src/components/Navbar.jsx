const Navbar = () => {
    return (
      <div className="hidden md:flex w-full h-[82px] bg-[#F3F4F6FF] shadow-md flex items-center px-10 justify-center">
        <nav className="flex gap-6 whitespace-nowrap">
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
            <span key={index} className="text-[18px] font-bold text-[#7F7F7FFF] leading-[28px] cursor-pointer hover:text-black transition">
              {item}
            </span>
          ))}
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  