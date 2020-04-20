const path = require("path");
const project = require("./package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "js/[name].[hash:8].js",
		chunkFilename: "js/[name].[contenthash:8].js"
	},
	resolve: {
		extensions: [
			".js",
			".vue"
		]
	},
	module: {
		rules: [
			// Javascript
			{
				test: /\.js$/,
				loader: "babel-loader",
				options: {
					presets: [
						[
							"@babel/preset-env",
							{
								targets: ">= 2%, ie 11, not dead"
							}
						]
					],
					cacheDirectory: true
				},
				exclude: /node_modules/
			},
			// Styles
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../" // Fix subfolder in CSS filename
						}
					},
					"css-loader"
				]
			},
			{
				test: /\.s(c|a)ss$/,
				use: [
					"vue-style-loader",
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../" // Fix subfolder in CSS filename
						}
					},
					"css-loader",
					"sass-loader"
				]
			},
			// Images
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: "file-loader",
				options: {
					name: "images/[name].[contenthash:8].[ext]"
				}
			},
			// Fonts
			{
				test: /\.woff2?$/i,
				loader: "file-loader",
				options: {
					name: "fonts/[name].[contenthash:8].[ext]"
				}
			},
			// Components
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.ejs",
			templateParameters: project,
			favicon: "./src/favicon.png"
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css"
		}),
		new VueLoaderPlugin(),
		new CompressionPlugin({
			threshold: 8192,	// Don"t process already tiny files
			cache: true	// Faster re-builds
		}),
		new OfflinePlugin({
			appShell: "/",
			responseStrategy: "network-first",
			version: new Date().toISOString(),
			ServiceWorker: {
				cacheName: project.name + "-" + project.version,
				events: true
			}
		})
	],
	optimization: {
		splitChunks: {
			name: "vendors",
			chunks: "all"
		},
		runtimeChunk: "single"
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