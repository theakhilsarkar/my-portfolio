"use client";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
  },
  {
    id: "03",
    title: "Logo Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
  },
  {
    id: "04",
    title: "SEO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
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
