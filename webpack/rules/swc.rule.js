module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules)/,
  use: {
    // `.swcrc` can be used to configure swc
    loader: 'swc-loader',
    options: {
      jsc: {
        parser: {
          syntax: 'ecmascript',
          jsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
        target: 'es5',
        loose: false,
        externalHelpers: false,
        // Requires v1.2.50 or upper and requires target to be es2016 or upper.
        keepClassNames: false,
      },
    },
  },
}
