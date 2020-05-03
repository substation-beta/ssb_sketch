const path = require('path');
const project = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');

// Webpack configuration: <https://webpack.js.org/configuration/>
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[hash:8].js',
		chunkFilename: 'js/[name].[contenthash:8].js'
	},
	resolve: {
		extensions: [
			'.js',
			'.vue'
		],
		alias: {
			'~': path.resolve(__dirname)
		}
	},
	module: {
		rules: [
			// Javascript
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true
				},
				exclude: /node_modules/
			},
			// Styles
			{
				test: /\.css$/,
				use: [
					{
						// CSS options: https://github.com/webpack-contrib/mini-css-extract-plugin#options
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../' // Fix subfolder in CSS filename
						}
					},
					'css-loader'
				]
			},
			{
				test: /\.s(c|a)ss$/,
				use: [
					'vue-style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../' // Fix subfolder in CSS filename
						}
					},
					'css-loader',
					'sass-loader'
				]
			},
			// Images
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: 'images/[name].[contenthash:8].[ext]'
				}
			},
			// Fonts
			{
				test: /\.woff2?$/i,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[contenthash:8].[ext]'
				}
			},
			// Components
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			// HTML build: <https://github.com/jantimon/html-webpack-plugin#options>
			template: 'src/index.ejs',
			templateParameters: project,
			favicon: 'src/favicon.png'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new VueLoaderPlugin(),
		new CompressionPlugin({
			threshold: 8192,	// Don"t process already tiny files
			cache: true	// Faster re-builds
		}),
		new OfflinePlugin({
			// Offline capabilities: <https://github.com/NekR/offline-plugin/blob/master/docs/options.md>
			appShell: '/',
			responseStrategy: 'network-first',	// Force updates with existing cache
			version: new Date().toISOString(),	// Default doesn't contain seconds for development purpose
			ServiceWorker: {
				cacheName: project.name,	// In case of multiple apps on same domain (f.e. development)
				events: true	// Required for update events
			}
		}),
		new WebpackPwaManifest({
			// Manifest specification: <https://developer.mozilla.org/en-US/docs/Web/Manifest>
			name: project.display,
			short_name: project.name,
			description: project.description,
			categories: project.keywords,
			lang: 'en-US',
			background_color: 'black',
			theme_color: 'purple',
			display: 'standalone',
			orientation: 'portrait',
			start_url: '.',
			scope: '.',
			icons: [
				{
					src: 'src/favicon.png',
					sizes: [64, 128, 256, 512],	// 512x512 required for installation splash screen
					destination: 'icons',
					ios: true
				}
			],
			ios: true
		}),
		new RobotstxtPlugin({
			policy: [
				{
					userAgent: '*',
					allow: '/'
				}
			]
		})
	],
	optimization: {
		splitChunks: {
			name: 'vendors',
			chunks: 'all'
		},
		runtimeChunk: 'single'
	},
	performance: {
		hints: false
	},
	devServer: {
		compress: true,
		contentBase: path.join(__dirname, 'dist'),
		port: 8081
	}
}
