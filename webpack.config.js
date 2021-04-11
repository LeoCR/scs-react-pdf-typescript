const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
  mode: "production",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/preset-react"],
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: ["src", "node_modules"],
  },

  performance: {
    maxAssetSize: 5000000000,
    maxEntrypointSize: 5000000000,
  },
};

const client = Object.assign({}, config, {
  name: "client",
  target: "web",
  entry: path.resolve(__dirname, "src/client/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
});

const server = Object.assign({}, config, {
  name: "server",
  target: "node",
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, "src/server/index.tsx"),
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "build"),
  },
});

module.exports = [client, server];
