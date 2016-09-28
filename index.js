"use strict";

const through = require('through2');
const path = require('path');
const fs = require('fs');
const Concat = require('concat-with-sourcemaps');
const appRoot = require("app-root-path");

let getHeader = () => {
    let header = fs.readFileSync(__dirname + '/header.js').toString();
    header = header.replace(/\t|\n/g, '');
    header = header.replace(/\s{2,}/g, '');
    return header;
}

// read footer template
let writeFooter = (exposed, moduleName, consume, exposed2window) => {
    let footer = fs.readFileSync(__dirname + '/_footer.js').toString()
    footer = footer.split('$__exposed__').join(exposed);
    footer = footer.split('$__module_name__').join(moduleName || '');
    footer = footer.split('$__consume__').join(consume || '');
    footer = footer.split('$__exposed2window__').join(exposed2window);

    return footer;
}

let tsUniversal = (target, opts) => {
    opts = opts || {};
    let expose = opts.expose;
    let moduleName = opts.name;
    let latestFile;
    let concat = new Concat(true, 'out.js', '\n');
    let consume = opts.consume || '';
    let expose2window = opts.expose2window === true ? 'true' : 'false'
    concat.add(null, getHeader());

    function bufferContents(file, enc, cb) {
        var fname = file.path;
        concat.add(fname, file.contents, file.sourceMap);
        latestFile = file;
        cb();
    }

    function endStream(cb) {
        var joinedFile = latestFile.clone({
            contents: false
        });
        concat.add(null, writeFooter(expose, moduleName, consume, expose2window))
        joinedFile.contents = concat.content;
        joinedFile.sourceMap = JSON.parse(concat.sourceMap);
        this.push(joinedFile);
        cb();
    }
    return through.obj(bufferContents, endStream);
}
module.exports = tsUniversal;