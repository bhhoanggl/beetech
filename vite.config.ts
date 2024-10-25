// import MillionLint from "@million/lint";
import { defineConfig, loadEnv, ConfigEnv } from 'vite'

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())

  const port = env.VITE_PORT ? parseInt(env.VITE_PORT) : 3000

  return {
    server: {
      port,
    },
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      minify: mode === 'production' ? ('esbuild' as 'esbuild') : false,
    },
    // plugins: [MillionLint.vite()],
  }
})
