import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'React-Essential-Website';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
