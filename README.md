# ts-universal (gulp plugin)

A simple gulp plugin that makes it possible to use typescript modules painlessly on browser and on server

Wraps each file into a neat closure, providing custom expors and require function, that works flawlessly on both ends
```js
 __ts.module("utils/utils.js", function(exports, require) {
        "use strict";
        const misc = require('./misc');
        exports.something = {};
    })
```


## Gulp Build example

```js
const gulp = require('gulp');
const rename = require("gulp-rename");
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const tsUniversal = require("./index.js");
const prettify = require('gulp-jsbeautifier');
const tsProject = ts.createProject('example/tsconfig.json');
gulp.task('default', function() {
   return gulp.src('example/**/*.ts')
      .pipe(ts(tsProject))
      .pipe(tsUniversal('build/', {
         base: 'build/',
         expose: 'root'
      }))
      .pipe(rename('out.js'))
      .pipe(prettify({
         js: {
            max_preserve_newlines: 1
         }
      }))
      .pipe(gulp.dest('build/'));
});
```

Check what it [converts to](build/out.js)

## Win

*out.js* can be required with "root.ts" exposed both to front end and backend!
