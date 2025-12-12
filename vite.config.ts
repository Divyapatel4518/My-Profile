import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    base: "/My-Profile/",

    plugins: [react()],

    resolve: {
      alias: {
        "@": resolve(__dirname, "./"),
      },
    },

    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    build: {
      rollupOptions: {
        external: ["lucide-react", "framer-motion"],
      },
      outDir: "dist",
    },
  };
});
