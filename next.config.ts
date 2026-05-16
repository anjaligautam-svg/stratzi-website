import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — produces an `out/` directory that GitHub Pages can serve directly.
  output: "export",

  // GH Pages serves images as-is; disable the Next image optimizer.
  images: { unoptimized: true },

  // Match GH Pages' URL style (`/about/` not `/about`).
  trailingSlash: true,

  // Hosted at https://anjaligautam-svg.github.io/stratzi-website/ —
  // basePath / assetPrefix tell Next that the site lives under `/stratzi-website`
  // so internal `<Link href="/solutions">` resolves to `/stratzi-website/solutions/`
  // and `_next/static/...` assets load from the right subpath.
  // In dev (`npm run dev`) these stay empty so localhost:3000 keeps working.
  // If you later switch to a custom domain like stratzi.ai, set both to "".
  basePath: process.env.NODE_ENV === "production" ? "/stratzi-website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/stratzi-website/" : "",
};

export default nextConfig;
