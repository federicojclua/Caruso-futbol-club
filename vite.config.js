import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/path-to-your-app/', // Mover la propiedad 'base' fuera de 'build'
  build: {
    manifest: false,
  },
});
