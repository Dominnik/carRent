const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssPlugin = new ExtractTextPlugin({
    filename:  './app.css',
    allChunks: true
});
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/../resources/static/views/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [cssPlugin]
};