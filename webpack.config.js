const path = require('path');
const { VueLoaderPlugin } = require('vue-loader'); 

module.exports = {
  entry: './src/main.js', // Your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // Apply the rule to Vue files
        loader: 'vue-loader', // Use the vue-loader
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile ES6
        },
      },
      {
        test: /\.css$/, // Apply the rule to CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // Add the VueLoaderPlugin
  ],
};
