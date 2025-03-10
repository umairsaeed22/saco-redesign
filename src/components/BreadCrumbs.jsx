// components/Breadcrumbs.js
import React from 'react';

const Breadcrumbs = () => {
    return (
        <div className="text font-inter md:text-[18px] text-sm md:leading-[28px] font-normal text-neutral-500">
            <ul className="flex space-x-1 flex-wrap md:flex-nowrap">
                <li className="breadcrumb-item">
                    <a href="/" className="text-neutral-500 hover:text-neutral-700">Home</a>
                    <span className="mx-2">/</span>
                </li>
                <li className="breadcrumb-item">
                    <a href="/home-and-kitchen" className="text-neutral-500 hover:text-neutral-700">Home & Kitchen</a>
                    <span className="mx-2">/</span>
                </li>
                <li className="breadcrumb-item">
                    <a href="/chair-collection" className="text-neutral-500 hover:text-neutral-700">Chair Collection</a>
                    <span className="mx-2">/</span>
                </li>
                <li className="breadcrumb-item">
                    <span className="text-[#153D64FF]">Micasa Elegant and Modern Design</span>
                </li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;
