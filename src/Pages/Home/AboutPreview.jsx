import React from "react";
import aboutImg from "../../assets/images/foodieHub_Logo.png";

const AboutPreview = () => {
  return (
    <section className="bg-[#0B0B0E] text-white pb-10 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE SIDE */}
        <div className="relative group">

          {/* Main Image */}
          <img
            src={aboutImg}
            alt="about"
            className="w-full h-[400px] object-cover rounded-3xl shadow-2xl transition duration-500 group-hover:scale-[1.03]"
          />

          {/* overlay glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Floating badge */}
          <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs">
            ⭐ Trusted by 10K+ Users
          </div>

          {/* hover hint card */}
          <div className="absolute bottom-5 left-5 right-5 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">

            <p className="text-sm text-gray-300">
              “We don’t just deliver food — we deliver experience.”
            </p>

          </div>

        </div>


        {/* CONTENT SIDE */}
        <div>

          {/* Label */}
          <span className="text-orange-400 text-sm tracking-widest uppercase">
            Our Story
          </span>

          {/* HERO STYLE HEADING */}
          <h2 className="text-5xl md:text-6xl font-bold mt-5 leading-[1.05] tracking-tight">
            Built for Food Lovers<br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
              Premium Experience
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-6 leading-relaxed max-w-md text-lg">
            We started with a simple idea — make food delivery feel premium,
            fast and reliable for everyone. From local kitchens to top restaurants,
            we bring taste to your doorstep.
          </p>


          {/* Highlight Cards */}
          <div className="grid grid-cols-3 gap-4 mt-8">

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
              <p className="text-orange-400 font-bold text-lg">10K+</p>
              <p className="text-xs text-gray-400">Orders</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
              <p className="text-orange-400 font-bold text-lg">500+</p>
              <p className="text-xs text-gray-400">Restaurants</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
              <p className="text-orange-400 font-bold text-lg">4.9★</p>
              <p className="text-xs text-gray-400">Rating</p>
            </div>

          </div>


          {/* CTA */}
          <button className="mt-10 group bg-orange-500 px-7 py-4 rounded-xl font-medium hover:bg-orange-600 transition flex items-center gap-2 shadow-lg shadow-orange-500/20">

            Explore Our Story

            <span className="group-hover:translate-x-1 transition">
              →
            </span>

          </button>

        </div>

      </div>

    </section>
  );
};

export default AboutPreview;