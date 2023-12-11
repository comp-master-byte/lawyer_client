import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isProd = options.mode === 'production';

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
    }

    return [
        scssLoader,
        tsLoader,
        assetsLoader,
        svgLoader
    ]
}