import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — produces an `out/` directory that GitHub Pages can serve directly.
  output: "export",

  // GH Pages serves images as-is; disable the Next image optimizer.
  images: { unoptimized: true },

  // Match GH Pages' URL style (`/about/` not `/about`).
  trailingSlash: true,

  // If hosting at https://<username>.github.io/stratzi-website/, uncomment and match the repo name.
  // For a custom domain (e.g. stratzi.ai), leave this commented out.
  // basePath: process.env.NODE_ENV === "production" ? "/stratzi-website" : "",
  // assetPrefix: process.env.NODE_ENV === "production" ? "/stratzi-website/" : "",
};

export default nextConfig;
