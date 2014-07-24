var pathmap = require('pathmap');
var map = require('map-stream');

/**
 * Renames each file according to `spec` and an optional replacement
 * callback. See the pathmap docs for all supported options.
 */
module.exports = function(spec, callback) {
  return map(function(file, done) {
    file.path = pathmap(file.path, spec, callback);
    done(null, file);
  });
};
