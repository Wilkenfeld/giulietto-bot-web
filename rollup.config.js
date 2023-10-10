// generate a bundle for each page that is accessible directly by the bot interface
import path from "node:path";
import { readdirSync } from "fs";
import process from "process";
import merge from "deepmerge";
import { createMpaConfig } from "@open-wc/building-rollup";
import del from "rollup-plugin-delete"

const TEMPLATES_DIR = "src/ui/templates/";
// get only the end files, with their relative path
const files = readdirSync(TEMPLATES_DIR, { recursive: true, withFileTypes: true }).filter(f => /html$/.test(f.name)).reduce((obj, f) => {const entry = path.relative(TEMPLATES_DIR, path.join(f.path, f.name)); if (f.name.charAt(0) !== '.') obj[entry] = entry; return obj}, {});

const developmentMode = !!process.env.NODE_ENV || true;

const conf = merge(
  createMpaConfig({
    developmentMode,
    injectServiceWorker: false,
    workbox: false,
    rootDir: TEMPLATES_DIR,
  }),
  { watch: true, input: files, output: { dir: "dist" }, plugins: [del({ targets: "dist/*", runOnce: true, verbose: true })]}
);

export default conf
