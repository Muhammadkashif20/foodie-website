import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0E] text-gray-400 pt-20 pb-10 px-6 md:px-12 border-t border-white/5">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-2xl font-bold">
            Foodie<span className="text-orange-400">Hub</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Premium food delivery experience with fast service,
            fresh meals, and trusted restaurants.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">

            <li className="hover:text-orange-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Menu
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              About
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Contact
            </li>

          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>

          <ul className="space-y-3 text-sm">

            <li className="hover:text-orange-400 cursor-pointer transition">
              Help Center
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Terms & Conditions
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Privacy Policy
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>

          <p className="text-sm text-gray-500">
            foodiehub@gmail.com
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Karachi, Pakistan
          </p>

          {/* Social Icons Placeholder */}
          <div className="flex gap-4 mt-6">

            <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-orange-500/20 transition cursor-pointer">
              f
            </div>

            <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-orange-500/20 transition cursor-pointer">
              in
            </div>

            <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-orange-500/20 transition cursor-pointer">
              ig
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 mt-16 pt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} FoodieHub. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;