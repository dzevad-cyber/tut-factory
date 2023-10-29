/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    include: ['./src/app/tests/**/*.test.ts'],
  },
});
