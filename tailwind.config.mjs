/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Source Code Pro Variable", ...defaultTheme.fontFamily.mono],
        nanum: ["Nanum Pen Script", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
