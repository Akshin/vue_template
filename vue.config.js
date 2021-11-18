// const path = require('path');

module.exports = {
  devServer: {
    proxy: "https://akshin.atlassian.net/",
  },
  //   configureWebpack: {
  //     resolve: {
  //         alias: {
  //             '@': path.resolve(__dirname, "./src"),
  //         },
  //         extensions: ['.js', '.vue', '.json']
  //     }
  // }
};
