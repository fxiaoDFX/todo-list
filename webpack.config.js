const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
        liveReload: true,
        hot: false,
    },
    optimization: {
        runtimeChunk: "single",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Todo List",
            filename: "index.html",
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource",
            },
        ],
    },
}
