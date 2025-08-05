/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

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
      '@t4g/ui-web': resolve(__dirname, '../../../packages/ui-web/src/index.ts'),
      '@t4g/types': resolve(__dirname, '../../../packages/types/src/index.ts'),
      '@t4g/auth-users': resolve(__dirname, '../../../packages/auth-users/src/index.ts'),
    },
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
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
