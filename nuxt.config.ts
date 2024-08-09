// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  plugins: ["~/plugins/env-config.ts"],
  alias: {
    "@": resolve(__dirname, "./"),
  },
  tailwindcss: {
    configPath: "@/tailwind.config.js",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  image: {
    cloudinary: {
      baseURL:
        "https://firebasestorage.googleapis.com/v0/b/bechatapptc.appspot.com/o/uploads",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/icon",
  ],

  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      baseUrlApi: process.env.BASE_URL_API,
      baseUrlApiImage: process.env.BASE_URL_API_IMAGE,
    },
  },

  colorMode: {
    classSuffix: "",
  },
});
