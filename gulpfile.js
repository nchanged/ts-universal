const gulp = require('gulp');
const rename = require("gulp-rename");
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const tsUniversal = require("./index.js");
const prettify = require('gulp-jsbeautifier');
const sourcemaps = require('gulp-sourcemaps');
const tsProject = ts.createProject('example/tsconfig.json');
gulp.task('default', function() {
   return gulp.src('example/**/*.ts')
      .pipe(sourcemaps.init())
      .pipe(ts(tsProject))

   .pipe(tsUniversal('build/', {
         base: 'build/',
         expose: 'root'
      }))
      .pipe(rename('out.js'))
      // .pipe(prettify({
      //    js: {
      //       max_preserve_newlines: 1
      //    }
      // }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/'));
});
