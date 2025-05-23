// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"; // HERE

export default defineNuxtConfig({
  ssr: false,
  pages: false,
  nitro: {
    preset: "static",
  },
  app: {
    baseURL: "/stanza_dei_balocchi_landing/",
    buildAssetsDir: "/_nuxt/",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
