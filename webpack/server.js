import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from './config';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
  }
});