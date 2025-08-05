const isGithubPages = process.env.NODE_ENV === "production";
const repo = "my-portfolio"; // your GitHub repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  basePath: isGithubPages ? `/${repo}` : "",
};

module.exports = nextConfig;
