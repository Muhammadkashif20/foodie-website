import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Ali Raza",
      text: "Food quality is amazing and delivery is always on time. Feels like a premium service!",
      rating: 5,
      role: "Regular Customer",
    },
    {
      name: "Sara Khan",
      text: "Best food delivery experience I’ve ever had. Everything is fresh and well packed.",
      rating: 5,
      role: "Food Lover",
    },
    {
      name: "Muhammad Kashif",
      text: "UI is clean and ordering is super easy. Really impressed with service speed.",
      rating: 4,
      role: "New User",
    },
  ];

  return (
    <section className="relative bg-[#0B0B0E] text-white py-24 px-6 md:px-12 overflow-hidden">

      {/* soft background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-orange-400 text-xs tracking-[0.3em] uppercase">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What Our <span className="text-orange-400">Customers Say</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            Real feedback from people who experienced our food, service, and
            quality firsthand.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, i) => (

            <div
              key={i}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition duration-300 shadow-xl group"
            >

              {/* quote icon */}
              <div className="text-orange-400 text-4xl opacity-20 absolute top-4 right-5">
                ❝
              </div>

              {/* Stars */}
              <div className="text-orange-400 text-sm mb-4 tracking-wide">
                {"★".repeat(item.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>

              {/* Bottom user */}
              <div className="mt-8 flex items-center justify-between">

                <div>
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <span className="text-xs text-gray-400">
                    {item.role}
                  </span>
                </div>

                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold border border-orange-500/20 group-hover:scale-110 transition">
                  {item.name.charAt(0)}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;