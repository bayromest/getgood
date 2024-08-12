/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ddragon.leagueoflegends.com",
        port: "", // No port needed
        pathname: "/cdn/**", // Match all paths under /cdn/
      },
    ],
  },
};

export default nextConfig;
