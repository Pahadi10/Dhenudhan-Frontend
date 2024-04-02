const baseWebpackConfig = require('../../webpack/webpack.config.base')

module.exports = env => {
  return {
    ...baseWebpackConfig(__dirname, {
      env,
    }),
    devServer: {
      // Enables the use of the HTML5 History API (and the use of React Router
      // locally without the need for a server to handle the routing)
      historyApiFallback: true,
      // Enables the use of ngrok
      allowedHosts: ['.ngrok.io'],
    },
    output: {
      ...baseWebpackConfig(__dirname).output,
      publicPath: '/',
    },
  }
}
