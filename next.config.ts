import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // basePath: "",
};

export default withNextIntl(nextConfig);
