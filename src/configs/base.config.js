// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

module.exports = (vars = {}) => ({
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
                        loader: 'postcss-loader',
                        options: {
                            plugins: (rtl => {
                                const plugins = [
                                    require('autoprefixer')(),
                                ];

                                if (rtl) {
                                    plugins.push(require('rtlcss')());
                                }

                                return plugins;
                            })(vars.direction === 'rtl'),
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: Object.assign({
                                'cls-prefix': 'ext-example-ui-library',
                            }, vars),
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        '@plesk/ui-library': { amd: 'plesk-ui-library' },
    },
    plugins: []
});
