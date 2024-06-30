const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

module.exports = defineConfig({
  plugins: [react()],
  base: '/', // Ajusta esta ruta según sea necesario
  build: {
    manifest: false,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://caruso-prueba-back-1.onrender.com',
        changeOrigin: true,
      },
    },
  },
});
