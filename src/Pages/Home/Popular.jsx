import React from 'react'

const Popular = () => {
  const foods = [1, 2, 3, 4];

  return (
    <section className="bg-[#1B1B1F] text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl font-semibold mb-10">Popular Dishes</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {foods.map((_, i) => (
          <div
            key={i}
            className="bg-[#2A2A2E] rounded-xl p-4 hover:scale-105 transition"
          >
            <img src="/food.png" className="rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">Burger</h3>
            <p className="text-orange-400">Rs. 500</p>
            <button className="mt-3 w-full bg-orange-500 py-2 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular