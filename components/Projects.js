"use client";
import React, { useState } from "react";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Saraswati & Sunrise School ERP",
    description:
      "ERP system for Saraswati & Sunrise School, with features like student management, teacher management, and attendance tracking, Fees management, and more.",
    stack: [
      "Flutter",
      "Firebase",
      "Dart",
      "Shared Preferences",
      "PHP for Backend",
      "MySQL",
    ],
    image: "/project1.png", // ✅ Place your image in public folder
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "02",
    title: "React Dashboard",
    description:
      "React-based admin panel with charts, dark mode, and full responsiveness.",
    stack: ["React", "Tailwind", "Recharts"],
    image: "/project2.png",
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const project = projects[current];

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* LEFT: TEXT */}
        <div className="flex-1">
          <h2 className="text-6xl font-bold text-[#888] mb-4">{project.id}</h2>
          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>

          <div className="flex gap-2 text-green-400 font-mono mb-6 flex-wrap">
            {project.stack.map((tech, idx) => (
              <span key={idx}>{tech},</span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-6">
            <a
              href={project.liveLink}
              target="_blank"
              className="bg-[#2b2b2b] p-3 rounded-full hover:bg-green-400 hover:text-black transition"
            >
              <ArrowUpRight size={20} />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              className="bg-[#2b2b2b] p-3 rounded-full hover:bg-green-400 hover:text-black transition"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Slider Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevProject}
              className="bg-green-400 text-black p-2 rounded hover:scale-105 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="bg-green-400 text-black p-2 rounded hover:scale-105 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex-1">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
