import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set GITHUB_PAGES=true in CI to deploy under the correct sub-path.
// Local dev always uses '/' so nothing breaks during development.
const base = process.env.GITHUB_PAGES === 'true' ? '/ki-mythen/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
