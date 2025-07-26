"use client";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "Application Development",
    desc: "We are delivering high-quality and innovative applications for businesses of all sizes using Flutter.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    desc: "We are delivering innovative and modern UI/UX Design of Applications & Websites according to current trends using Figma",
  },
  {
    id: "03",
    title: "Logo Design",
    desc: "A Unique and creative logo design for your business.",
  },
  {
    id: "04",
    title: "Resume Writing & Guidance",
    desc: "We will help you to write a perfect resume for your dream job.",
  },
  {
    id: "05",
    title: "Web Development",
    desc: "We are delivering best web development services for your business.",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 border-b border-gray-600 pb-4">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-6 flex justify-between items-start"
            >
              <div>
                <span className="text-xl text-gray-500 font-mono">
                  {service.id}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 max-w-md text-sm md:text-base">
                  {service.desc}
                </p>
              </div>
              <div className="bg-white text-black rounded-full p-2 hover:bg-green-400 transition-all">
                <FiArrowDownRight className="text-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
