import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";

export default defineConfig({
  entry: ["src"],
  dts: true,
  splitting: false,
  sourcemap: false,
  minify: false,
  clean: true,
  format: ["esm"],
  outDir: "dist",
  loader: {
    ".css": "local-css",
    ".scss": "local-css",
    ".module.scss": "local-css",
  },
  external: ["react", "react/jsx-runtime"],
  bundle: true,
  plugins: [
    preserveDirectivesPlugin({
      directives: ["use client"],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
    sassPlugin(),
  ],
});
