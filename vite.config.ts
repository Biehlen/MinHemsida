import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createRequire } from 'module';

// Se till att 'crypto' används från polyfill
const require = createRequire(import.meta.url);
require('crypto-browserify');

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'crypto': 'crypto-browserify',
    },
  },
  base: '/',
});
