import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteTsconfigPaths(), svgrPlugin()],
});
