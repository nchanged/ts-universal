(function(__scope__, $isBackend) {
    var __ts = {
        register: {},
        pathJoin: function() {
            var parts = [];
            for (var i = 0, l = arguments.length; i < l; i++) {
                parts = parts.concat(arguments[i].split("/"));
            }
            var newParts = [];
            for (i = 0, l = parts.length; i < l; i++) {
                var part = parts[i];
                if (!part || part === ".") {
                    continue
                }
                if (part === "..") {
                    newParts.pop();
                } else {
                    newParts.push(part);
                }
            }
            if (parts[0] === "") {
                newParts.unshift("")
            }
            return newParts.join("/") || (newParts.length ? "/" : ".");
        },
        module: function(name, fn) {
            var _exports = {};
            var relative = "./";
            var rel = name.match(/^(.*)\/[\w]+\.js$/);
            if (rel) {
                relative = rel[1];
            }
            fn(_exports, this.require.bind({
                self: this,
                path: name,
                relative: relative
            }));
            this.register[name] = _exports;
        },
        require: function(name) {
            var self = this.self;
            var path = this.path;
            var relative = this.relative;
            if (name[0] === ".") {
                var target = __ts.pathJoin(relative, name) + ".js";
                if (self.register[target]) {
                    return self.register[target];
                }
            } else {
                return require(name);
            }
        },
        expose: function(scope, path) {
            path = path.match(/\.js^/) ? path : path + ".js";
            var exported = this.register[path];
            if (exported !== undefined) {
                for (var key in exported) {
                    scope[key] = exported[key];
                }
            }
        }
    }
    __ts.module("bar/a.js", function(exports, require) {
        "use strict";
        class AClass {}
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = AClass;
    })
    __ts.module("foo/b.js", function(exports, require) {
        "use strict";
        const a_1 = require('../bar/a');
        class BClass extends a_1.default {}
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = BClass;
    })
    __ts.module("root.js", function(exports, require) {
        "use strict";
        const b_1 = require('./foo/b');
        exports.SuperStuff = b_1.default;
    })
    __ts.expose(__scope__, "root")
})(typeof exports !== "undefined" ? exports : window, typeof exports !== "undefined")