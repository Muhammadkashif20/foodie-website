import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#0F0F12] text-white overflow-hidden">

      {/* Background Gradient Blur */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-red-500/20 blur-[120px] bottom-[-100px] right-[-100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-block px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm mb-6">
            🚀 Fastest Food Delivery in Your City
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Experience Food <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
              Like Never Before
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 mt-6 max-w-lg text-lg">
            Discover top-quality meals from the best restaurants near you.
            Fast delivery, fresh ingredients, and unbeatable taste.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition">
              Explore Menu
            </button>

            <button className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-lg transition">
              View Offers
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 text-sm text-gray-400">
            <div>
              <h3 className="text-white text-xl font-semibold">500+</h3>
              Restaurants
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">10k+</h3>
              Orders Daily
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">4.8⭐</h3>
              Rating
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE + CARD */}
        <div className="relative">

          <img
            src="/hero.png"
            alt="food"
            className="w-full max-w-md mx-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          />

          {/* Floating Glass Card */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 w-[80%]">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-semibold">Zinger Burger</h4>
                <p className="text-xs text-gray-300">Rs. 500</p>
              </div>
              <button className="bg-orange-500 px-3 py-1 rounded-lg text-sm">
                Add
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;