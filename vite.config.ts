import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// DEPLOY_TARGET=vercel  →  builds for Vercel (.output/public + serverless functions)
// unset / "cloudflare" →  builds for Lovable / Cloudflare Workers (dist + wrangler)
const isVercel = process.env.DEPLOY_TARGET === "vercel";

export default defineConfig({
  plugins: [tsConfigPaths(), tailwindcss()],
  // Disable the Cloudflare Vite plugin when targeting Vercel.
  cloudflare: isVercel ? false : undefined,
  // Forward the chosen build target to TanStack Start.
  tanstackStart: isVercel ? { target: "vercel" } : undefined,
  vite: {
    server: {
      host: "::",
      port: 8080,
    },
  },
});