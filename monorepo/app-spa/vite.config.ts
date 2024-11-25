import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    lib: {
      entry: './src/main.tsx',
      name: 'appSpa',
      formats: ['es'], // Para SystemJS
      fileName: 'bundle',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'single-spa'], // Exclua dependências compartilhadas
      output: {
        format: 'system', // Deve ser 'system' para single-spa
        entryFileNames: 'index.js',
      },
    },
  },
  server: {
    port: 3001,
    host: true, // Expose to all network interfaces
    strictPort: true,
    open: true, // Open browser on server start
    cors: true, // Enable CORS
  }
});
