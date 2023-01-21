import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: resolve(__dirname, './dist/'),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  define: {
    // apiURL: JSON.stringify('https://www.p1.iotproj.ir'),
    apiURL: JSON.stringify('http://localhost:1337'),
    reqPeriod: 5000,
  },
});
