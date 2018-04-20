module.exports = {
  plugins: {
    'postcss-import': {
      path: './src/styles',
    },
    'postcss-cssnext': {
      browsers: ['> 1%', 'last 4 versions', 'iOS >= 8', 'Android >= 4'], // http://browserl.ist/
    },
    'postcss-flexbugs-fixes': {},
  },
};
