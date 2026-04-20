import React from 'react'

const WhyChoose = () => {
  const items = [
    "Fast Delivery",
    "Fresh Food",
    "Best Quality",
    "Affordable Prices",
  ];

  return (
    <section className="bg-[#2A2A2E] text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {items.map((item, i) => (
          <div key={i} className="p-6">
            <div className="text-4xl mb-3">⭐</div>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose