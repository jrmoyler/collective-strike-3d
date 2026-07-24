import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    sourcemap: true,
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("@react-three/rapier") || id.includes("@dimforge/rapier")) return "physics";
          if (id.includes("@react-three/postprocessing") || id.includes("/postprocessing/")) return "effects";
          if (id.includes("@react-three/drei")) return "drei";
          if (id.includes("@react-three/fiber") || id.includes("/three/")) return "three-engine";
          if (id.includes("/react/") || id.includes("/react-dom/") || id.includes("/scheduler/")) return "react-runtime";
          return "game-vendor";
        }
      }
    },
    chunkSizeWarningLimit: 2400
  }
});
