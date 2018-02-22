// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = ([env, direction]) => {
    const isProduction = env === 'production';
    const config = Object.assign(baseConfig({ direction, env }), {
        name: `${env}-${direction}`,
        context: path.resolve(__dirname, '../frontend'),
        entry: './main',
        output: {
            filename: 'js/main.js',
            path: path.resolve(__dirname, '../htdocs'),
            libraryTarget: 'amd',
        }
    });

    const extractTextPlugin = new ExtractTextPlugin(`css/[name].css`);
    config.module.rules = config.module.rules.map(rule => {
        if (String(rule.test) === '/\\.less/') {
            return {
                ...rule,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: rule.use.slice(1),
                }),
            };
        }

        return rule;
    });

    config.plugins.unshift(extractTextPlugin);

    if (isProduction) {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }));
    }

    return config;
};

module.exports = [
    ['development']
].map(config);
