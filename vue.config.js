module.exports = {
  devServer: {
    port: 3333,
    proxy: 'http://localhost:3000'
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
};
