// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const package = require('../package.json');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      //  {
      //   test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/
      // },
      {
        test: /\.css|.scss$/,
        loader: `style!css?modules&importLoaders=2&sourceMap&localIdentName=${package.config.cssModulePattern}!sass?outputStyle=expanded&sourceMap`
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=8192&name=[name].[ext]'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?name=images/[name].[ext]&limit=10000&mimetype=image/svg+xml'
      }
    ],
  },
};
