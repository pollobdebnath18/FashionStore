/** @type {import('next').NextConfig} */
import tailwindcss from "@tailwindcss/vite";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
