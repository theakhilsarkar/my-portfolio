"use client";
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  const [userData, setUserData] = useState({});
  const [stats, setStats] = useState({
    totalStars: 0,
  });

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch("https://api.github.com/users/theakhilsarkar");
        const user = await res.json();

        const reposRes = await fetch(`${user.repos_url}?per_page=100`);
        const repos = await reposRes.json();

        const totalStars = repos.reduce(
          (sum, repo) => sum + repo.stargazers_count,
          0
        );

        setUserData(user);
        setStats({ totalStars });
      } catch (err) {
        console.error("GitHub fetch error:", err);
      }
    }

    fetchGitHubData();
  }, []);

  const joinYear = new Date(userData.created_at)?.getFullYear();

  return (
    <section
      id="home"
      className="w-full h-auto py-16 bg-[#0f0f0f] text-white flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 md:px-16 flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* LEFT TEXT */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <p className="text-sm text-gray-400 mb-2">
            Full Stack Application & Website Developer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
            Hello I’m{" "}
            <span className="text-green-400">
              {userData.name || "Akhil Sarkar"}
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-6">
            {userData.bio ||
              "I excel at crafting elegant digital experiences and I'm proficient in various programming languages and technologies."}
          </p>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            {userData.location && (
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> {userData.location}
              </p>
            )}
            {userData.blog && (
              <a
                href={userData.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline hover:text-green-400"
              >
                <FaGlobe /> Website
              </a>
            )}
            {userData.twitter_username && (
              <a
                href={`https://twitter.com/${userData.twitter_username}`}
                target="_blank"
                className="underline hover:text-blue-400"
              >
                @{userData.twitter_username}
              </a>
            )}
          </div>

          {/* Buttons + Socials */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="/Luke_CV.pdf"
              download
              className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full flex items-center gap-2"
            >
              DOWNLOAD CV <FiDownload />
            </a>
            <div className="flex items-center gap-4 text-xl text-green-400">
              <a href="https://github.com/theakhilsarkar">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/akhil-sodvadiya/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/theakhilsarkar/">
                <FaInstagram />
              </a>
              <a href="https://x.com/theakhilsarkar">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 text-gray-300 text-sm md:text-base">
            <div>
              <h2 className="text-3xl font-bold text-white">
                {userData.public_repos}
              </h2>
              <p>Public Repos</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">
                {stats.totalStars}
              </h2>
              <p>Total Stars</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">
                {userData.followers}
              </h2>
              <p>Followers</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">
                {userData.following}
              </h2>
              <p>Following</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">2+</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">
                {joinYear || "N/A"}
              </h2>
              <p>GitHub Since</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
