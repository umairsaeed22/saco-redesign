// components/Dimensions.js
import React from 'react';

const Dimensions = () => {
    return (
        <div className="flex flex-col space-y-4 md:border-t md:border-[#BDC1CAFF] pt-5 pt-5">
            <div className="font-inter text-[19px] leading-[30px] font-bold text-[#585858]">DIMENSIONS</div>
            <div className="flex space-x-5">
                <div className="flex flex-col w-1/2">
                    <div className="font-inter text-[19px] leading-[30px] font-normal text-[#7F7F7F]">
                        Product dimensions:
                        <br />
                        Product weight:
                        <br />
                        Packaged or boxed weight:
                    </div>
                </div>
                <div className="flex flex-col w-1/2">
                    <div className="font-inter text-[14px] leading-[30px] font-bold text-[#171A1F]">
                        H84.5 x W64 x D75cm / H33.3 x W25.2 x D29.5<br />
                        15.6kg / 34.4lbs<br />
                        23.6kg / 52lbs
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dimensions;
