// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

import path from 'path';

export default {
    context: path.resolve(__dirname, 'frontend'),
    entry: './main',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'src/htdocs'),
        libraryTarget: 'amd',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    externals: {
        '@plesk/ui-library': { amd: 'plesk-ui-library' },
    },
};
