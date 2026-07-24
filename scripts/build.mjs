import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "dist");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync(path.join(root, "COLLECTIVE_STRIKE_3D.html"), path.join(out, "index.html"));
console.log(`Built ${path.join(out, "index.html")}`);
