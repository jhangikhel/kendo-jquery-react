const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'

            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
            kendoGrid: path.join(__dirname, "node_modules/@progress/kendo-ui/js/kendo.grid.min.js"),
            kendoChart: path.join(__dirname, "node_modules/@progress/kendo-ui/js/dataviz/chart/chart.min.js"),
        },
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 3500,
        publicPath: "http://localhost:3500/dist/",
        hot: true,
        historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};