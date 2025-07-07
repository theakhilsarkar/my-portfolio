"use client";
import React, { useState } from "react";

const tabs = ["Experience", "Education", "Skills", "About me"];

const experiences = [
  {
    time: "2022 - Present",
    role: "FULL Stack Developer",
    company: "Tech Solutions Inc.",
  },
  {
    time: "2020 - 2021",
    role: "Freelance Web Developer",
    company: "E-commerce Startup",
  },
  {
    time: "Summer 2021",
    role: "Front-End Developer Intern",
    company: "Web Design Studio",
  },
  {
    time: "2019 - 2020",
    role: "Teaching Assistant",
    company: "Tech Academy",
  },
];

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <section id="resume" className="bg-[#1a1a1a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Titles */}
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold">Why hire me?</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">My experience</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              et, et.
            </p>
          </div>
        </div>

        {/* Tabs & Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT TABS */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-left font-mono rounded-md ${
                  activeTab === tab
                    ? "bg-green-400 text-black"
                    : "bg-[#2b2b2b] text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activeTab === "Experience" &&
              experiences.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#2b2b2b] p-4 rounded-md font-mono"
                >
                  <p className="text-green-400 text-sm mb-1">{item.time}</p>
                  <h4 className="text-lg font-bold">{item.role}</h4>
                  <p className="text-gray-400 mt-1">{item.company}</p>
                </div>
              ))}

            {activeTab !== "Experience" && (
              <p className="text-gray-400 col-span-2">Coming soon...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
