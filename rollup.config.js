import typescript from 'rollup-plugin-typescript2'
import { uglify } from "rollup-plugin-uglify";
import pkg from './package.json'

export default {
  input: './index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext'
        }
      }
    }),
  ],
}
