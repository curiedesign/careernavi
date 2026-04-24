import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// `react()` plugin type is resolved against the top-level `vite` install,
// but `defineConfig` from `vitest/config` expects its own nested copy.
// Cast avoids a false positive from duplicate vite types in node_modules.
// See: https://github.com/vitest-dev/vitest/issues/5521
export default defineConfig({
  plugins: [react()] as never,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    css: false,
  },
});
