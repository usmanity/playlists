import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "dist",
    assetsDir: "playlists/",
  },
  server: {
    base: "/assets/",
  },
});
