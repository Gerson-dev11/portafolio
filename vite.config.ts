import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // CAMBIO IMPORTANTE: 
  // Usa '/' si tu repo es el principal (gersonwil.github.io) 
  // o '/nombre-del-repo/' si es un proyecto secundario.
  // Evita './' en producción con routers de React.
  base: '/', 
  
  plugins: [
    inspectAttr(), 
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Esto asegura que los archivos se generen en una carpeta limpia
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimización para que el build sea más rápido
    sourcemap: false,
  },
})