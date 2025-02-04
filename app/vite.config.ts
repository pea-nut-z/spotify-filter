/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  clearScreen: false,
  build: {
    target: "esnext",
  },
  test: {
    environment: "jsdom",
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
