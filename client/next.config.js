/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-undef */
/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
const nextConfig = {
  rewrites: async () => {
    return [{ source: "/", destination: "/index" }];
  },
  future: { strictPostcssConfiguratio: true },
  pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  images: {
    domains: ["*"],
  },
  env: {
    NEXT_PUBLIC_API: "http://online-shop.test",
    NEXT_PUBLIC_IMG: "http://online-shop.test/storage",
  },
};

module.exports = nextConfig;
