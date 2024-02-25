import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';

export const buildWebpackConfig = (
    options: BuildOptions
): webpack.Configuration => {
    const { mode, paths } = options;
    return {
        mode,
        entry: {
            main: paths.entry,
        },
        devtool: 'inline-source-map',
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
    };
};
