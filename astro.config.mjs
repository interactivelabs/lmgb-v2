// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },
  integrations: [tailwind()],
  adapter: vercel(),
});
