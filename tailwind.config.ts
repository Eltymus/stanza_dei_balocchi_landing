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
    "./content/**/*.md", // Aggiungi percorsi mancanti
    "./assets/**/*.css", // Se usi CSS personalizzati
  ],
  safelist: [
    "text-red-500",
    "bg-blue-500",
    "hover:bg-green-500", // Aggiungi le classi dinamiche qui
  ],
};

export default config;
