const { configure } = require('../../jest/jest.config.base')

module.exports = configure({
  rootDir: '../../',
  moduleNameMapper: {
    '^~src/(.*)$': `<rootDir>/packages/shop/src/$1`,
  },
})
