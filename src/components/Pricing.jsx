// components/Pricing.js
import React from 'react';
import Tabby from '../assets/tabby.png';
import Tamara from '../assets/tamara.png';

const Pricing = () => {
    return (
        <div className="flex flex-col md:flex-row space-x-5 md:border-t md:border-[#BDC1CAFF] pt-5">
            {/* Regular Price & SAR Price */}
            <div className="flex flex-col md:w-3/10">
                <div className="font-inter text-[19px] leading-[30px] font-semibold text-[#6B6B6BFF]">Price</div>
                <div className="flex items-baseline gap-3 whitespace-nowrap">
                    <div className="font-archivo line-through md:text-[12px] lg:text-[12px] leading-[44px] font-bold text-[#9095A1] flex items-center">
                        <span className="md:text-[12px] lg:text-[12px]">SAR</span>&nbsp;550
                    </div>
                    <div className="font-archivo md:text-[18px] lg:text-[20px] leading-[44px] font-bold text-[#DE3B40] flex items-center">
                        <span className="md:text-[18px] lg:text-[20px]">SAR</span>&nbsp;295
                    </div>
                </div>
            </div>

            {/* Payment Info */}
            <div className="flex md:w-7/10 space-y-4 p-3 md:p-0 rounded-[2px] shadow-[0px_2px_5px_#171a1f17,_0px_0px_2px_#171a1f1F] md:rounded-none md:shadow-none">
                <div className="flex flex-col md:flex-row items-center space-y-4 w-full gap-10">
                    <div className="w-full flex flex-row md:flex-col items-center md:mt-[16px] ">
                        <img src={Tabby} alt="Payment Option" className="w-[120px] h-[46px] object-cover rounded-[2px]" />
                        <div className="font-inter text-left md:text-center text-[18px] leading-[20px] font-normal text-[#7F7F7FFF]">
                            Pay a minimum of SAR 73.75 now, and the rest over time - no late fees, no interest.
                        </div>
                    </div>
                    <div className="w-full flex flex-row md:flex-col items-center">
                        <img src={Tamara} alt="Payment Option" className="w-[120px] h-[46px] object-cover rounded-[2px]" />
                        <div className="font-inter text-left md:text-center text-[18px] leading-[20px] font-normal text-[#7F7F7FFF]">
                            Pay a minimum of SAR 73.75 now, and the rest over time - no late fees, no interest.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
