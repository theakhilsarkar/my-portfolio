"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-bold">
          Luke<span className="text-green-400">.</span>
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-8 items-center text-sm font-mono">
          {["Home", "Services", "Resume", "Work", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`relative group ${
                  item === "Contact" ? "text-green-400" : ""
                }`}
              >
                {item}
                {item === "Contact" && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-400"></span>
                )}
              </a>
            )
          )}

          {/* HIRE ME BUTTON */}
          <a
            href="#contact"
            className="bg-green-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-500 transition-all"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
