// @ts-check
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import rollupTypescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

const plugins = [
  json(),
  commonjs(),
  nodeResolve({
    browser: true,
    preferBuiltins: false,
  }),
  rollupTypescript(),
]

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/DOM.js',
        format: 'iife',
      },
      {
        file: 'dist/DOM.min.js',
        format: 'iife',
        plugins: [terser()],
      },
    ],
    plugins,
  },
  {
    input: 'src/es6.ts',
    output: [
      {
        file: 'dist/DOM.esm.js',
        format: 'esm',
      },
      {
        file: 'dist/DOM.esm.min.js',
        format: 'esm',
        plugins: [terser()],
      },
    ],
    plugins,
  },
])
