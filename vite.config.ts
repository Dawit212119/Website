import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: ["website-6fb1.onrender.com"],
  },
});
