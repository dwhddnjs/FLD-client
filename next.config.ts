import type { NextConfig } from "next"
// new URL("https://ddragon.leagueoflegends.com/cdn/**")
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
      },
    ],
  },
  /* config options here */
}

export default nextConfig
