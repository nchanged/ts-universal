(function($__exports__, $isBackend) {var __local__ = {};var define = function(n, d, f) {__local__[n] = { d: d, f: f }};var __resolve__ = function(name) {var m = __local__[name];if (m === undefined) {if ($isBackend) {return require(name);} else {Exports.__npm__ = Exports.__npm__ || {};return Exports.__npm__[name];}}if (m.r) { return m.r; }m.r = {};var z = [__resolve__, m.r];for (var i = 2; i < m.d.length; i++) {z.push(__resolve__(m.d[i]));}m.f.apply(null, z);return m.r;};
define("Other", ["require", "exports"], function (require, exports) {
    "use strict";
    class Other {
        constructor(name) {
            this.name = name;
        }
    }
    exports.Other = Other;
});
define("Space/Space", ["require", "exports", "Other"], function (require, exports, Other_1) {
    "use strict";
    class Space {
        constructor() {
            this.text = ' ';
            this.a = new Other_1.Other("sdfs");
        }
    }
    exports.Space = Space;
});
define("World/World", ["require", "exports", "Space/Space"], function (require, exports, Space_1) {
    "use strict";
    class World {
        constructor() {
            let space = new Space_1.Space();
            this.text = space.text + 'World!';
        }
    }
    exports.World = World;
});
define("Hello/Hello", ["require", "exports", "World/World"], function (require, exports, World_1) {
    "use strict";
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
define("root", ["require", "exports", "Hello/Hello"], function (require, exports, Hello_1) {
    "use strict";
    console.log("I AM THE EXPOSED MODULE");
    exports.hello = new Hello_1.Hello();
    console.log(exports.hello.saySomething());
});
define("bar/a", ["require", "exports"], function (require, exports) {
    "use strict";
    class AClass {
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AClass;
});
define("controllers/Controller", ["require", "exports"], function (require, exports) {
    "use strict";
    class Controller {
        constructor() {
        }
    }
    exports.Controller = Controller;
    console.log("I am consumed (Controller)");
});
define("foo/b", ["require", "exports", "bar/a"], function (require, exports, a_1) {
    "use strict";
    class BClass extends a_1.default {
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BClass;
});

var __expose__ = function(n, m, w, c) {
    var cs = c ? c.split(",") : [];
    if (cs.length) { for (var ln in __local__) { for (var i = 0; i < cs.length; i++) { if (ln.indexOf(cs[i]) === 0) { __resolve__(ln) } } } }
    var e = __resolve__(n);
    var bc;
    if (!$isBackend) { var npm = $__exports__.__npm__ = $__exports__.__npm__ || {}; if (m) { bc = npm[m] } }
    for (var k in e) {
        $isBackend || w ? $__exports__[k] = e[k] : null;
        bc ? bc[e] = e[k] : null;
    }

};
__expose__("root", "my-lib-name", true, "controllers/,routes/");
})(typeof module !== "undefined" && module.exports && typeof process === "object" ?
    exports : typeof window !== "undefined" ? window : this,
    typeof module !== "undefined" && module.exports && typeof process === "object");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUvT3RoZXIudHMiLCJleGFtcGxlL1NwYWNlL1NwYWNlLnRzIiwiZXhhbXBsZS9Xb3JsZC9Xb3JsZC50cyIsImV4YW1wbGUvSGVsbG8vSGVsbG8udHMiLCJleGFtcGxlL3Jvb3QudHMiLCJleGFtcGxlL2Jhci9hLnRzIiwiZXhhbXBsZS9jb250cm9sbGVycy9Db250cm9sbGVyLnRzIiwiZXhhbXBsZS9mb28vYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUNJLFlBQW1CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQUksQ0FBQztJQUN4QyxDQUFDO0lBRlksYUFBSyxRQUVqQixDQUFBOzs7O0lDREQ7UUFBQTtZQUNRLFNBQUksR0FBVyxHQUFHLENBQUM7WUFDbkIsTUFBQyxHQUFVLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFBRCxDQUFDO0lBSFksYUFBSyxRQUdqQixDQUFBOzs7O0lDRkQ7UUFFQztZQUNDLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxDQUFDO0lBQ0YsQ0FBQztJQU5ZLGFBQUssUUFNakIsQ0FBQTs7OztJQ05EO1FBRUM7WUFDQyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFDRCxZQUFZO1lBRVgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMxQixDQUFDO0lBQ0YsQ0FBQztJQVZZLGFBQUssUUFVakIsQ0FBQTs7OztJQ1hELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1QixhQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDOzs7O0lDSGxDO0lBRUEsQ0FBQztJQUZEOzRCQUVDLENBQUE7Ozs7SUNGRDtRQUNJO1FBQWdCLENBQUM7SUFDckIsQ0FBQztJQUZZLGtCQUFVLGFBRXRCLENBQUE7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Ozs7SUNEMUMscUJBQW9DLFdBQU07SUFFMUMsQ0FBQztJQUZEOzRCQUVDLENBQUEiLCJmaWxlIjoib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE90aGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cbn0iLCJpbXBvcnQgeyBPdGhlciB9IGZyb20gXCIuLi9PdGhlclwiO1xyXG5leHBvcnQgY2xhc3MgU3BhY2Uge1xyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnICc7XHJcblx0cHVibGljIGE6IE90aGVyID0gbmV3IE90aGVyKFwic2Rmc1wiKTtcclxufSIsImltcG9ydCB7U3BhY2V9IGZyb20gJy4uL1NwYWNlL1NwYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0bGV0IHNwYWNlID0gbmV3IFNwYWNlKCk7XHJcblx0XHR0aGlzLnRleHQgPSBzcGFjZS50ZXh0ICsgJ1dvcmxkISc7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtXb3JsZH0gZnJvbSAnLi4vV29ybGQvV29ybGQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlbGxvIHtcclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRsZXQgd29ybGQgPSBuZXcgV29ybGQoKTtcclxuXHRcdHRoaXMudGV4dCA9ICdIZWxsbycgKyB3b3JsZC50ZXh0ICsgIE1hdGgucmFuZG9tKCk7XHJcblx0fVxyXG5cdHNheVNvbWV0aGluZygpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5sb2coXCJTb21ldGhpbmchXCIpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEhlbGxvIH0gZnJvbSAnLi9IZWxsby9IZWxsbyc7XG5jb25zb2xlLmxvZyhcIkkgQU0gVEhFIEVYUE9TRUQgTU9EVUxFXCIpO1xuZXhwb3J0IGxldCBoZWxsbyA9IG5ldyBIZWxsbygpO1xuY29uc29sZS5sb2coaGVsbG8uc2F5U29tZXRoaW5nKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUNsYXNzIHtcblxufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5jb25zb2xlLmxvZyhcIkkgYW0gY29uc3VtZWQgKENvbnRyb2xsZXIpXCIpOyIsImltcG9ydCBBQ2xhc3MgZnJvbSAnLi4vYmFyL2EnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCQ2xhc3MgZXh0ZW5kcyBBQ2xhc3Mge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
