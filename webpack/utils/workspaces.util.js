const path = require('path')

const rootPackageJson = require(path.resolve(__dirname, '../../', 'package.json'))

const isPackageWorkspace = workspace => workspace.startsWith('packages/')
const isSharedWorkspace = workspace => !isPackageWorkspace(workspace)

const getSharedWorkspacesNames = () => {
  const { workspaces } = rootPackageJson
  return workspaces.filter(isSharedWorkspace)
}

module.exports = {
  isSharedWorkspace,
  isPackageWorkspace,
  getSharedWorkspacesNames,
}
