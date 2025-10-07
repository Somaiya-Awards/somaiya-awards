import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
    assetsInclude: ["**/*.hdr"],

    build: {
        target: "es2021",
    },

    plugins: [
        react(),
        {
            name: "prefer-ts-over-js",
            enforce: "pre",
            resolveId(source: string, importer: string) {
                if (!importer) return null;

                if (source.startsWith(".")) {
                    const importerDir = path.dirname(importer);
                    const absPath = path.resolve(importerDir, source);

                    const tsFile = [".ts", ".tsx"]
                        .map((ext) => absPath + ext)
                        .find(fs.existsSync);

                    const jsFile = [".js", ".jsx"]
                        .map((ext) => absPath + ext)
                        .find(fs.existsSync);

                    if (tsFile && jsFile) {
                        // Ignore .js if both exist
                        return tsFile;
                    } else {
                        return jsFile
                    }
                }

                return null;
            },
        }
    ],
});
