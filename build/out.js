(function(___env___){
/* ****** Setup ****** */
var __scope__ = ___env___.scope;
var $isBackend = ___env___.isBackend;
var __ts__ = ___env___.ts;


/* ******* Space/Space.ts ******* */
__ts__.module("Space/Space.js", function(exports, require){
"use strict";
class Space {
    constructor() {
        this.text = ' ';
    }
}
exports.Space = Space;

});

/* ******* World/World.ts ******* */
__ts__.module("World/World.js", function(exports, require){
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
__ts__.module("Hello/Hello.js", function(exports, require){
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
__ts__.module("root.js", function(exports, require){
"use strict";
const Hello_1 = require('./Hello/Hello');
exports.hello = new Hello_1.Hello();

});

/* ******* bar/a.ts ******* */
__ts__.module("bar/a.js", function(exports, require){
"use strict";
class AClass {
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AClass;

});

/* ******* foo/b.ts ******* */
__ts__.module("foo/b.js", function(exports, require){
"use strict";
const a_1 = require('../bar/a');
class BClass extends a_1.default {
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BClass;

});

__ts__.expose(__scope__, "root");})(function($scope, $isBackend) { var ts = {register: {},pathJoin: function() { var parts = []; for (var i = 0, l = arguments.length; i < l; i++) {parts = parts.concat(arguments[i].split("/")); } var newParts = []; for (i = 0, l = parts.length; i < l; i++) {var part = parts[i];if (!part || part === ".") { continue}if (part === "..") { newParts.pop();} else { newParts.push(part);} } if (parts[0] === "") {newParts.unshift("") } return newParts.join("/") || (newParts.length ? "/" : ".");},module: function(name, fn) { var _exports = {}; var relative = "./"; var rel = name.match(/^(.*)\/[\w]+\.js$/); if (rel) {relative = rel[1]; } fn(_exports, this.require.bind({self: this,path: name,relative: relative })); this.register[name] = _exports;},require: function(name) { var self = this.self; var path = this.path; var relative = this.relative; if (name[0] === ".") {var target = ts.pathJoin(relative, name) + ".js";if (self.register[target]) { return self.register[target];} } else {return require(name); }},expose: function(scope, path) { path = path.match(/\.js^/) ? path : path + ".js"; var e = this.register[path]; if (e !== undefined) {var useAmd = !$isBackend && typeof define == 'function' && define.amd;for (var key in e) { var value = e[key]; if (useAmd) {define(key, [], function() { return value;}); } else {$scope[key] = value }} } else {throw new Error('Module "' + path + '" Cannot be exposed! Make sure you export variables correctly and the module is present'); }} }; return {isBackend: $isBackend,scope: $scope,ts : ts }}(typeof exports !== "undefined" ? exports : this, typeof exports !== "undefined"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlL1NwYWNlLnRzIiwiV29ybGQvV29ybGQudHMiLCJIZWxsby9IZWxsby50cyIsInJvb3QudHMiLCJiYXIvYS50cyIsImZvby9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBQ1EsU0FBSSxHQUFXLEdBQUcsQ0FBQztJQUMzQixDQUFDO0FBQUQsQ0FBQztBQUZZLGFBQUssUUFFakIsQ0FBQTs7Ozs7OztBQ0ZELHdCQUFvQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRXJDO0lBRUM7UUFDQyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDbkMsQ0FBQztBQUNGLENBQUM7QUFOWSxhQUFLLFFBTWpCLENBQUE7Ozs7Ozs7QUNSRCx3QkFBb0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUVyQztJQUVDO1FBQ0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsWUFBWTtRQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDMUIsQ0FBQztBQUNGLENBQUM7QUFWWSxhQUFLLFFBVWpCLENBQUE7Ozs7Ozs7QUNaRCx3QkFBb0IsZUFBZSxDQUFDLENBQUE7QUFFekIsYUFBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7Ozs7Ozs7QUNGL0I7QUFFQSxDQUFDO0FBRkQ7d0JBRUMsQ0FBQTs7Ozs7OztBQ0ZELG9CQUFtQixVQUFVLENBQUMsQ0FBQTtBQUU5QixxQkFBb0MsV0FBTTtBQUUxQyxDQUFDO0FBRkQ7d0JBRUMsQ0FBQSIsImZpbGUiOiJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3BhY2Uge1xyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnICc7XHJcbn0iLCJpbXBvcnQge1NwYWNlfSBmcm9tICcuLi9TcGFjZS9TcGFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGQge1xyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdGxldCBzcGFjZSA9IG5ldyBTcGFjZSgpO1xyXG5cdFx0dGhpcy50ZXh0ID0gc3BhY2UudGV4dCArICdXb3JsZCEnO1xyXG5cdH1cclxufSIsImltcG9ydCB7V29ybGR9IGZyb20gJy4uL1dvcmxkL1dvcmxkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWxsbyB7XHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0bGV0IHdvcmxkID0gbmV3IFdvcmxkKCk7XHJcblx0XHR0aGlzLnRleHQgPSAnSGVsbG8nICsgd29ybGQudGV4dCArICBNYXRoLnJhbmRvbSgpO1xyXG5cdH1cclxuXHRzYXlTb21ldGhpbmcoKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIVwiKVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge0hlbGxvfSBmcm9tICcuL0hlbGxvL0hlbGxvJztcblxuZXhwb3J0IGxldCBoZWxsbyA9IG5ldyBIZWxsbygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUNsYXNzIHtcblxufVxuIiwiaW1wb3J0IEFDbGFzcyBmcm9tICcuLi9iYXIvYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJDbGFzcyBleHRlbmRzIEFDbGFzcyB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
