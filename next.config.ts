import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lang/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "",
};

export default withNextIntl(nextConfig);
