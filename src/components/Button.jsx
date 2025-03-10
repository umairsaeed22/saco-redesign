import React, { useState } from 'react';

const QuantityAddToCart = () => {
    const [quantity, setQuantity] = useState(1);

    // Decrease quantity (minimum value is 1)
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Increase quantity
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    // Handle manual input
    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d+$/.test(value) || value === '') {  // Allow only numbers
            setQuantity(value === '' ? '' : Math.max(1, parseInt(value))); // Prevent less than 1
        }
    };

    return (
        <div className="flex justify-center md:justify-end space-x-4 mt-5 md:border-t md:border-b md:border-[#BDC1CAFF] md:py-5">
            {/* Quantity Control */}
            <div className="flex items-center justify-center space-x-4">
                <button 
                    className="bg-[#153d64] text-[#fff] py-2 px-4 rounded-sm border border-[#153D64] shadow-md"
                    onClick={handleDecrease}
                >
                    -
                </button>
                <input
                    type="text"
                    className="font-inter py-2 px-4 border rounded-sm border-[#153D64] text-[19px] leading-[30px] font-normal text-[#153D64] w-12 text-center"
                    value={quantity}
                    onChange={handleInputChange}
                />
                <button 
                    className="bg-[#153d64] text-[#fff] py-2 px-4 rounded-sm border border-[#153D64] shadow-md"
                    onClick={handleIncrease}
                >
                    +
                </button>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-[#153D64] text-white py-2 px-6 rounded-[26px] border border-[#153D64] shadow-md">
                Add to Cart
            </button>
        </div>
    );
};

export default QuantityAddToCart;
