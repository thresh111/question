import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

function handleUseClientDirective() {
  return {
    name: "handle-use-client-directive",
    transform(code, id) {
      if (id.endsWith(".tsx") || id.endsWith(".jsx")) {
        return code.replace(/^\s*"use client"\s*;?/m, '// "use client" directive preserved for Next.js');
      }
      return null;
    },
  };
}

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    handleUseClientDirective(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist/types",
      rootDir: "src",
    }),
    postcss(),
  ],
  external: ["react", "react-dom"],
  watch: {
    clearScreen: false,
    include: "src/**",
  },
};
