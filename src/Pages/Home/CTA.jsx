import React from "react";

const CTA = () => {
  return (
    <section className="relative bg-[#0B0B0E] text-white py-28 px-6 md:px-12 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-orange-500/20 blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-red-500/20 blur-[140px]" />

      <div className="max-w-5xl mx-auto text-center relative">

        {/* Small urgency */}
        <p className="text-orange-400 text-sm tracking-widest uppercase mb-4">
          Your cravings are waiting
        </p>

        {/* Main emotion heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Feeling Hungry? <br />
          <span className="text-orange-400">Don’t wait for it.</span>
        </h2>

        {/* Human emotional line */}
        <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
          We know that moment when you’re hungry and nothing feels right.
          That’s exactly where we come in — fresh food, delivered fast,
          right when you need it.
        </p>

        {/* Trust line */}
        <p className="text-gray-500 text-sm mt-4">
          No delays. No compromise on taste. Just real food, real fast.
        </p>

        {/* Stats (trust reinforcement) */}
        <div className="flex justify-center gap-12 mt-12">

          <div>
            <p className="text-2xl font-bold text-orange-400">30 min</p>
            <span className="text-xs text-gray-500">Delivery Time</span>
          </div>

          <div>
            <p className="text-2xl font-bold text-orange-400">10K+</p>
            <span className="text-xs text-gray-500">Happy Orders</span>
          </div>

          <div>
            <p className="text-2xl font-bold text-orange-400">4.9★</p>
            <span className="text-xs text-gray-500">User Rating</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

          <button className="bg-orange-500 px-10 py-4 rounded-xl font-medium hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
            I’m Hungry — Order Now
          </button>

          <button className="border border-white/10 px-10 py-4 rounded-xl hover:bg-white/5 transition">
            See Menu First
          </button>

        </div>

        {/* subtle note */}
        <p className="text-gray-600 text-xs mt-8">
          Average delivery time may vary by location
        </p>

      </div>

    </section>
  );
};

export default CTA;