import React, { useState, useEffect } from "react";

const images = [
  "/src/assets/img/banner1.jpg",
  "/src/assets/img/banner2.jpg",
  "/src/assets/img/banner3.jpg",
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] overflow-hidden relative">

      {/* Image */}
      <img
        src={images[index]}
        alt="banner"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center px-6 md:px-16">

        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Hot Deals 🔥<br />
            <span className="text-orange-400">Up to 50% OFF</span>
          </h1>

          <p className="text-gray-200 mt-3 max-w-md">
            Order your favorite meals now and enjoy fast delivery.
          </p>

          <button className="mt-5 bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600">
            Order Now
          </button>
        </div>

      </div>

    </div>
  );
};

export default BannerCarousel;