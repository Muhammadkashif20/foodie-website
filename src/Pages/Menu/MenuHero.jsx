import React from "react";

const MenuHero = () => {
  return (
    <section className="relative text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
          alt="food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 z-10">

        {/* LEFT SIDE */}
        <div>
          <p className="text-orange-400 text-sm tracking-widest uppercase">
            Our Menu
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-3">
            Crafted for Your
            <br />
            <span className="text-orange-400">Taste & Experience</span>
          </h1>

          <p className="text-gray-300 mt-5 max-w-md text-sm md:text-base">
            Explore a selection of carefully curated dishes made with fresh
            ingredients and bold flavors. Every bite is designed to give you a
            memorable dining experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-orange-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-orange-300 transition">
              Explore Menu
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Book Table
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (Image Card Style) */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="dish"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
          />

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
            <p className="text-sm font-semibold">Chef’s Special</p>
            <p className="text-xs text-gray-300">Grilled BBQ Platter</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MenuHero;