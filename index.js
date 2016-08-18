"use strict";

const through = require('through2');
const path = require('path');
const fs = require('fs');
const lib = fs.readFileSync(__dirname + '/_ts.js').toString();
const Concat = require('concat-with-sourcemaps');

class Wrapper {
   static wrapFile(name, contents) {
      let data = ['__ts.module(', '"', name, '"',
         ', function(exports, require){\n', contents, '\n});\n'
      ]
      return data.join('');
   }
   static getHeader() {
      return '(function(__scope__, $isBackend){\n\t' + lib + '\n';
   }
   static getFooter(exposed) {
      return '__ts.expose(__scope__, "' + exposed + '") })( typeof exports !== "undefined" ? exports : window, typeof exports !== "undefined" )';
   }
}

const gulp = (target, opts) => {
   opts = opts || {};
   var contents = [Wrapper.getHeader()];
   var baseDir = opts.base;
   var expose = opts.expose || 'undefined';
   var latestFile;
   var concat = new Concat(true, 'all.js', '\n');
   concat.add(null, Wrapper.getHeader());

   function bufferContents(file, enc, cb) {
      var fname = file.path;
      fname = fname.replace(/\\/g, "/")
      if (baseDir) { // slicing base dir
         if (fname.indexOf(baseDir) === 0) {
            fname = fname.slice(baseDir.length, fname.length);
         }
      }
      concat.add(fname, Wrapper.wrapFile(fname, file.contents.toString()), file.sourceMap);
      latestFile = file;
      cb();
   }

   function endStream(cb) {
      var joinedFile = latestFile.clone({
         contents: false
      });
      joinedFile.path = path.join(latestFile.base, target);
      concat.add(null, Wrapper.getFooter(expose))
      joinedFile.contents = concat.content;
      joinedFile.sourceMap = JSON.parse(concat.sourceMap);
      this.push(joinedFile);
      cb();
   }
   return through.obj(bufferContents, endStream);
}

module.exports = gulp;
