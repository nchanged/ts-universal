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
