// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "static",
  },
  app: {
    baseURL: "/stanza_dei_balocchi_landing/",
    buildAssetsDir: "/_nuxt/",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  pages: false,
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      "postcss-color-gray": {},
    },
  },
  tailwindcss: {
    exposeConfig: true,
    configPath: "tailwind.config.js",
  },
});
