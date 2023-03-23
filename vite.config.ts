import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      src: path.resolve("src/"),
    },
  },

  server: {
    open: true,
  },
});
