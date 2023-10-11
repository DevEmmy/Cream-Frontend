const nodeExternals = require('webpack-node-externals');

module.exports = {
  // ... other configuration options ...

  externals: [nodeExternals()],
};
