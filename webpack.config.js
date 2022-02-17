 const path = require('path');
 const HWP = require('html-webpack-plugin');
 module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
    module: {
        rules:[{
           test: /.js|jsx$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
        }]
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname,'/src/index.html')}
        )
    ],
    // proxy: {
    //     '/api/**': {
    //         target:' http://localhost:3000',
    //         secure: false
    //     }
    // }
      //sets up dev environment
  devServer: {
    //proxy for diff front/back end servers
    proxy: {
      '/': 'http://localhost:3000',
    },
    //sets up the path for the static files
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8080,
  },
 }