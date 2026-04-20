import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1F] text-gray-400 py-10 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-6">
        
        <div>
          <h3 className="text-white text-lg font-semibold">FoodHub</h3>
          <p className="mt-2">Best food delivery service</p>
        </div>

        <div>
          <h3 className="text-white">Links</h3>
          <ul className="mt-2 space-y-2">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white">Contact</h3>
          <p className="mt-2">foodhub@gmail.com</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer