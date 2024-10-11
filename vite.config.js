import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // options from the remix.config
    remix({
      ignoredRouteFiles: ["**/.*"],
      appDirectory: "app",
      assetsBuildDirectory: "public/build",
      serverBuildPath: "build/index.js",
      publicPath: "/build/",
      future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
      },
    }),
    tsconfigPaths(),
  ],
});
