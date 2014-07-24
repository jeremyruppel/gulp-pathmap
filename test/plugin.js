var subject = require('..');
var assert = require('assert');
var gulp = require('gulp');

describe('plugin', function() {
  it('renames files according to the pathspec', function(done) {
    gulp.src(__filename)
      .pipe(subject('%X.min.js'))
      .on('data', function(file) {
        assert.equal(file.path, __dirname + '/plugin.min.js');
        done();
      });
  });
  it('passes a replacement callback', function(done) {
    gulp.src(__filename)
      .pipe(subject('%X%{js,*}x', function() {
        return 'min.js';
      }))
      .on('data', function(file) {
        assert.equal(file.path, __dirname + '/plugin.min.js');
        done();
      });
  });
});
