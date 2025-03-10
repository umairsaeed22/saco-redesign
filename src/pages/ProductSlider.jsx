import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";  // Import navigation styles
import { Grid, Navigation } from "swiper/modules";  // Import Navigation module
import ProductTile from "../components/ProductTile";
import ProductImageOne from "../assets/productEight.png";
import ProductImageTwo from "../assets/productSeven.png";
import ProductImageThree from "../assets/productThree.png";
import ProductImageFour from "../assets/productFour.jpg";
import ProductImageFive from "../assets/productFive.jpg";
import ProductImageSix from "../assets/productSix.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";  // Importing icons for custom buttons

const products = [
  { id: 1, name: "Micasa Elegant and Modern", price: "295.00", image: ProductImageOne },
  { id: 2, name: "Luxury Wooden Table", price: "499.00", image: ProductImageTwo },
  { id: 3, name: "Modern Dining Set", price: "899.00", image: ProductImageThree },
  { id: 4, name: "Minimalist Chair", price: "199.00", image: ProductImageFour },
  { id: 5, name: "Premium Sofa Set", price: "1299.00", image: ProductImageFive },
  { id: 6, name: "Glass Coffee Table", price: "349.00", image: ProductImageSix },
  { id: 7, name: "Vintage Wooden Desk", price: "599.00", image: ProductImageThree },
  { id: 8, name: "Scandinavian Bookshelf", price: "699.00", image: ProductImageFour },
];

const ProductSlider = () => {
  return (
    <div className="relative my-10">
      <Swiper
        modules={[Grid, Navigation]}  
        spaceBetween={20}  
        breakpoints={{
          340: {
            slidesPerView: 2,  
            grid: { rows: 1, fill: "row" },
          },
          768: {
            slidesPerView: 3,  
            grid: { rows: 1, fill: "row" },
          },
          1024: {
            slidesPerView: 4,  
            grid: { rows: 1, fill: "row" },
          },
          1500: {
            slidesPerView: 6,  
            grid: { rows: 1, fill: "row" },
          }
        }}
        navigation={{
          nextEl: ".swiper-button-next",  
          prevEl: ".swiper-button-prev",  
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductTile product={product} />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="none md:flex swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#153d64] text-white rounded flex items-center justify-center w-10 h-10 z-10">
          <IoIosArrowBack size={8} color="#fff" style={{ strokeWidth: '1px' }}/>
        </div>
        <div className="hidden md:flex swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#153d64] text-white rounded flex items-center justify-center w-10 h-10 z-10 ">
          <IoIosArrowForward size={8} color="#fff" style={{ strokeWidth: '1px' }}/>
        </div>



      </Swiper>
    </div>
  );
};

export default ProductSlider;
