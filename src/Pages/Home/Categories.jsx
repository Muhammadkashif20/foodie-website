// import React from "react";
// import pizza from "../../assets/images/pizza.jpg";
// import burger from "../../assets/images/burger.jpg";
// import drinks from "../../assets/images/drinks.jpg";
// import fastfood from "../../assets/images/fastfood.jpg";

// const Categories = () => {
//   const categories = [
//     { name: "Pizza", img: pizza },
//     { name: "Burger", img: burger },
//     { name: "Drinks", img: drinks },
//     { name: "Fast Food", img: fastfood },
//   ];

//   return (
//     <section className="bg-[#0B0B0E] text-white pb-10 px-12">

//       {/* Heading */}
//       <div className="max-w-7xl mx-auto mb-14">
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
//           Explore <span className="text-orange-400">Categories</span>
//         </h2>
//         <p className="text-gray-400 mt-3 max-w-md">
//           Discover your favorite meals from curated food categories.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

//         {categories.map((item, i) => (
//           <div
//             key={i}
//             className="group relative rounded-2xl overflow-hidden cursor-pointer"
//           >

//             {/* Image */}
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
//             />

//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

//             {/* Content */}
//             <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">

//               <h3 className="text-lg font-semibold">
//                 {item.name}
//               </h3>

//               <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-xs">
//                 View
//               </div>

//             </div>

//             {/* Glow Border on Hover */}
//             <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-500/40 transition"></div>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default Categories;

import React, { useState } from "react";
import pizza from "../../assets/images/pizza.jpg";
import burger from "../../assets/images/burger.jpg";
import drinks from "../../assets/images/drinks.jpg";
import fastfood from "../../assets/images/fastfood.jpg";
import pasta from "../../assets/images/pasta.jpg";
import sandwich from "../../assets/images/sandwich.jpg";
import desserts from "../../assets/images/desserts.jpg";
import BBQ from "../../assets/images/BBQ.jpg";

const Categories = () => {

  const categories = [
    { name: "Pizza", img: pizza },
    { name: "Burger", img: burger },
    { name: "Drinks", img: drinks },
    { name: "Fast Food", img: fastfood },
    { name: "Pasta", img: pasta },
    { name: "Sandwich", img: sandwich },
    { name: "Desserts", img: desserts },
    { name: "BBQ", img: BBQ },
  ];

  const itemsPerSlide = 4;

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + itemsPerSlide < categories.length) {
      setStartIndex(startIndex + itemsPerSlide);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerSlide);
    }
  };

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + itemsPerSlide
  );

  return (
    <section className="bg-[#0B0B0E] text-white py-20 px-8 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <h2 className="text-5xl font-bold">
              Explore <span className="text-orange-400">Categories</span>
            </h2>

            <p className="text-gray-400 mt-3">
              Browse curated food collections
            </p>
          </div>

          <button className="border border-white/10 px-5 py-3 rounded-xl">
            View All
          </button>

        </div>


        <div className="relative">

          {/* LEFT */}
          <button
            onClick={handlePrev}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full shadow-xl transition
${startIndex === 0
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-[#16161B] hover:bg-orange-500"
              }`}
          >
            ←
          </button>



          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {visibleCategories.map((item, i) => (

              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-300 mt-1">
                      Popular Category
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-xs">
                    View
                  </div>

                </div>

              </div>

            ))}

          </div>



          {/* RIGHT */}
          <button
            onClick={handleNext}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full shadow-xl transition
${startIndex + itemsPerSlide >= categories.length
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
              }`}
          >
            →
          </button>

        </div>

      </div>

    </section>
  )
}

export default Categories;