var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry:{
      main:  "./src/index.js"
    },
    
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["main"]
    }
    ),
    

],
    module: {
        rules: [
            
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            }

        ]
    }
};