const path = require('path')

module.exports = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: [
    {
      loader: path.resolve(__dirname, '..', 'loaders', 'module-resolver.loader'),
    },
  ],
}
