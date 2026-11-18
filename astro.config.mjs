// @ts-check
import { defineConfig } from "astro/config";

// On Vercel, the production URL is injected automatically (used for canonical / Open Graph links).
// Once you have a custom domain, set SITE_URL in Vercel (e.g. https://antoinelebeau.com).
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4321");

export default defineConfig({
  site,
  trailingSlash: "ignore",
});
