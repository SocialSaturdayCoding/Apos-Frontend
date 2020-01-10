var path = require('path')
var webpack = require('webpack')
var fs = require('fs')
var MinifyPlugin = require('babel-minify-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var TerserPlugin = require('terser-webpack-plugin')

var date = new Date()
var build_number = date.getFullYear() + '.' +
                   (date.getMonth() + 1) + '.' +
                   date.getDate() + '.' +
                   date.getHours() + '.' +
                   date.getMinutes()

console.log('Build: ' + build_number)

module.exports = {
	mode: 'development',
	entry: './src/main.js',

	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js',
		crossOriginLoading: 'anonymous',
		globalObject: 'this'
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js',
			'src': path.resolve(__dirname, 'src'),
			'components': path.resolve(__dirname, 'src', 'components'),
			'views': path.resolve(__dirname, 'src', 'views')
		},

		extensions: ['.ts', '.js', '.vue']
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'ts-loader',
						options: {
							silent: true,
							transpileOnly: false
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', {
							targets: {
								browsers: ['last 2 versions', '>= 3%', 'not ie <= 10']
							},
							modules: false
						}]],

						plugins: [
							'syntax-dynamic-import'
						]
					}
				}
			},
			{
				test: /\.svg$/,
				use: 'svg-inline-loader?classPrefix'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				use: 'file-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						query: {
							name: '[name].[ext]?[hash]'
						}
					}
				]
			}
		]
	},

	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
		hot: true,
		inline: true,
		proxy: {
			'/api/**': {
				target: 'http://apos.localhost',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
		},
		contentBase: path.join(__dirname, 'public'),
		public: 'apos.localhost',
		host: 'apos.localhost',
		port: 8999
	},

	devtool: false,

	plugins: [
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
	         'process.build': JSON.stringify(build_number)
	     })
	],

	optimization: {
		minimizer: [
			new TerserPlugin({
				                 cache: true,
				                 parallel: true,
				                 sourceMap: true
			                 })
		]
	}
}

module.exports.plugins = (module.exports.plugins || []).concat([
   new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"dev"'
        }
    }),
   new webpack.HotModuleReplacementPlugin(),
   new webpack.EvalSourceMapDevToolPlugin({})
])
