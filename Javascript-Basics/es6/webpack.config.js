module.exports = {
    entry: ["./app/index.js"],
    output: {
        path: "/home/tamauri/Documents/Programming/Javascript/git-projects/weird_javascript/Javascript-Basics/es6/build",
        filename:"bundle.js"
    },
    module: {
        loaders: [
	{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: "/home/tamauri/Documents/Programming/Javascript/git-projects/weird_javascript/Javascript-Basics/es6/node_modules"
        }
      ],
  },
  devServer: {
      port: 3000,
      contentBase: "/home/tamauri/Documents/Programming/Javascript/git-projects/weird_javascript/Javascript-Basics/es6/build",
      inline: true
  }
}
