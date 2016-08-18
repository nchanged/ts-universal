(function(__scope__, $isBackend){var __ts = { register: {}, pathJoin: function() { var parts = [];for (var i = 0, l = arguments.length; i < l; i++) { parts = parts.concat(arguments[i].split("/"));}var newParts = [];for (i = 0, l = parts.length; i < l; i++) { var part = parts[i]; if (!part || part === ".") {continue } if (part === "..") {newParts.pop(); } else {newParts.push(part); }}if (parts[0] === "") { newParts.unshift("")}return newParts.join("/") || (newParts.length ? "/" : "."); }, module: function(name, fn) {var _exports = {};var relative = "./";var rel = name.match(/^(.*)\/[\w]+\.js$/);if (rel) { relative = rel[1];}fn(_exports, this.require.bind({ self: this, path: name, relative: relative}));this.register[name] = _exports; }, require: function(name) {var self = this.self;var path = this.path;var relative = this.relative;if (name[0] === ".") { var target = __ts.pathJoin(relative, name) + ".js"; if (self.register[target]) {return self.register[target]; }} else { return require(name);} }, expose: function(scope, path) {path = path.match(/\.js^/) ? path : path + ".js";var exported = this.register[path];if (exported !== undefined) { for (var key in exported) {scope[key] = exported[key]; }} }}

/* ******* Space/Space.ts ******* */
__ts.module("Space/Space.js", function(exports, require){
"use strict";
class Space {
    constructor() {
        this.text = ' ';
    }
}
exports.Space = Space;

});

/* ******* World/World.ts ******* */
__ts.module("World/World.js", function(exports, require){
"use strict";
const Space_1 = require('../Space/Space');
class World {
    constructor() {
        let space = new Space_1.Space();
        this.text = space.text + 'World!';
    }
}
exports.World = World;

});

/* ******* Hello/Hello.ts ******* */
__ts.module("Hello/Hello.js", function(exports, require){
"use strict";
const World_1 = require('../World/World');
class Hello {
    constructor() {
        let world = new World_1.World();
        this.text = 'Hello' + world.text + Math.random();
    }
    saySomething() {
        alert(1);
    }
}
exports.Hello = Hello;

});

/* ******* root.ts ******* */
__ts.module("root.js", function(exports, require){
"use strict";
const Hello_1 = require('./Hello/Hello');
exports.hello = new Hello_1.Hello();

});

/* ******* bar/a.ts ******* */
__ts.module("bar/a.js", function(exports, require){
"use strict";
class AClass {
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AClass;

});

/* ******* foo/b.ts ******* */
__ts.module("foo/b.js", function(exports, require){
"use strict";
const a_1 = require('../bar/a');
class BClass extends a_1.default {
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BClass;

});

__ts.expose(__scope__, "root") })( typeof exports !== "undefined" ? exports : window, typeof exports !== "undefined" )
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlL1NwYWNlLnRzIiwiV29ybGQvV29ybGQudHMiLCJIZWxsby9IZWxsby50cyIsInJvb3QudHMiLCJiYXIvYS50cyIsImZvby9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFBQTtRQUNRLFNBQUksR0FBVyxHQUFHLENBQUM7SUFDM0IsQ0FBQztBQUFELENBQUM7QUFGWSxhQUFLLFFBRWpCLENBQUE7Ozs7Ozs7QUNGRCx3QkFBb0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUVyQztJQUVDO1FBQ0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7QUFDRixDQUFDO0FBTlksYUFBSyxRQU1qQixDQUFBOzs7Ozs7O0FDUkQsd0JBQW9CLGdCQUFnQixDQUFDLENBQUE7QUFFckM7SUFFQztRQUNDLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUNELFlBQVk7UUFFWCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0FBQ0YsQ0FBQztBQVZZLGFBQUssUUFVakIsQ0FBQTs7Ozs7OztBQ1pELHdCQUFvQixlQUFlLENBQUMsQ0FBQTtBQUV6QixhQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQzs7Ozs7OztBQ0YvQjtBQUVBLENBQUM7QUFGRDt3QkFFQyxDQUFBOzs7Ozs7O0FDRkQsb0JBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBRTlCLHFCQUFvQyxXQUFNO0FBRTFDLENBQUM7QUFGRDt3QkFFQyxDQUFBIiwiZmlsZSI6Im91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTcGFjZSB7XHJcblx0cHVibGljIHRleHQ6IHN0cmluZyA9ICcgJztcclxufSIsImltcG9ydCB7U3BhY2V9IGZyb20gJy4uL1NwYWNlL1NwYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0bGV0IHNwYWNlID0gbmV3IFNwYWNlKCk7XHJcblx0XHR0aGlzLnRleHQgPSBzcGFjZS50ZXh0ICsgJ1dvcmxkISc7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtXb3JsZH0gZnJvbSAnLi4vV29ybGQvV29ybGQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlbGxvIHtcclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRsZXQgd29ybGQgPSBuZXcgV29ybGQoKTtcclxuXHRcdHRoaXMudGV4dCA9ICdIZWxsbycgKyB3b3JsZC50ZXh0ICsgIE1hdGgucmFuZG9tKCk7XHJcblx0fVxyXG5cdHNheVNvbWV0aGluZygpXHJcblx0e1xyXG5cdFx0YWxlcnQoMSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7SGVsbG99IGZyb20gJy4vSGVsbG8vSGVsbG8nO1xuXG5leHBvcnQgbGV0IGhlbGxvID0gbmV3IEhlbGxvKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBQ2xhc3Mge1xuXG59XG4iLCJpbXBvcnQgQUNsYXNzIGZyb20gJy4uL2Jhci9hJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQkNsYXNzIGV4dGVuZHMgQUNsYXNzIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
