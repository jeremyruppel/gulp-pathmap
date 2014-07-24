# gulp-pathmap

Rename files with [pathmap][pathmap], rake's [pathmap](http://devblog.avdi.org/2014/04/24/rake-part-4-pathmap/) for JavaScript. Think of it like `sprintf` for paths.

## Usage

``` js
var gulp = require('gulp');
var pathmap = require('pathmap');

// Renames all files according to the pathspec.
// In this example, the %X token is replaced with the file's
// path up to but not including the extension.
gulp.task('rename', function(){
  return gulp.src('lib/*.js')
    .pipe(pathmap('%X.min.js'))
    .pipe(gulp.dest('build'));
});
```

See the [pathmap][pathmap] docs for all supported patterns.

## License

[MIT License][LICENSE]

[pathmap]: https://github.com/jeremyruppel/pathmap
[LICENSE]: https://github.com/jeremyruppel/gulp-pathmap/blob/master/LICENSE
