/* global __dirname */

const path = require('node:path')

module.exports = {
  plugins: {
    "@developwithstyle/postcss-custom-media": {
      importFrom: "../../config/custom_media_queries.css"
    },
    "postcss-mixins": {
      mixinsFiles: [
        path.join(__dirname, "lib", "mixins", "*.mixin.css"),
        path.join(__dirname, "packages", "**/*.mixin.css")
      ]
    }
  }
}
