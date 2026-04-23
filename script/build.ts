import { build } from "esbuild";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

try {
  // 1. Build the React client with Vite
  console.log("Building client...");
  execSync("vite build", { stdio: "inherit", cwd: root });

  // 2. Bundle the Express server with esbuild
  console.log("Building server...");
  await build({
    entryPoints: [path.join(root, "server/index.ts")],
    bundle: true,
    platform: "node",
    target: "node18",
    format: "cjs",
    outfile: path.join(root, "dist/index.cjs"),
    // Keep native modules and heavy optional deps external
    external: [
      "pg-native",
      "fsevents",
      "better-sqlite3",
      "oracledb",
      "mysql",
      "mysql2",
      "tedious",
      "pg-query-stream",
    ],
    banner: {
      js: "// Built with esbuild for production",
    },
  });

  console.log("Build complete. Run `npm start` to launch the server.");
} catch (err) {
  console.error("Build failed:", err);
  process.exit(1);
}
