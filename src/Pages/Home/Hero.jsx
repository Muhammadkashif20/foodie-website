import React from "react";
import foodDelivery from "../../assets/images/foodDeliverysm_logo.jpg"
const Hero = () => {
  return (
    <section className="relative bg-[#0B0B0E] text-white min-h-screen flex items-center overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-orange-500/20 blur-[120px]"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-red-500/20 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm mb-6 backdrop-blur-md">
            🚀 Fast & Premium Food Delivery
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Crafted Food <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h1>

          {/* Desc */}
          <p className="text-gray-400 mt-6 max-w-lg text-lg leading-relaxed">
            Not just food delivery — a premium product experience.
            Discover curated meals from top restaurants, delivered fast.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <button className="bg-orange-500 px-7 py-3 rounded-xl font-medium hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
              Explore Menu
            </button>

            <button className="border border-white/10 px-7 py-3 rounded-xl hover:bg-white/5 transition backdrop-blur-md">
              View Offers
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <p className="text-2xl font-semibold">500+</p>
              <span className="text-gray-400 text-sm">Restaurants</span>
            </div>
            <div>
              <p className="text-2xl font-semibold">10K+</p>
              <span className="text-gray-400 text-sm">Orders Daily</span>
            </div>
            <div>
              <p className="text-2xl font-semibold">4.8<span className="text-yellow-400">★</span></p>
              <span className="text-gray-400 text-sm">Rating</span>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* Glass Card Container */}
          <div className=" w-full max-w-md h-[100px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

            <img
              src={foodDelivery}
              alt="food"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Floating Product Card */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#111] border border-white/10 p-4 rounded-2xl flex justify-between items-center shadow-xl">

            <div>
              <h3 className="font-semibold text-sm">Zinger Burger</h3>
              <p className="text-gray-400 text-xs">Fresh • Spicy • Hot</p>
            </div>

            <div className="text-right">
              <p className="text-orange-400 font-bold text-sm">Rs. 500</p>
              <button className="mt-1 bg-orange-500 px-3 py-1 rounded-lg text-xs hover:bg-orange-600 transition">
                Add
              </button>
            </div>

          </div>

        </div>

        {/* Small Floating Badge */}
        <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs shadow">
          ⭐ Top Rated
        </div>

      </div>

    </div>
    </section >
  );
};

export default Hero;