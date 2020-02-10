const { environment } = require('@rails/webpacker')
var webpack = require('webpack')
const path = require('path')

environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery'
  })
)

module.exports = environment
