/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/frontends/dashboard',
  server: {
    port: 4201,
    host: 'localhost',
    fs: {
      allow: [
        // Allow access to workspace root
        '../../../',
        // Explicitly allow the dashboard source files  
        '.',
      ],
    },
  },
  preview: {
    port: 4201,
    host: 'localhost',
  },
  plugins: [
    TanStackRouterVite({
      routesDirectory: path.join(__dirname, 'src', 'routes'),
      generatedRouteTree: path.join(__dirname, 'src', 'routeTree.gen.ts'),
    }),
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../../dist/apps/frontends/dashboard',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['@t4g/auth-business', '@t4g/ui-web', '@t4g/types'],
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../coverage/apps/frontends/dashboard',
      provider: 'v8' as const,
    },
  },
}));
