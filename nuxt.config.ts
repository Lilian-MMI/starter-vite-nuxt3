import fs from "node:fs";
import { defineNuxtConfig } from "nuxt";
import UnocssIcons from "@unocss/preset-icons";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    privateKey:
      process.env.NUXT_PRIVATE_KEY || fs.readFileSync("./private.key", "utf-8"),
    publicKey:
      process.env.NUXT_PUBLIC_KEY || fs.readFileSync("./public.key", "utf-8"),
  },

  nitro: {
    plugins: ["~/server/db.ts"],
  },

  unocss: {
    uno: true,
    icons: true,

    presets: [
      UnocssIcons({
        prefix: "i-",
        scale: 1.5,
        extraProperties: {
          display: "inline-block",
        },
      }),
    ],
  },

  buildModules: ["@pinia/nuxt", "@vueuse/nuxt", "@unocss/nuxt"],
});
