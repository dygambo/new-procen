import { build } from "esbuild";
import { execSync } from "child_process";

// Build the client with Vite
execSync("npx vite build", { stdio: "inherit" });

// Bundle the server with esbuild
await build({
  entryPoints: ["./server/index.ts"],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: "./dist/index.cjs",
  external: ["pg-native", "lightningcss", "fsevents"],
});
