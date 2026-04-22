import React from "react";
import {
 FaFacebookF,
 FaInstagram,
 FaLinkedinIn,
 FaTwitter,
 FaMapMarkerAlt,
 FaEnvelope,
 FaPhoneAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0E] text-gray-400 border-t border-white/5">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-14 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Foodie<span className="text-orange-400">Hub</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500">
            Premium food delivery experience with fresh meals,
            fast delivery and trusted restaurants.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#151519] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#151519] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#151519] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#151519] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition"
            >
              <FaTwitter />
            </a>

          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="hover:text-orange-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Menu
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              About Us
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Contact
            </li>

          </ul>
        </div>


        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Support
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="hover:text-orange-400 cursor-pointer transition">
              Help Center
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Privacy Policy
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Terms & Conditions
            </li>

          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" />
              <span>foodiehub@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-400" />
              <span>+92 300 1234567</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-400" />
              <span>Karachi, Pakistan</span>
            </div>

          </div>


          {/* Newsletter mini block */}
          <div className="mt-8">
            <p className="text-sm mb-3 text-white">
              Subscribe for offers
            </p>

            <div className="flex bg-[#151519] rounded-xl border border-white/10 overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent px-4 py-3 text-sm w-full outline-none"
              />
              <button className="text-white text-semibold bg-orange-500 px-5 hover:bg-orange-600 transition">
                Join
              </button>
            </div>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} FoodieHub — All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;