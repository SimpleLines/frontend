import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { BuildPaths, BuildOptions } from './types/config';

export const buildPlugins = (
    opions: BuildOptions
): webpack.WebpackPluginInstance[] => {
    const { paths } = opions;
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ];
};
