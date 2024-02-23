import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
