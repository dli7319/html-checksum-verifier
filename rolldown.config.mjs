import { defineConfig } from 'rolldown';
import postcss from 'rollup-plugin-postcss';

export default defineConfig([
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/main.js',
      format: 'iife',
    },
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        'react/jsx-runtime': 'preact/jsx-runtime',
      },
    },
    moduleTypes: {
      '.css': 'js',
    },
    plugins: [
      postcss({
        modules: true,
        inject: true,
      }),
    ],
  },
  {
    input: 'src/md5_worker.ts',
    output: {
      file: 'dist/md5_worker.js',
      format: 'iife',
    },
  },
  {
    input: 'src/sha1_worker.ts',
    output: {
      file: 'dist/sha1_worker.js',
      format: 'iife',
    },
  },
  {
    input: 'src/sha256_worker.ts',
    output: {
      file: 'dist/sha256_worker.js',
      format: 'iife',
    },
  },
]);
