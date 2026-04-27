import React from "react";
import { FaSearch, FaFire, FaClock, FaShieldAlt } from "react-icons/fa";

const MenuHero = () => {
  return (
    <section className="bg-[#0B0B0E] text-white pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-100px] w-[280px] h-[280px] bg-orange-500/20 blur-[120px]" />
      <div className="absolute right-[-100px] bottom-[-100px] w-[250px] h-[250px] bg-red-500/20 blur-[120px]" />

      <div className="max-w-5xl mx-auto text-center relative">

        {/* Live strip (REALISTIC TOUCH) */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs mb-6">
          <FaFire className="text-orange-400 animate-pulse" />
          Live: New items added today
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover Your <br />
          <span className="text-orange-400">Favorite Food</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 mt-5 max-w-xl mx-auto">
          Search dishes and explore categories built for your taste.
        </p>

        {/* SEARCH */}
        <div className="mt-10 flex bg-[#151519] border border-white/10 rounded-2xl overflow-hidden max-w-2xl mx-auto">

          <div className="px-5 flex items-center text-gray-500">
            <FaSearch />
          </div>

          <input
            type="text"
            placeholder="Search pizza, burgers, drinks..."
            className="bg-transparent w-full py-4 outline-none text-sm"
          />

          <button className="bg-orange-500 px-6 hover:bg-orange-600 transition">
            Search
          </button>
        </div>

        {/* Category chips */}
        <div className="flex gap-3 mt-8 justify-center flex-wrap">
          {["All", "Pizza", "Burgers", "BBQ", "Desserts"].map((item, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* TRUST STRIP (REAL FEEL ADDITION) */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-400">

          <div className="flex items-center gap-2">
            <FaClock className="text-orange-400" />
            Fresh Updated Menu
          </div>

          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-orange-400" />
            Safe & Verified Items
          </div>

          <div className="flex items-center gap-2">
            ⭐ 4.8 User Rating
          </div>

        </div>

      </div>
    </section>
  );
};

export default MenuHero;