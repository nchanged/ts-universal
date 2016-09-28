const gulp = require('gulp');
const rename = require("gulp-rename");
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const tsUniversal = require("./index.js");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = ts.createProject({
    target: "es6",
    module: "amd",
    outFile: "out.js",
});
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