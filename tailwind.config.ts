import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    "./components/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
};

export default config;
