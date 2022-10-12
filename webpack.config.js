const path = require("path");
const pkg = require("./package.json");
module.exports = {
    entry: "./src/lib/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        library: pkg.name,
        libraryTarget: "commonjs2",
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: "json-loader",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                    },
                },
            },
        ],
    },
};
