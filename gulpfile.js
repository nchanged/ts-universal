const gulp = require('gulp');
const rename = require("gulp-rename");
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const tsUniversal = require("./index.js");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = ts.createProject('example/tsconfig.json');
gulp.task('default', function() {
   var toResult = gulp.src('example/**/*.ts')
      .pipe(sourcemaps.init())
      .pipe(ts(tsProject))

   toResult.dts.pipe(gulp.dest('build/definitions'))

   return toResult.pipe(tsUniversal('build/', {
         base: 'build/',
         expose: 'root',
         npm : 'my-lib-name'
      }))
      .pipe(rename('out.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/'));
});
