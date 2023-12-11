import { BuildOptions } from "./types/types";

export function buildResolvers(options: BuildOptions) {
    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            "@": options.paths.src,
        }
    }
}