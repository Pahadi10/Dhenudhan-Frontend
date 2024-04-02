module.exports = {
  test: /\.(ttf|woff?2)$/i,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'assets/fonts',
      },
    },
  ],
}
