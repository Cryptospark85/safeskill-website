import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure the resolution for slick-carousel is included
      "slick-carousel": "node_modules/slick-carousel",
    },
  },
  build: {
    rollupOptions: {
      input: "./index.html", // Ensure the build uses index.html as the entry point
    },
  },
  server: {
    open: true, // Automatically open the app in the browser when running locally
  },
});
