import React from 'react'

const Testimonials = () => {
  return (
    <section className="bg-[#2A2A2E] text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-[#1B1B1F] p-6 rounded-xl">
            <p className="text-gray-400">
              Amazing food and super fast delivery. Highly recommended!
            </p>
            <h4 className="mt-4 font-semibold">Kashif</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials