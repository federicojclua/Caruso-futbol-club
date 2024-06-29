import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Ajusta esta ruta según sea necesario
  build: {
      rollupOptions: {
      external: ['sweetalert2']
    },
    manifest: false,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://caruso-prueba-back-1.onrender.com', // 28-06 
        changeOrigin: true,
      },
    },
  },
});
