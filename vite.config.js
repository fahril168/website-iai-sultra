import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  // Gunakan sub-path hanya jika di-deploy lewat GitHub Actions (GitHub Pages)
  // Di Vercel atau local dev, gunakan root '/'
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  const base = isGitHubActions ? '/website-iai-sultra/' : '/';

  return {
    plugins: [react()],
    base,
    server: {
      port: 5173,
      open: false
    }
  };
});
