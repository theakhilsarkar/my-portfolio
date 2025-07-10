"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "resume", label: "Resume" }, // moved before services
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-400">Akhil</div>

        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActiveLink(link.id)}
                className={`relative pb-1 ${
                  activeLink === link.id
                    ? "text-green-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-green-400 after:rounded-full"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
