import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['img.clerk.com','res.cloudinary.com'], // Add your external image domain here
  },

};

export default nextConfig;
