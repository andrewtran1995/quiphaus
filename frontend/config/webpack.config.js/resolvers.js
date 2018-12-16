const paths = require('../paths');

module.exports = {
  extensions: ['.ts', '.tsx', '.js', '.mjs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
};
