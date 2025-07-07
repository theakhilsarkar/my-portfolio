"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-gray-500 text-center py-6 border-t border-gray-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
