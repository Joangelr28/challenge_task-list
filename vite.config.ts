import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "src/setupTests",
    includeSource: ["src/**/*.{js,ts,jsx,tsx}"],
    mockReset: true,
  },
})
