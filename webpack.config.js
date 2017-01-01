module.exports = {
  context: __dirname + '/develop/assets/js',
  entry: {
    'app': './app.js',
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      { 
        test: /\.js[x]?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query:{
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};