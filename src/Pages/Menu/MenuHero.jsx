import React from "react";
import Image1 from "../../assets/images/menu1.jpg";
import Image2 from "../../assets/images/menu2.jpg";
const MenuHero = () => {
  return (
    <section className="relative text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Image1}
          alt="food"
          className="w-full h-full object-cover scale-105"
        />

        {/* Dark Gradient Overlay (main fix) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />

        {/* Extra color tint for better contrast */}
        <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 z-10">

        {/* LEFT SIDE */}
        <div>
          <p className="text-orange-400 text-sm tracking-widest uppercase">
            Our Menu
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
            Crafted for Your <br />
            <span className="text-orange-400">Taste & Experience</span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-md text-sm md:text-base leading-relaxed">
            Explore a selection of carefully curated dishes made with fresh
            ingredients and bold flavors. Every bite is designed to give you a
            memorable dining experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-orange-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-orange-300 transition shadow-lg shadow-orange-500/20">
              Explore Menu
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition backdrop-blur-sm">
              Book Table
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Image */}
          <img
            src={Image2}
            alt="dish"
            className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
          />

          {/* Dark glass overlay on image (important fix) */}
          <div className="absolute inset-0 rounded-2xl bg-black/20"></div>

          {/* Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-orange-500/10 blur-2xl -z-10"></div>

          {/* Floating Card */}
          <div className="absolute bottom-5 left-5 bg-black/40 backdrop-blur-lg px-5 py-4 rounded-2xl border border-white/10">
            <p className="text-sm font-semibold">Chef’s Special</p>
            <p className="text-xs text-gray-300 mt-1">
              Grilled BBQ Platter
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MenuHero;