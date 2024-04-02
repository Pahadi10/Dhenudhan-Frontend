const swc = require('./swc.rule')
const css = require('./css.rule')
const svg = require('./svg.rule')
const images = require('./images.rule')
const fonts = require('./fonts.rule')
const moduleResolver = require('./module-resolver.rule')

// Make sure to always include `moduleResolver` as the last rule
module.exports = [swc, css, images, fonts, svg, moduleResolver]
