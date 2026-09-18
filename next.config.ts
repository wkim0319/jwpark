import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/booking",
        destination: "https://www.booking.com/gating/authkey?aid=1310257&key=tPPPEFyShi",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
