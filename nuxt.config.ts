// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "static",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  pages: false,
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      "postcss-color-gray": {},
    },
  },
  tailwindcss: { exposeConfig: true },
});
