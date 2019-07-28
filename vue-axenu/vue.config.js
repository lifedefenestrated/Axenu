const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");

module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        // pngquant: { quality: [50, 50] }
        plugins: [imageminMozjpeg({ quality: 50 })]
      })
    ]
  }
};
