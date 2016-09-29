# ts-universal (gulp plugin)

A simple gulp plugin that makes it possible to use typescript modules painlessly on browser and on server.
Say no webpack!

![Coding](tsuniversal.gif)

## Features

* Converts typescript output into a unversal module (1 file)
* Exposes targets naturaly to window or NodeJS
* 100% Typescript sourcemaps support
* Simplicity - 4 variables to configure
* No extra libraries required!

## How it works

*tsUniversal* works with AMD typescript importer. But instead of having AMD, tsUniversal creates a tiny header that does magic!


## Try it now!
* Clone this repository
* Run npm install && gulp
* NodeJS: node [build/test.js](build/test.js)
* Browser: launch [build/index.html](build/index.html) in your browser

## Install it

```js
npm install ts-universal --save-dev
```

## Gulp Build example

```js
const gulp = require('gulp');
const rename = require("gulp-rename");
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const tsUniversal = require("./index.js");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = ts.createProject('example/tsconfig.json', {});
gulp.task('default', function() {
    var toResult = gulp.src('example/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
    return toResult.js.pipe(tsUniversal('build/', {
        name: 'my-lib-name',
        expose: 'root',
        expose2window: true,
        consume: ["controllers/", "routes/"]
    }))
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
