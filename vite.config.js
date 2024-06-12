import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Ajusta esta ruta según sea necesario
  build: {
    manifest: false,
  },
});
