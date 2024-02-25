import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';

const config: Configuration = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src', 'index.ts'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.ProgressPlugin(),
    ],
};

export default config;
