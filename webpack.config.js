var webpack =   require('webpack');
var path =      require('path');

var config = {
    name: 'PDF Viewer',
    context: __dirname,
    devtool: 'cheap-module-source-map',
    entry: {
        application: path.resolve(__dirname, 'application/index.js'),
        vendor: [
            'jquery',
            'object-assign',
            'react',
            'react-bootstrap',
            'react-dom',
            'react-loader',
            'react-redux',
            'react-thunk',
            'redux',
            'redux-logger',
            'redux-promise',
            'redux-thunk',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build',
        filename: '[name].bundle.js',
        sourceMapFilename: '[file].map',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor.bundle.js', [
            'application',
            'vendor',
        ]),
        new webpack.optimize.DedupePlugin(),
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /application|node_modules/,
            },
            {
                test: /\.jpg$/,
                loader: 'file',
            },
        ],
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.join(__dirname, 'node_modules', 'npm', 'node_modules'),
        ],
        alias: {
            actions: path.resolve(__dirname, 'application/actions'),
            images: path.resolve(__dirname, 'images'),
            components: path.resolve(__dirname, 'application/components'),
            middlewares: path.resolve(__dirname, 'application/middlewares'),
            reducers: path.resolve(__dirname, 'application/reducers'),
            'prop-types': path.resolve(__dirname, 'application/prop-types'),
            constants: path.resolve(__dirname, 'application/constants'),
            endpoints: path.resolve(__dirname, 'application/endpoints'),
            helpers: path.resolve(__dirname, 'application/helpers'),
            styles: path.resolve(__dirname, 'application/styles'),
            handlers: path.resolve(__dirname, 'application/handlers'),
        },
    },
    devServer: {
        port: 8080,
    },
    eslint: {
        configFile: path.join(__dirname, '/eslintrc.json'),
        failOnWarning: true,
        failOnError: true,
    },
};

module.exports = config
