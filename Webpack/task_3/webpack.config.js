const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      header: './modules/header/header.js',
      body: './modules/body/body.js',
      footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devServer: {
      port: 8564, // Specify the port for the development server
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            include: path.resolve(__dirname, 'css'),
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192, // Convert images < 8kb to base64 strings
                  name: 'images/[name].[ext]', // Output path for images
                },
              },
              'image-webpack-loader', // Add image optimization loader
            ],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
          },
        ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        template: './public/header.html', // Use the HTML templates for each entry point
        inject: 'body',
        chunks: ['header'],
        filename: 'header.html',
      }),
      new HTMLWebpackPlugin({
        template: './public/body.html',
        inject: 'body',
        chunks: ['body'],
        filename: 'body.html',
      }),
      new HTMLWebpackPlugin({
        template: './public/footer.html',
        inject: 'body',
        chunks: ['footer'],
        filename: 'footer.html',
      }),
      new HTMLWebpackPlugin({
        template: './public/index.html', // Use a main HTML template that includes references
        inject: 'body',
        chunks: ['header', 'body', 'footer'],
        filename: 'index.html',
      }),
    ],
    devtool: 'inline-source-map',
}
