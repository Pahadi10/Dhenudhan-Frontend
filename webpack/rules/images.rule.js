module.exports = {
  test: /\.(png|jpe?g|gif)$/i,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'assets/images',
      },
    },
  ],
}
