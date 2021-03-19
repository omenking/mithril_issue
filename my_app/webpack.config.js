const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'main.js',
  },
  resolve: {
    fallback: {
      "crypto": false
    },
    extensions: ['.js','.json'],
    modules: ['node_modules/'],
    alias: {
      'shared/components' : path.resolve(__dirname, 'node_modules/shared_ui/components/'),
    }
  },

  devServer: {
    proxy: {
      '/api/notifications': {
        bypass: (req, res) => res.send([
          {id: 1, name: 'Captian'},
          {id: 2, name: 'John'},
          {id: 3, name: 'Luc'},
          {id: 4, name: 'Picard'},
          {id: 5, name: 'of'},
          {id: 6, name: 'the'},
          {id: 7, name: 'USS'},
          {id: 8, name: 'Enterprise'}
        ])
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}
