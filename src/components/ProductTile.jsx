import React from "react";
import { Heart, Share2 } from "lucide-react";
import Rating from '../assets/Rating.png';
import { TbTruckDelivery } from "react-icons/tb";

const ProductTile = ({ product }) => {
    return (
        <div className="bg-[#F8F8F6] rounded-xl shadow-lg overflow-hidden h-full flex flex-col cursor-pointer">
            {/* Product Image & Wishlist */}
            <div className="relative w-full h-48 flex-shrink-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-[#de3b40] text-white text-xs p-1 rounded-md">
                    -20%
                </div>
                <button className="absolute top-2 right-2 p-1 bg-[#fff] rounded-full">
                    <Heart size={18} className="text-[#153d64]" />
                </button>
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow justify-between p-3">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1DD75B]" />
                            <span className="text-[#1DD75B] text-sm font-semibold">In Stock</span>
                        </div>
                        <button className="text-[#153d64] font-bold">
                            <Share2 size={16} strokeWidth={3} />
                        </button>
                    </div>

                    <p className="text-[#153d64] text-sm font-semibold mt-1">Indoor-saco</p>
                    <h2 className="text-gray-900 font-bold text-lg leading-tight h-[45px] overflow-hidden">
                        {product.name}
                    </h2>

                    <p className="text-[#7f7f7f] text-sm mt-1">
                        Deserunt anim cupidatat nisi officia exercitation nostrud ca non
                    </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 my-2">
                    <img src={Rating} alt="Rating" className="w-[100px] h-[20px]" />
                </div>

                {/* Price & Buttons */}
                <div className="mt-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline md:gap-2 md:flex-row flex-col">
                            <span className="font-archivo line-through text-[12px] text-[#9095A1FF]">
                                <span className="text-[12px]">SAR</span> {product.price}
                            </span>
                            <span className="font-archivo text-[18px] font-bold text-[#DE3B40FF]">
                                <span className="text-[14px]">SAR</span> {product.price}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                    <div className="mt-2 text-[#153d64] text-sm flex items-center gap-1 mb-2">
                            <TbTruckDelivery size={16} /> Standard Delivery
                        </div>

                        <button className="w-full bg-[#153d64] text-white text-sm rounded-md px-3 py-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTile;
