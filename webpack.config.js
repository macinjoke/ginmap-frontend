
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js'
    ]
  },
  devServer: {
    contentBase: 'dist'
  }
}
