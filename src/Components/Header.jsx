import React from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-3 cursor-pointer">

              <div
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg"
              >
                <GiKnifeFork className="text-orange-400 text-xl"/>
              </div>

              <h1 className="text-white text-2xl font-bold tracking-wide">
                Foodie
                <span className="text-orange-400">Hub</span>
              </h1>

            </div>
          </Link>


          {/* Nav */}
          <nav className="hidden md:flex gap-8 text-gray-200 text-sm font-medium">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>

            <Link to="/menu" className="hover:text-orange-400 transition">
              Menu
            </Link>

            <Link to="/deals" className="hover:text-orange-400 transition">
              Deals
            </Link>

            <Link to="/about" className="hover:text-orange-400 transition">
              About
            </Link>
          </nav>


          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-lg">
            Order Now
          </button>

        </div>

      </header>
    </>
  );
};

export default Header;