/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    CURRENT_PROFILE: "yusuf",
  },
};

export default nextConfig;
