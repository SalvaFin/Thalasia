import { defineConfig } from "astro/config";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://salvafin.github.io",
  base: isGitHubPagesBuild ? "/Thalasia" : "/",
});
