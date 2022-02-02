module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
      },
    ],
  },
};
