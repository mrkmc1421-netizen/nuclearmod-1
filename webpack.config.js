const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    editor: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].bundle.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/i,
        type: "asset/resource"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: ".index.html"
    })
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "static")
    },
    historyApiFallback: true,
    hot: true,
    port: 8601
  },

  devtool: "source-map"
};