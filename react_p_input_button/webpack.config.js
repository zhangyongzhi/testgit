module.exports = {
    entry: {
        main: ['./app/app2.js']
    },
    node: {
        buffer: false,
        __filename: true
    },
    output: {
        path: `${__dirname}/build`,
        filename: 'new2.js',
        publicPath: '/',
        library: 'app',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(scss|css)$/, loader: 'style!css!sass' }
        ]
    },
    resolve: {
        extensions: ['', '.scss', '.js', '.json']
    }
};