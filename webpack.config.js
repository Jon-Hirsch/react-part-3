module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname+"/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ]
  },
}
