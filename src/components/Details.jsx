// components/ProductDetails.js
import React from 'react';
import Rating from '../assets/Rating.png';

const ProductDetails = () => {
    return (
        <div className="flex flex-col w-full space-y-1">
            {/* Product Title */}
            <div className="font-archivo text-[24px] mb-0 leading-[36px] font-bold text-[#171A1FFF]">
                Micasa Elegant and Modern Design Two Arm Dining Chair Blue DC336
            </div>

            {/* Estimated Delivery */}
            <div className="mb-0 font-inter text-[16px] leading-[30px] font-normal text-[#153D64FF]">
                Estimated Delivery: Thursday, 06 March
            </div>

            {/* Reviews */}
            <div className="flex items-center font-inter text-[19px] leading-[30px] font-normal text-neutral-500">
                <img src={Rating} alt="Product Image 3" className="w-[100px] h-[20px] object-cover" />
                <span className='text-[#9095A1FF] text-sm mt-[4px]'>
                    <span className='text-[#000] font-bold text-sm mt-[4px]'>4.0</span> (538)
                </span>
            </div>
        </div>
    );
};

export default ProductDetails;
