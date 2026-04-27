import React from "react";
import { FaSearch, FaStar } from "react-icons/fa";

const MenuHero = () => {
  return (
    <section className="bg-[#0B0B0E] text-white pt-36 pb-24 px-6 md:px-12 overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-orange-500/20 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-red-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">

        {/* Left */}
        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
            🍽 Curated Menu Collection
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Explore Our
            <br />
            <span className="text-orange-400">
              Signature Menu
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl leading-relaxed text-lg">
            Discover handcrafted meals, chef specials and trending dishes
            prepared fresh every day.
          </p>


          {/* Search */}
          <div className="mt-10 flex bg-[#151519] border border-white/10 rounded-2xl overflow-hidden max-w-xl">

            <div className="px-5 flex items-center text-gray-500">
              <FaSearch/>
            </div>

            <input
              type="text"
              placeholder="Search burgers, pizza, drinks..."
              className="bg-transparent w-full py-4 outline-none text-sm"
            />

            <button className="bg-orange-500 px-7 hover:bg-orange-600 transition font-medium">
              Search
            </button>

          </div>


          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8">

            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              Pizza
            </span>

            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              Burgers
            </span>

            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              BBQ
            </span>

            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              Desserts
            </span>

          </div>

        </div>


        {/* Right Feature Card */}
        <div className="relative flex justify-center">

          <div className="w-full max-w-md bg-[#151519] border border-white/10 rounded-3xl p-6 shadow-2xl">

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/food.png"
                alt="featured food"
                className="w-full h-[320px] object-cover"
              />

              <div className="absolute top-5 left-5 bg-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                30% OFF Today
              </div>
            </div>


            <div className="mt-6 flex justify-between items-center">

              <div>
                <h3 className="text-2xl font-semibold">
                  Premium Burger
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Fresh • Grilled • Signature
                </p>
              </div>

              <div className="text-right">
                <p className="text-orange-400 font-bold text-xl">
                  Rs 850
                </p>

                <p className="text-sm flex items-center gap-1 mt-1">
                  <FaStar className="text-yellow-400"/>
                  4.9
                </p>
              </div>

            </div>

          </div>


          {/* Floating mini card */}
          <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-xs text-gray-400">
              Most Ordered Today
            </p>
            <h4 className="font-semibold mt-1">
              1.2k Orders
            </h4>
          </div>

        </div>

      </div>

    </section>
  );
};

export default MenuHero;