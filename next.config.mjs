/** @type {import('next').NextConfig} */
const nextConfig = {
  deploymentId: "1.0.0",
  reactStrictMode: true,
  experimental: {
    // Outras opções experimentais se houver
  },
  allowedDevOrigins: ["172.26.14.194", "localhost:3000"]
};

export default nextConfig;
