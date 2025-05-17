import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Uncomment this line to use React plugin
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  // Ensure the React plugin is enabled
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    historyApiFallback: true,  // This is the key to make React Router work on refresh
  }
});
