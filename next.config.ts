<<<<<<< HEAD
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Menghilangkan indikator ISR yang sering bikin merah di editor
  devIndicators: {
    appIsrStatus: false,
  } as any,

  // Di Next.js 15, gunakan properti ini untuk keamanan cross-origin dev
  experimental: {
    serverActions: {
      allowedOrigins: ["192.168.1.3", "localhost:3000"],
    },
  } as any,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'api.dicebear.com' },
    ],
  },
};

export default nextConfig;
=======
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
>>>>>>> bf0156d (Initial commit from Create Next App)
