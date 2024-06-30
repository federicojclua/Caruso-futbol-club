import rollup from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // Ruta al archivo de entrada principal
  output: {
    file: 'dist/bundle.js', // Ruta al archivo de salida
    format: 'esm', // Formato de salida (ESM para módulos modernos)
  },
  plugins: [
    commonjs(), // Plugin para manejar dependencias CommonJS
    terser(), // Plugin para minificar el código
  ],
};