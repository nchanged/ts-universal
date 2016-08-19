(function(__scope__, $isBackend){var __ts = { register: {}, pathJoin: function() { var parts = [];for (var i = 0, l = arguments.length; i < l; i++) { parts = parts.concat(arguments[i].split("/"));}var newParts = [];for (i = 0, l = parts.length; i < l; i++) { var part = parts[i]; if (!part || part === ".") {continue } if (part === "..") {newParts.pop(); } else {newParts.push(part); }}if (parts[0] === "") { newParts.unshift("")}return newParts.join("/") || (newParts.length ? "/" : "."); }, module: function(name, fn) {var _exports = {};var relative = "./";var rel = name.match(/^(.*)\/[\w]+\.js$/);if (rel) { relative = rel[1];}fn(_exports, this.require.bind({ self: this, path: name, relative: relative}));this.register[name] = _exports; }, require: function(name) {var self = this.self;var path = this.path;var relative = this.relative;if (name[0] === ".") { var target = __ts.pathJoin(relative, name) + ".js"; if (self.register[target]) {return self.register[target]; }} else { return require(name);} }, expose: function(scope, path) {path = path.match(/\.js^/) ? path : path + ".js";var exported = this.register[path];if (exported !== undefined) { for (var key in exported) {scope[key] = exported[key]; }} else { throw new Error('Module "' + path + '" Cannot be exposed! Make sure you export variables correctly and the module is present');} }}

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
        console.log("Something!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlL1NwYWNlLnRzIiwiV29ybGQvV29ybGQudHMiLCJIZWxsby9IZWxsby50cyIsInJvb3QudHMiLCJiYXIvYS50cyIsImZvby9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFBQTtRQUNRLFNBQUksR0FBVyxHQUFHLENBQUM7SUFDM0IsQ0FBQztBQUFELENBQUM7QUFGWSxhQUFLLFFBRWpCLENBQUE7Ozs7Ozs7QUNGRCx3QkFBb0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUVyQztJQUVDO1FBQ0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7QUFDRixDQUFDO0FBTlksYUFBSyxRQU1qQixDQUFBOzs7Ozs7O0FDUkQsd0JBQW9CLGdCQUFnQixDQUFDLENBQUE7QUFFckM7SUFFQztRQUNDLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUNELFlBQVk7UUFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzFCLENBQUM7QUFDRixDQUFDO0FBVlksYUFBSyxRQVVqQixDQUFBOzs7Ozs7O0FDWkQsd0JBQW9CLGVBQWUsQ0FBQyxDQUFBO0FBRXpCLGFBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDOzs7Ozs7O0FDRi9CO0FBRUEsQ0FBQztBQUZEO3dCQUVDLENBQUE7Ozs7Ozs7QUNGRCxvQkFBbUIsVUFBVSxDQUFDLENBQUE7QUFFOUIscUJBQW9DLFdBQU07QUFFMUMsQ0FBQztBQUZEO3dCQUVDLENBQUEiLCJmaWxlIjoib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNwYWNlIHtcclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nID0gJyAnO1xyXG59IiwiaW1wb3J0IHtTcGFjZX0gZnJvbSAnLi4vU3BhY2UvU3BhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmxkIHtcclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRsZXQgc3BhY2UgPSBuZXcgU3BhY2UoKTtcclxuXHRcdHRoaXMudGV4dCA9IHNwYWNlLnRleHQgKyAnV29ybGQhJztcclxuXHR9XHJcbn0iLCJpbXBvcnQge1dvcmxkfSBmcm9tICcuLi9Xb3JsZC9Xb3JsZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVsbG8ge1xyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdGxldCB3b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cdFx0dGhpcy50ZXh0ID0gJ0hlbGxvJyArIHdvcmxkLnRleHQgKyAgTWF0aC5yYW5kb20oKTtcclxuXHR9XHJcblx0c2F5U29tZXRoaW5nKClcclxuXHR7XHJcblx0XHRjb25zb2xlLmxvZyhcIlNvbWV0aGluZyFcIilcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtIZWxsb30gZnJvbSAnLi9IZWxsby9IZWxsbyc7XG5cbmV4cG9ydCBsZXQgaGVsbG8gPSBuZXcgSGVsbG8oKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFDbGFzcyB7XG5cbn1cbiIsImltcG9ydCBBQ2xhc3MgZnJvbSAnLi4vYmFyL2EnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCQ2xhc3MgZXh0ZW5kcyBBQ2xhc3Mge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
