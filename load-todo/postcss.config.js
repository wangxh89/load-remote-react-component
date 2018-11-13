module.exports = {
  plugins: {
//    'postcss-import': {},
    'postcss-cssnext': {
      browsers:['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
    }
//    'autoprefixer':{},
  }
}