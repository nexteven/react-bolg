const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
    plugins: [
        // 抽离css插件
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].css' // 抽离css的输出目录和名称
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), // 压缩css
            new TerserPlugin({
                // 压缩js
                parallel: true, // 开启多线程压缩
                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log'] // 删除console.log
                    }
                }
            })
        ]
    }
};
