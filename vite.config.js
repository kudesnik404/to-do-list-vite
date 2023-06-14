import { resolve } from "path";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "./",
  build: {
    outDir: "./../build/",
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
      ],
    },
  },
  resolve: {
    alias: {
      // TODO: Check if it works
      "@": resolve(__dirname, "./source/"),
    },
  },
  root: resolve(__dirname, "./source/"),
  server: {
    port: 8080,
  },
});
