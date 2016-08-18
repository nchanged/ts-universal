"use strict";

const through = require('through2');
const path = require('path');
const fs = require('fs');

const lib = fs.readFileSync(__dirname + '/_ts.js').toString()
   .replace(/(\n|\t)/g,'')
   .replace(/\s{2}/g, '')

const Concat = require('concat-with-sourcemaps');
const HEADER = '(function(__scope__, $isBackend){' + lib + '\n';

let writeFooter = (exposed) => {
   return '__ts.expose(__scope__, "' + exposed + '") })( typeof exports !== "undefined" ? exports : window, typeof exports !== "undefined" )';
}

let tsUniversal = (target, opts) => {
   opts = opts || {};
   var baseDir = opts.base;
   var expose = opts.expose || 'undefined';
   var latestFile;
   var concat = new Concat(true, '', '\n');
   // writing header first
   concat.add(null, HEADER);

   let bufferContents = (file, enc, cb) => {
      var fname = file.path;
      fname = fname.replace(/\\/g, "/") // replace slashed (window platform)
      if (baseDir) { // slicing base dir
         if (fname.indexOf(baseDir) === 0) {
            fname = fname.slice(baseDir.length, fname.length);
         }
      }
      concat.add(null, '/* ******* ' + file.sourceMap.sources[0] +' ******* */\n__ts.module("' + fname + '", function(exports, require){')
      concat.add(fname, file.contents, file.sourceMap);
      concat.add(null, '});\n')
      latestFile = file;
      cb();
   }

   let endStream = (cb) => {
      var joinedFile = latestFile.clone({
         contents: false
      });
      joinedFile.path = path.join(latestFile.base, target);
      concat.add(null, writeFooter(expose))
      joinedFile.contents = concat.content;
      joinedFile.sourceMap = JSON.parse(concat.sourceMap);
      this.push(joinedFile);
      cb();
   }
   return through.obj(bufferContents, endStream);
}
module.exports = tsUniversal;
