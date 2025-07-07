"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-[#0f0f0f] text-white flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* LEFT TEXT */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <p className="text-sm text-gray-400 mb-2">
            Full Stack Application & Website Developer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
            Hello I’m <span className="text-green-400">Akhil Sarkar</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-6">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies.
          </p>

          {/* Buttons and Socials */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="/Luke_CV.pdf"
              download
              className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full flex items-center gap-2"
            >
              DOWNLOAD CV <FiDownload />
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-xl text-green-400">
              <a href="https://github.com/theakhilsarkar">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/akhil-sodvadiya/">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10 text-left text-sm md:text-base text-gray-300">
            <div>
              <h2 className="text-3xl font-bold text-white">2+</h2>
              <p>Years of experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">26</h2>
              <p>Projects completed</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">8</h2>
              <p>Technologies mastered</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">500</h2>
              <p>Code commits</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex items-center justify-center mt-10 lg:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[5px] border-dashed border-green-500 animate-spin-slow p-1">
            <img
              src="/profile.png"
              alt="Luke Coleman"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
