// const image = require('rollup-plugin-image')
// const url = require("rollup-plugin-url")

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    // config.plugins.push(image())

    // config.plugins.push(url({
    //   limit: 10 * 1024, // inline files < 10k, copy files > 10k
    //   include: ["**/*.svg"], // defaults to .svg, .png, .jpg and .gif files
    //   emitFiles: true // defaults to true
    // }))
    return config; // always return a config.
  },
};
