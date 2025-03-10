import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./App.css";
import ProductSlider from "./pages/ProductSlider";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./pages/LoadingScreen";
import ProductPage from "./pages/ProductPage";

function App() {
  const [loading, setLoading] = useState(true);
  const appRef = useRef(null); // Reference for GSAP animation

  useEffect(() => {
    // Simulate a loading time
    setTimeout(() => {
      setLoading(false); // First, hide the loader
    }, 4000);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Fade in effect only after loading is finished
      gsap.to(appRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "slide.in",
      });
    }
  }, [loading]); // This runs whenever `loading` changes

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div
          ref={appRef}
          className="w-full min-h-screen flex flex-col opacity-0" // Start with opacity 0 for animation
        >
          <TopBar />
          <Navbar />
          <div className="my-5 mx-5 md:mx-10 lg:mx-20 xl:mx-32">
            <ProductPage />
            <h2 className="text-[25px] md:text-[35px] font-bold text-black mt-10">
              Bought Together
            </h2>
            <ProductSlider />
            <h2 className="text-[25px] md:text-[35px] font-bold text-black mt-10">
              Currently on Offers
            </h2>
            <ProductSlider />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
