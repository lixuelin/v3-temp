import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  plugins: [Vue()],
  server: {
    port: 8088,
  },
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve("src") + "/",
      },
      {
        find: /\/#\//,
        replacement: pathResolve(""),
      },
    ],
  },
});
