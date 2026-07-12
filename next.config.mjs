/** @type {import('next').NextConfig} */
// This repo is `orelia-mc/orelia-mc.github.io` — a GitHub Pages user/org page,
// served at the account root (orelia-mc.github.io), so no basePath is needed.
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
