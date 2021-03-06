var path = require('path');
var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const env = process.env.NODE_ENV;
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    mode: env || 'development'
};

const constants = {
    development : {
        'public_url': '"http://127.0.0.1:8000"',
        'environment': '"development"',
    },
    production : {
        'public_url': '"http://www.sde.co.ke/events/public"',
        'environment': '"production"',
    }
};

const target_envs = {
    development : {
        app: {
            entry: './resources/app/components/index',
            path: path.resolve('./public/static/bundles'),
            chunkFilename: '[name].[chunkhash].js',
            publicPath: '/static/bundles/'
        },
        academy: {
            entry: './resources/app/academy/index',
            path: path.resolve('./public/static/academy/bundles'),
            chunkFilename: '[name].[chunkhash].js',
            publicPath: '/static/academy/bundles/'
        }
    },
    production : {
        app: {
            entry: './resources/app/components/index',
            path: path.resolve('./public/static/bundles'),
            chunkFilename: '[name].[chunkhash].js',
            publicPath: '/static/bundles/'
        },
        academy: {
            entry: './resources/app/academy/index',
            path: path.resolve('./public/static/academy/bundles'),
            chunkFilename: '[name].[chunkhash].js',
            publicPath: '/static/academy/bundles/'
        }
    }
};

// module.exports = {
//     // ...your other modifications,
//     configureWebpack: config => {
//         config.plugins = config.plugins.concat(
//             new WebpackAssetsManifest({
//                 output: 'asset-manifest.json'
//             })
//         )
//     }
// }

module.exports = (env, argv) => {

    config.context = __dirname;

    config.plugins = [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            // 'NODE_ENV': env,
        }),
        new CleanWebpackPlugin()
    ];

    config.performance = {
        hints: 'error'
    };

    config.module = {
        rules:  [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // loader: require.resolve('css-loader'),
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-class-properties"]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]}
        ],
    };

    config.resolve = {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.jsx', 'css']
    };

    config.performance = {
        hints: false,
    };

    if (argv.mode === 'production') {
        config.optimization = {
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true, // Must be set to true if using source-maps in production
                    terserOptions: {
                        ecma: undefined,
                        warnings: false,
                        comments: false,
                        beautify: false,
                        parse: {},
                        compress: {
                            drop_console: true,
                            warnings: false,
                        },
                        mangle: true, // Note `mangle.properties` is `false` by default.
                        module: false,
                        output: null,
                        toplevel: false,
                        nameCache: null,
                        ie8: false,
                        keep_classnames: undefined,
                        keep_fnames: false,
                        safari10: false,
                    }
                }),
            ],
        }
    }

    config.plugins.push(
        new webpack.DefinePlugin({
            'env': constants[argv.mode],
        }),
        new WebpackAssetsManifest({
            output: 'asset-manifest.json'
        })
    );


    config.entry = {
        // entry: ["babel-polyfill", "./App.jsx"],

        main: target_envs[argv.mode][argv.node]['entry']
    };


    config.output = {
        filename: "[name].js",
        path: target_envs[argv.mode][argv.node]['path'],
        chunkFilename: target_envs[argv.mode][argv.node]['chunkFilename'],
        publicPath: target_envs[argv.mode][argv.node]['publicPath']
    };

    return config;
};
