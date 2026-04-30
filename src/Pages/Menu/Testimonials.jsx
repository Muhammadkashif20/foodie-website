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
    <section className="bg-[#0B0B0E] text-white py-24 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="text-orange-400">Customers Say</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real feedback from people who love our food and service
          </p>

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, i) => (

            <div
              key={i}
              className="group bg-[#151519] border border-white/5 rounded-3xl p-6 hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              {/* Stars */}
              <div className="text-orange-400 text-lg mb-4">
                {"★".repeat(item.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed">
                “{item.text}”
              </p>


              {/* User */}
              <div className="mt-6 flex items-center justify-between">

                <div>
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <span className="text-xs text-gray-400">
                    {item.role}
                  </span>
                </div>

                {/* avatar circle */}
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
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