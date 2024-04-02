const fs = require('fs')
const path = require('path')

const { getSharedWorkspacesNames } = require('./workspaces.util')

const WINDOWS_FILE_PATH_MATCH = /\\/g

const replaceGlob = value => value.replace('/*', '')

const getAliasesAbsolutePaths = (rootDirectory, compilerOptions) =>
  Object.entries(compilerOptions.paths).reduce((formattedPaths, pathEntries) => {
    const [aliasName, aliasPath] = pathEntries.flat().map(replaceGlob)

    return {
      ...formattedPaths,
      [aliasName]: path.resolve(rootDirectory, compilerOptions.baseUrl, aliasPath),
      // This is to solve an specific issuse with React DnD library
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      'react/jsx-runtime': 'react/jsx-runtime.js',
    }
  }, {})

const getWebpackAlias = rootDirectory => {
  const sharedWorkspaces = getSharedWorkspacesNames()
  const isSharedWorkspace = new RegExp(`/(${sharedWorkspaces.join('|')}$)`, 'g').test(rootDirectory)

  if (isSharedWorkspace) {
    const sharedJsconfig = require(path.resolve(rootDirectory, 'jsconfig.json'))
    return getAliasesAbsolutePaths(rootDirectory, sharedJsconfig.compilerOptions)
  }

  const jsconfig = require(path.resolve(rootDirectory, 'jsconfig.json'))

  return getAliasesAbsolutePaths(rootDirectory, jsconfig.compilerOptions)
}

const getWebpackEntry = (rootDirectory, fileName = 'index.js') =>
  path.resolve(rootDirectory, 'src', fileName)

const getWebpackOutput = (
  rootDirectory,
  outputPath = 'dist',
  filename = path.basename(rootDirectory),
) => ({
  path: path.resolve(rootDirectory, outputPath),
  filename: `${filename}-load-script.js`,
})

const getWebpackHtmlTemplate = rootDirectory => path.resolve(rootDirectory, 'public', 'index.html')

const webpackHtmlTemplateExists = rootDirectory =>
  fs.existsSync(getWebpackHtmlTemplate(rootDirectory))

const normalizeWindowsPath = absolutePath => absolutePath.replace(WINDOWS_FILE_PATH_MATCH, '/')

module.exports = {
  replaceGlob,
  getWebpackAlias,
  getWebpackEntry,
  getWebpackOutput,
  normalizeWindowsPath,
  getWebpackHtmlTemplate,
  webpackHtmlTemplateExists,
}
