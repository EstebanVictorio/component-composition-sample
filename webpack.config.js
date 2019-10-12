const path = require("path")
const webpack = require("webpack")

const root = path.resolve(__dirname, "src")

const config = {
  entry: {
    main: `${root}/index.js`
  },
  output: {
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".js"],
    alias: {
      pages: `${root}/pages`,
      components: `${root}/components`,
      hooks: `${root}/hooks`
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: process.env.PORT || 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
}

module.exports = config
