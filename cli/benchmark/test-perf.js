import path from 'path'

import glob from 'glob'
import webpack from 'webpack'

import baseWebpackConfig from '../../webpack/webpack.config.base'

const BENCHMARK_FILES_PATTERN = 'packages/**/benchmarks/*.benchmark.js'

const getBenchmarkPaths = filePath => {
  const projectRootDirectory = path.resolve(__dirname, '../../')
  const resolvedFilePath = path.resolve(projectRootDirectory, filePath)
  const outputFolderPath = path.resolve(projectRootDirectory, '.benchmark')
  const packageFolderPath = path.resolve(resolvedFilePath, '../../../')

  return {
    resolvedFilePath,
    outputFolderPath,
    packageFolderPath,
  }
}

const compile = (filePath, outputFilename) => {
  const { resolvedFilePath, outputFolderPath, packageFolderPath } = getBenchmarkPaths(filePath)

  const compiler = webpack({
    ...baseWebpackConfig(packageFolderPath),
    entry: resolvedFilePath,
    output: {
      path: outputFolderPath,
      filename: outputFilename,
    },
  })

  return new Promise(resolve => {
    compiler.run(async error => {
      if (error) {
        console.error(error)
        process.exit(1)
      }

      const outputPath = path.resolve(outputFolderPath, outputFilename)
      resolve({ outputPath, outputFolderPath })
    })
  })
}

glob(BENCHMARK_FILES_PATTERN, async (error, filesPaths) => {
  if (error) {
    console.error(error)
    process.exit(1)
  }

  await Promise.all(
    filesPaths.map(async filePath => {
      const filename = path.basename(filePath).replace(path.extname(filePath), '')
      const outputFilename = `${filename}-result.js`

      const { outputPath, outputFolderPath } = await compile(filePath, outputFilename)
      // here we'd have to run the benchmark in `puppeteer` (using `serve`) and get the results
      console.log({ outputPath, outputFolderPath })
    }),
  )
})
