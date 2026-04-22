import React from "react";
import pizza from "../../assets/images/pizza.jpg";
import burger from "../../assets/images/burger.jpg";
import drinks from "../../assets/images/drinks.jpg";
import fastfood from "../../assets/images/fastfood.jpg";

const Categories = () => {
  const categories = [
    { name: "Pizza", img: pizza },
    { name: "Burger", img: burger },
    { name: "Drinks", img: drinks },
    { name: "Fast Food", img: fastfood },
  ];

  return (
    <section className="bg-[#0B0B0E] text-white pb-10 px-12">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Explore <span className="text-orange-400">Categories</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-md">
          Discover your favorite meals from curated food categories.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {categories.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
          >

            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">

              <h3 className="text-lg font-semibold">
                {item.name}
              </h3>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-xs">
                View
              </div>

            </div>

            {/* Glow Border on Hover */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-500/40 transition"></div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Categories;