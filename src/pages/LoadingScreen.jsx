import React, { useEffect, useState } from "react";
import Logo from '../assets/saco.png';

const LoadingScreen = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 600); // Smooth blinking every 600ms

    const timeout = setTimeout(() => {
      clearInterval(blinkInterval);
      onComplete(); // Call function when loading completes
    }, 3000); // Adjust duration before showing the page

    return () => {
      clearInterval(blinkInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#153d64] z-50">
      <img
        src={Logo}
        alt="Logo"
        className={`transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-30"
        }`}
      />
    </div>
  );
};

export default LoadingScreen;
