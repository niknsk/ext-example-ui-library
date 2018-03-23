// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

const webpack = require('webpack');
const path = require('path');

module.exports = (env = {}) => {
    const config = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.less/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: {
                                    normalizeUnicode: false,
                                },
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                modifyVars: {
                                    'cls-prefix': 'example-ui-library',
                                },
                            },
                        },
                    ],
                },
            ],
        },
        externals: {
            '@plesk/ui-library': { amd: 'plesk-ui-library' },
        },
        plugins: [],
        entry: './src/frontend/main.js',
        output: {
            path: path.resolve(__dirname, 'src/htdocs/js'),
            filename: 'app.bundle.js',
            libraryTarget: 'amd',
        }
    };

    if (env === 'production') {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }));
    }

    return config;
};
