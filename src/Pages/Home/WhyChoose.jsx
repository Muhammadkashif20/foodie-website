import React from "react";

const WhyChoose = () => {

  const items = [
    {
      title: "Lightning Fast Delivery",
      desc: "Hot meals delivered in under 30 minutes with real-time tracking.",
      icon: "⚡",
    },
    {
      title: "Fresh Ingredients",
      desc: "We partner with top kitchens to ensure daily fresh preparation.",
      icon: "🥗",
    },
    {
      title: "Premium Quality",
      desc: "Carefully selected restaurants with top hygiene standards.",
      icon: "🏆",
    },
    {
      title: "Best Pricing",
      desc: "Restaurant-quality food at prices everyone can enjoy.",
      icon: "💰",
    },
  ];

  return (
    <section className="bg-[#0B0B0E] text-white py-28 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE (STORY STYLE) */}
        <div>

          <span className="text-orange-400 text-sm tracking-widest uppercase">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Built for Speed,<br />
            Designed for <span className="text-orange-400">Trust</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-md">
            We are not just another food delivery service. We focus on
            speed, quality, and experience that feels premium every time.
          </p>

          {/* small highlight stats */}
          <div className="flex gap-8 mt-10">

            <div>
              <p className="text-2xl font-bold text-orange-400">30min</p>
              <span className="text-xs text-gray-500">Avg Delivery</span>
            </div>

            <div>
              <p className="text-2xl font-bold text-orange-400">10K+</p>
              <span className="text-xs text-gray-500">Happy Users</span>
            </div>

            <div>
              <p className="text-2xl font-bold text-orange-400">4.9★</p>
              <span className="text-xs text-gray-500">Rating</span>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE (CARDS GRID) */}
        <div className="grid grid-cols-2 gap-6">

          {items.map((item, i) => (

            <div
              key={i}
              className="group bg-[#151519] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 hover:-translate-y-1 transition duration-300"
            >

              <div className="text-3xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;