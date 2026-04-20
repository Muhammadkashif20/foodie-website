import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0F0F12] text-white min-h-screen flex items-center px-6">

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <span className="inline-block px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm mb-6">
            🚀 Fast & Premium Food Delivery
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Food Delivery <br />
            Built Like a <span className="text-orange-400">Product</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-md">
            Order from top restaurants with a smooth, fast and premium experience.
            Fresh meals delivered in minutes.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition">
              Explore Menu
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
              View Offers
            </button>
          </div>

        </div>

        {/* RIGHT SIDE (FIXED PROPER CENTER CARD STYLE) */}
        <div className="flex justify-center">

          <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">

            <img
              src="/hero.png"
              alt="food"
              className="w-full object-contain"
            />

            {/* Product Card */}
            <div className="mt-6 bg-white/10 border border-white/10 p-4 rounded-xl flex justify-between items-center">

              <div>
                <h3 className="font-semibold">Zinger Burger</h3>
                <p className="text-gray-400 text-sm">Fresh • Spicy • Hot</p>
              </div>

              <div className="text-right">
                <p className="text-orange-400 font-bold">Rs. 500</p>
                <button className="mt-1 bg-orange-500 px-3 py-1 rounded-lg text-sm hover:bg-orange-600">
                  Add
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;