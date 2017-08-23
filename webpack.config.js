const path = require("path");

module.exports = {
    entry: "./app/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname,"app")
                ],
                loader: "babel-loader",
                options: {
                    presets: [
                        "es2015",
                        "react"
                    ]
                }
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".jsx", ".json"]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    context: __dirname,
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    }
}