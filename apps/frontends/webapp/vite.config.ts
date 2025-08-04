/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

import { resolve } from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/frontends/webapp',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
  resolve: {
    alias: {
      '@t4g/ui': resolve(__dirname, '../../../libs/ui/index.ts'),
    },
  },
  plugins: [
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    react(), 
    nxViteTsPaths(), 
    nxCopyAssetsPlugin(['*.md']),
    VitePWA({
      registerType: "autoUpdate",
      manifest: { name: "Tag4Gift", short_name: "T4G", theme_color: "#f59e0b" },
    })
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../../dist/apps/frontends/webapp',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
