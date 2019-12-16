const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
  },
};

pwa: {
  iconPaths: {
    favicon32     : 'favicon.ico'
    favicon16     : 'favicon.ico'
  }
}