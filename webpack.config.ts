import { BuildMode, BuildPaths } from './src/shared/config/build/types/types';
import path from "path";
import webpack from "webpack";
import {buildWebpack} from "./src/shared/config/build/buildWebpack";

interface EnvVariables {
    mode: BuildMode,
    port: number
}

module.exports = (env: EnvVariables) => { 
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src')
    }
    
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 5000,
        mode: env.mode ?? "development",
        paths
    })

    return config;
}