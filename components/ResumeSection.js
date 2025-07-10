"use client";
import React, { useState } from "react";

const tabs = ["Experience", "Education", "Skills", "About me"];

const experiences = [
  {
    time: "2024 - Present",
    role: "IT Trainer - Full Stack Development",
    company: "Red & White Skill Education",
  },
  {
    time: "2024 - Present",
    role: "Freelance Application Developer - Flutter",
    company: "Self-Employed",
  },
  {
    time: "2023 - 2025",
    role: "IT Trainer - Flutter App. Development",
    company: "Red & White Skill Education",
  },
];

const education = [
  {
    time: "2025 - Present",
    degree: "MBA - Data Science & Business Analytics",
    institution: "Saurashtra University",
  },
  {
    time: "2022 - 2025",
    degree: "BCA",
    institution: "Swarnim Startup & Innovation University Gandhinagar",
  },
  {
    time: "2019 - 2021",
    degree: "B.Tech (Computer Engineering)",
    institution: "RK University Rajkot",
  },
  {
    time: "2018 - 2019",
    degree: "HSC - Science Stream - A",
    institution: "Shree Swaminarayan Gurukul Rajkot",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PHP",
  "MySQL",
  "Firebase",
  "Flutter",
  "C",
  "C++",
  "Java",
  "jQuery",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const aboutMe = `
I'm Akhil Sodvadiya, a passionate IT Trainer and Full Stack Developer with a strong foundation in both frontend and backend development.
I enjoy teaching, mentoring, and building modern web & mobile apps.
My mission is to simplify technology education for everyone.
`;

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <section id="resume" className="bg-[#1a1a1a] text-white py-15 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Titles */}
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold">Why hire me?</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              I'm a versatile developer and educator with a passion for learning
              and helping others grow through technology.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">My Journey</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              From coding and mentoring to building real-world projects, my
              experience bridges knowledge with impact.
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

            {activeTab === "Education" &&
              education.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#2b2b2b] p-4 rounded-md font-mono"
                >
                  <p className="text-green-400 text-sm mb-1">{item.time}</p>
                  <h4 className="text-lg font-bold">{item.degree}</h4>
                  <p className="text-gray-400 mt-1">{item.institution}</p>
                </div>
              ))}

            {activeTab === "Skills" &&
              skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#2b2b2b] p-4 rounded-md font-mono text-center"
                >
                  <p className="text-green-400 font-semibold">{skill}</p>
                </div>
              ))}

            {activeTab === "About me" && (
              <div className="col-span-2 bg-[#2b2b2b] p-6 rounded-md font-mono leading-7">
                <p className="text-gray-300 whitespace-pre-line">{aboutMe}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
