const path = require('path');

module.exports = {
  pwa: {
    name: 'Minecloud',
    themeColor: '#0069B4'
  },

  lintOnSave: undefined,

  pluginOptions: {
    moment: {
      locales: ['en-gb', 'en-us']
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, 'src')
      }
    }
  }
};
