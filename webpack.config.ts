import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './config/build/types/config';

const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

export default (env: BuildEnv) => {
    const PORT = env.port || 3000;
    const MODE = env.mode || 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode: MODE,
        port: PORT,
        paths: buildPaths,
    });

    return config;
};
