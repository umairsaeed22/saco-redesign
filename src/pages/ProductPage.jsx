import React, { useState } from 'react';
import Breadcrumbs from '../components/BreadCrumbs';
import ProductImageGallery from '../components/ProductImageGallery';
import ProductDetails from '../components/Details';
import Pricing from '../components/Pricing';
import Dimensions from '../components/Dimensions';
import QuantityAddToCart from '../components/Button';
import Description from '../components/Description';

const ProductPage = () => {
    // State to track which section is visible (only for mobile screens)
    const [activeTab, setActiveTab] = useState('description'); // Default is 'description'

    return (
        <div className="flex flex-col min-h-screen">
            <Breadcrumbs />
            
            <div className="flex flex-col md:flex-row md:space-x-5 mt-5 flex-1">
                {/* Image Gallery */}
                <ProductImageGallery className="flex-1" />

                {/* Product Details */}
                <div className="flex flex-col flex-1 space-y-1">
                    <div className="flex justify-between">
                        <div className="font-inter text-[15px] md:text-[19px] leading-[30px] font-bold text-[#9095A1FF]">
                            CHAIR COLLECTION
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1DD75BFF]" />
                            <div className="font-inter text-[15px] md:text-[19px] leading-[5px] font-semibold text-[#1DD75BFF]">
                                inStock
                            </div>
                        </div>
                    </div>

                    <ProductDetails />

                    {/* Toggle buttons (Only for small screens) */}
                    <div className="flex md:hidden space-x-5 my-3 p-1 bg-[#153d64] rounded-md">
                        <button
                            className={`flex-1 px-4 py-2 text-[19px] font-semibold rounded-md transition-all duration-200 ${activeTab === 'description'
                                    ? 'bg-white text-[#153d64]'
                                    : 'bg-[#153d64] text-white'
                                }`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button
                            className={`flex-1 px-4 py-2 text-[19px] font-semibold rounded-md transition-all duration-200 ${activeTab === 'dimensions'
                                    ? 'bg-white text-[#153d64]'
                                    : 'bg-[#153d64] text-white'
                                }`}
                            onClick={() => setActiveTab('dimensions')}
                        >
                            Dimensions
                        </button>
                    </div>

                    {/* Mobile: Show only the selected tab */}
                    <div className="md:hidden">
                        {activeTab === 'description' && <Description />}
                        {activeTab === 'dimensions' && <Dimensions />}
                    </div>

                    {/* Desktop: Show both Description & Dimensions together */}
                    <div className="hidden md:flex md:flex-col space-y-3">
                        <Description />
                        <Dimensions />
                    </div>

                    <Pricing />
                    <QuantityAddToCart />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
