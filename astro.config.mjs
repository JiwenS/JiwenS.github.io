import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://jiwens.github.io",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
  integrations: [mdx()],
});
