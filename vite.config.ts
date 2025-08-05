import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // listen on all interfaces for dev
    port: 5173, // Vite default, override per-app if needed
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
      ],
    },
    open: false, // don't auto-open browser by default
    strictPort: false, // fallback to next port if busy
  },
});
