const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
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
}
