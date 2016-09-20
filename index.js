"use strict";

const through = require('through2');
const path = require('path');
const fs = require('fs');
const Concat = require('concat-with-sourcemaps');
const HEADER = '(function(___env___){\n/* ****** Setup ****** */\nvar __scope__ = ___env___.scope;\nvar $isBackend = ___env___.isBackend;\nvar __ts__ = ___env___.ts;\n\n'

// read footer template
let writeFooter = (exposed, npmName) => {
   let footer = fs.readFileSync(__dirname + '/_footer.js').toString()
   footer = footer.split('$_exposed_').join(exposed);
   footer = footer.split('$_npm_').join(npmName || '');
   footer = footer.replace(/(\n|\t|\s{2})/g,'')
   return footer;
}

let tsUniversal = (target, opts) => {
   opts = opts || {};
   var baseDir = opts.base;
   var expose = opts.expose || 'undefined';
   var npmName = opts.npm;
   var latestFile;
   var concat = new Concat(true, 'out.js', '\n');
   // writing header first
   concat.add(null, HEADER);

   function bufferContents(file, enc, cb) {
      var fname = file.path;
      fname = fname.replace(/\\/g, "/") // replace slashed (window platform)
      if (baseDir) { // slicing base dir
         if (fname.indexOf(baseDir) === 0) {
            fname = fname.slice(baseDir.length, fname.length);
         }
      }

      concat.add(null, '/* ******* ' + file.sourceMap.sources[0] +' ******* */\n__ts__.module("' + fname + '", function(exports, require){')
      concat.add(fname, file.contents, file.sourceMap);
      concat.add(null, '});\n')
      latestFile = file;
      cb();
   }

   function endStream(cb){
      var joinedFile = latestFile.clone({
         contents: false
      });
      joinedFile.path = path.join(latestFile.base, target);
      concat.add(null, writeFooter(expose, npmName))
      joinedFile.contents = concat.content;
      joinedFile.sourceMap = JSON.parse(concat.sourceMap);
      this.push(joinedFile);
      cb();
   }
   return through.obj(bufferContents, endStream);
}
module.exports = tsUniversal;
