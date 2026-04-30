import React from "react";

const AboutHero = () => {
  return (
    <section className="relative text-white pt-32 pb-24 px-6 md:px-12 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
          alt="restaurant team"
          className="w-full h-full object-cover scale-110"
        />

        {/* Cinematic layered overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

        {/* warm food tone */}
        <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-14 z-10">

        {/* LEFT SIDE */}
        <div>

          <p className="text-orange-400 text-xs tracking-[0.3em] uppercase">
            Since 2015 • Our Story
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
            Cooking With Passion,<br />
            <span className="text-orange-400">Serving With Heart</span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-md text-sm md:text-base leading-relaxed">
            What started as a small kitchen dream has now become a place where
            flavors meet emotions. Every dish we serve carries a story of hard
            work, dedication, and love for food.
          </p>

          {/* Divider line */}
          <div className="w-20 h-[2px] bg-orange-400 mt-6 mb-6"></div>

          {/* Stats (more realistic layout) */}
          <div className="grid grid-cols-3 gap-6 mt-8">

            <div>
              <h3 className="text-2xl font-bold text-orange-400">10+</h3>
              <p className="text-xs text-gray-400 mt-1">Years Journey</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-400">50+</h3>
              <p className="text-xs text-gray-400 mt-1">Professional Chefs</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-400">1K+</h3>
              <p className="text-xs text-gray-400 mt-1">Daily Customers</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Main image */}
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
            alt="chef cooking"
            className="rounded-3xl shadow-2xl object-cover w-full h-[430px] transform hover:scale-[1.02] transition duration-500"
          />

          {/* Soft glow */}
          <div className="absolute -inset-3 rounded-3xl bg-orange-500/10 blur-3xl -z-10"></div>

          {/* Floating real-life card */}
          <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-xl px-5 py-4 rounded-2xl border border-white/10">

            <p className="text-sm font-semibold">Live Kitchen</p>

            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <p className="text-xs text-gray-300">
                Cooking in real-time
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;