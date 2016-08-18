# ts-universal (gulp plugin)

A simple gulp plugin that makes it possible to use typescript modules painlessly on browser and on server

## Features

* Converts your code into a unversal module without transpiling it
* Exposes target naturaly to window or NodeJS exports
* 100% Typescript sourcemaps support
* Simplicity - No need to configure!


## How it works

*tsUniversal* Wraps each file into a neat closure, providing custom exports and require function, that work flawlessly in both ends
```js
 __ts.module("utils/utils.js", function(exports, require) {
     "use strict";
     const misc = require('./misc');
     exports.something = {};
})
```

## How to try:
Clone this project and run "gulp" check => [out.js](build/out.js#L63)

## Gulp Build example

```js
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
       
       .pipe(tsUniversal('build/', { // ALL YOU NEED
         base: 'build/',
         expose: 'root'
       }))
      
      .pipe(rename('out.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/'));
});

```

## Win

*out.js* can be required with "root.ts" exposed both to front end and backend!

To test in on server:

```bash
node build/test.js
```

On browser -> just open [build/index.html](build/index.html) in your browser!
