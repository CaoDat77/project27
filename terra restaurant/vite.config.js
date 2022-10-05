import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/home.html"),
        aboutRes: resolve(__dirname, "src/aboutRes.html"),
      },
    },
  },
});
