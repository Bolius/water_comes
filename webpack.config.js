const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const glob = require("glob");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  entry: {
    "bundle.js": glob
      .sync("build/static/?(js|css)/main.*.?(js|css)")
      .map(f => path.resolve(__dirname, f))
  },
  output: {
    filename: "out.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new SentryWebpackPlugin({
      include: ".",
      ignoreFile: ".sentrycliignore",
      ignore: ["node_modules", "webpack.config.js"],
      configFile: "sentry.properties"
    })
  ]
};
