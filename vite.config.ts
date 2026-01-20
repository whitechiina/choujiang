/*
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2026-01-20 18:25:35
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/choujiang' : '/',
  build: {
    target: 'es2022', // 支持 top-level await
  },
});
