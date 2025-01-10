// @ts-check
import aws from "astro-sst";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws({
    deploymentStrategy: "regional",
    responseMode: "stream",
    serverRoutes: ["_actions/*"],
  }),
  integrations: [svelte(), tailwind()],
});
