const path = require("path");
const webpack = require("webpack");
const fs = require("fs"); // to check if the file exists
const DotEnv = require("dotenv");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer/lib/BundleAnalyzerPlugin");


// reduce it to a nice object, the same as before (but with the variables from the file)
const reduceConfigMap = (source) => {
  return Object.keys(source).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(source[next]);
    return prev;
  }, {});
};

module.exports = (env) => {

  console.log("Webpack configuration parameters:", env);
  console.log("Picking the config-map .env file...");

  const dirname = path.join(__dirname);
  const baseEnvFilePath = dirname + "/.env";
  const configuredEnvFilePath = baseEnvFilePath + "." + env.ENVIRONMENT;
  const envFilePath = fs.existsSync(configuredEnvFilePath) ? configuredEnvFilePath : baseEnvFilePath;
  const envFile = DotEnv.config({ path: envFilePath }).parsed;
  console.log("Picked .env file:", envFilePath);

  console.log("Reducing the config-map parameters from the .env file...");
  const envFileObject = reduceConfigMap(envFile);

  console.log("Reducing the Webpack configuration parameters...");
  const envConfigurationObject = reduceConfigMap(env);

  console.log("Merging to the global environment parameters...");
  const configMap = { ...envFileObject, ...envConfigurationObject };

  console.log("Global environment parameters:");
  Object.entries(configMap).forEach(([key, value]) => console.log(" " + key + ": " + value));

  const isProduction = env.ENVIRONMENT === "production";
  const isAnalyze = env.ANALYZE;

  console.log("Running Webpack...");

  function resolve(dir) {
    return path.join(__dirname, '..', dir)
  }

  return {
    context: __dirname,
    mode: isProduction ? "production" : "development",
    entry: {
      app: "./src/index.js"
    },

    output: {
      publicPath: '/trackmasters.github.io',
      path: path.resolve(__dirname, "build"),
      filename: isProduction ? "[name].[contenthash].js" : "[name].[hash].js"
    },
    devtool: isProduction ? "source-map" : "eval-source-map",

    devServer: {
      compress: true,
      contentBase: path.join(__dirname, "dist"),
      port: 8080,
      hot: true,
      historyApiFallback: {
        rewrites: [{ from: /\//, to: "/404.html" }]
      },
      open: true,
      overlay: true,
      stats: "minimal",
      disableHostCheck: true
    },
    resolve: {
      extensions: [".js", ".jsx"],
      modules: [
        resolve(dirname),
        'node_modules'
      ]
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? "production" : "development"
            }
          }
        }, {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ]
        }, {
          test: /\.module.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }, {
          test: /\.s[ac]ss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 2
              }
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico|eot|otf|ttf|woff|woff2)$/,
          use: [
            'file-loader?name=/static/media/[name].[hash:8].[ext]'
          ]
        }, {
          test: /\.(md|txt)$/,
          use: "raw-loader"
        }
      ]
    },

    plugins: [
      isProduction ? false : new webpack.HotModuleReplacementPlugin(),
      isAnalyze ? new BundleAnalyzerPlugin() : false,
      new HtmlWebpackPlugin({ template: "public/index.html" }),
      isProduction && new MiniCssExtractPlugin({
        filename: "assets/css/[name].[contenthash:8].css",
        chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
      }),
      new webpack.DefinePlugin(configMap)
    ].filter(Boolean),

    optimization: {
      minimize: isProduction,
      splitChunks: {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `${cacheGroupKey}.${packageName.replace("@", "")}`;
            }
          },
          common: {
            minChunks: 2,
            priority: -10
          }
        }
      },
      runtimeChunk: "single"
    }
  };
};