import React, { useState } from "react";
import { Heart } from "lucide-react"; // Import Heart Icon
import HeaderImage from "../assets/Header.png";
import ChildOne from "../assets/childOne.png";
import ChildTwo from "../assets/childTwo.png";

const ProductImageGallery = () => {
  const [mainImage, setMainImage] = useState(HeaderImage);
  const [isOriginal, setIsOriginal] = useState(true);

  const handleImageClick = (image) => {
    setMainImage(image);
    setIsOriginal(false);
  };

  const resetMainImage = () => {
    if (!isOriginal) {
      setMainImage(HeaderImage);
      setIsOriginal(true);
    }
  };

  return (
    <div className="flex flex-col flex-1 w-full md:w-1/2">
      {/* Main Product Image */}
      <div className="relative w-full flex-1" onClick={resetMainImage}>
        {/* Discount Label */}
        <div className="absolute top-2 left-2 bg-[#de3b40] text-white text-xs p-1 rounded-md">
          -20%
        </div>

        {/* Favorite Button */}
        <button className="absolute top-2 right-2 p-1 bg-[#fff] rounded-full shadow-md">
          <Heart size={18} className="text-[#153d64]" />
        </button>

        <img
          src={mainImage}
          alt="Main Product"
          className="w-full h-full object-cover rounded-2xl border-2 border-transparent hover:border-[#153d64] cursor-pointer"
        />
      </div>

      {/* Child Images (Below Main Image) */}
      <div className="flex space-x-3 mt-3 flex-1">
        <div className="w-1/2 flex-1">
          <img
            src={ChildOne}
            alt="Product Image 2"
            className="w-full h-full object-cover rounded-2xl border-2 border-transparent hover:border-[#153d64] cursor-pointer"
            onClick={() => handleImageClick(ChildOne)}
          />
        </div>
        <div className="w-1/2 flex-1">
          <img
            src={ChildTwo}
            alt="Product Image 3"
            className="w-full h-full object-cover rounded-2xl border-2 border-transparent hover:border-[#153d64] cursor-pointer"
            onClick={() => handleImageClick(ChildTwo)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
