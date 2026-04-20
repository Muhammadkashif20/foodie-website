import React from 'react'

const AboutPreview = () => {
  return (
    <section className="bg-[#1B1B1F] text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
      
      <img src="/about.png" className="w-80 rounded-lg" />

      <div>
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="text-gray-400 mt-4">
          We provide high quality food with fast delivery service and amazing taste.
        </p>
        <button className="mt-6 px-5 py-2 bg-orange-500 rounded-lg hover:bg-orange-600">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutPreview