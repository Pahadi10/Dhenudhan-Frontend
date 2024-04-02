const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const { IS_DEV } = require('./constants/environment.constants')
const {
  getWebpackAlias,
  getWebpackEntry,
  getWebpackOutput,
  getWebpackHtmlTemplate,
  webpackHtmlTemplateExists,
} = require('./utils/paths.util')
const rules = require('./rules')

module.exports = (rootDirectory, options) => {
  const htmlTemplateExists = webpackHtmlTemplateExists(rootDirectory)
  const usesHtmlWebpackPlugin = IS_DEV && htmlTemplateExists
  const dotEnvPlugin = new Dotenv({
    systemvars: true,
  })
  const circularDependencyPlugin = new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: true,
    cwd: process.cwd(),
  })
  const usesCircularDependencyPlugin = options?.env?.shouldDetectCircularDepedency

  const plugins = [dotEnvPlugin]
  if (usesCircularDependencyPlugin) {
    plugins.push(circularDependencyPlugin)
  }
  if (usesHtmlWebpackPlugin) {
    plugins.push(
      new HtmlWebpackPlugin({
        template: getWebpackHtmlTemplate(rootDirectory),
      }),
    )
  }

  return {
    mode: IS_DEV ? 'development' : 'production',
    entry: getWebpackEntry(rootDirectory),
    output: getWebpackOutput(rootDirectory),
    resolve: {
      alias: getWebpackAlias(rootDirectory),
    },
    module: { rules },
    plugins,
  }
}
