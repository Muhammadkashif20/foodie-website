import React from 'react'

const Categories = () => {
  const categories = ["Pizza", "Burger", "Drinks", "Fast Food"];

  return (
    <section className="bg-[#1B1B1F] text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl font-semibold mb-10">Explore Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, i) => (
          <div
            key={i}
            className="bg-[#2A2A2E] p-6 rounded-xl text-center hover:scale-105 transition cursor-pointer"
          >
            <div className="text-4xl mb-3">🍔</div>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories