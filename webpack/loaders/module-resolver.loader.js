const path = require('path')

const { replaceGlob, normalizeWindowsPath } = require('../utils/paths.util')

const getWorkspacesPathsTest = paths => new RegExp(`(${paths.map(replaceGlob).join('|')})`, 'g')
const getImportPathTest = folder => new RegExp(`/${folder}/`)

function moduleResolverLoader(source) {
  // Resolves the root directory of the project
  const rootDirectory = path.resolve(__dirname, '..', '..')

  // Gets all workspaces from the project's `package.json` file
  const { workspaces } = require(path.resolve(rootDirectory, 'package.json'))

  // Get the root context base name so we know where the compilation started from
  const rootContextBaseName = path.basename(this.rootContext)
  // Filter out workspaces that are not the root context
  const isResolveableWorkspace = workspace => workspace !== rootContextBaseName

  // Resolve paths for all workspaces except the root one (including `lib` and such)
  return workspaces.filter(isResolveableWorkspace).reduce((sourceResult, workspace) => {
    const folderPath = path.resolve(rootDirectory, workspace)
    const folderJsconfig = require(path.resolve(folderPath, 'jsconfig.json'))
    const isCurrentPackage = getImportPathTest(workspace).test(this.resource)
    const hasCompilerPaths = !!folderJsconfig.compilerOptions.paths

    if (isCurrentPackage && hasCompilerPaths) {
      const { paths: folderJsconfigPaths } = folderJsconfig.compilerOptions
      const aliasesKeys = Object.keys(folderJsconfigPaths)
      const aliasesKeysTest = getWorkspacesPathsTest(aliasesKeys)
      const output = sourceResult.replace(aliasesKeysTest, alias => {
        const [relativeAliasPath] = folderJsconfigPaths[`${alias}/*`]
        const absoluteAliasPath = path.resolve(folderPath, replaceGlob(relativeAliasPath))
        return normalizeWindowsPath(absoluteAliasPath)
      })

      return output
    }

    return sourceResult
  }, source)
}

module.exports = moduleResolverLoader
