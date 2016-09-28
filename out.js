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
define("foo/b", ["require", "exports", "bar/a"], function (require, exports, a_1) {
    "use strict";
    class BClass extends a_1.default {
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BClass;
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

var __expose__ = function(n, m, w, c) {
    var e = __resolve__(n);
    var bc;
    if (!$isBackend) { var npm = $__exports__.__npm__ = $__exports__.__npm__ || {}; if (m) { bc = npm[m] } }
    var cs = c.split(",")
    for (var ln in __local__) { for (var i = 0; i < cs.length; i++) { if (ln.indexOf(cs[i]) === 0) { __resolve__(ln) } } }
    for (var k in e) {
        $isBackend || w ? $__exports__[k] = e[k] : null;
        bc ? bc[e] = e[k] : null;
    }
};
__expose__("root", "my-lib-name", true, "controllers/,routes/");
})(typeof exports !== "undefined" ? exports : this, typeof exports !== "undefined");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUvT3RoZXIudHMiLCJleGFtcGxlL1NwYWNlL1NwYWNlLnRzIiwiZXhhbXBsZS9Xb3JsZC9Xb3JsZC50cyIsImV4YW1wbGUvSGVsbG8vSGVsbG8udHMiLCJleGFtcGxlL3Jvb3QudHMiLCJleGFtcGxlL2Jhci9hLnRzIiwiZXhhbXBsZS9mb28vYi50cyIsImV4YW1wbGUvY29udHJvbGxlcnMvQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUNJLFlBQW1CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQUksQ0FBQztJQUN4QyxDQUFDO0lBRlksYUFBSyxRQUVqQixDQUFBOzs7O0lDREQ7UUFBQTtZQUNRLFNBQUksR0FBVyxHQUFHLENBQUM7WUFDbkIsTUFBQyxHQUFVLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFBRCxDQUFDO0lBSFksYUFBSyxRQUdqQixDQUFBOzs7O0lDRkQ7UUFFQztZQUNDLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxDQUFDO0lBQ0YsQ0FBQztJQU5ZLGFBQUssUUFNakIsQ0FBQTs7OztJQ05EO1FBRUM7WUFDQyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFDRCxZQUFZO1lBRVgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMxQixDQUFDO0lBQ0YsQ0FBQztJQVZZLGFBQUssUUFVakIsQ0FBQTs7OztJQ1ZVLGFBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Ozs7SUNIbEM7SUFFQSxDQUFDO0lBRkQ7NEJBRUMsQ0FBQTs7OztJQ0FELHFCQUFvQyxXQUFNO0lBRTFDLENBQUM7SUFGRDs0QkFFQyxDQUFBOzs7O0lDSkQ7UUFDSTtRQUFnQixDQUFDO0lBQ3JCLENBQUM7SUFGWSxrQkFBVSxhQUV0QixDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uL291dC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBPdGhlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XG59IiwiaW1wb3J0IHsgT3RoZXIgfSBmcm9tIFwiLi4vT3RoZXJcIjtcclxuZXhwb3J0IGNsYXNzIFNwYWNlIHtcclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nID0gJyAnO1xyXG5cdHB1YmxpYyBhOiBPdGhlciA9IG5ldyBPdGhlcihcInNkZnNcIik7XHJcbn0iLCJpbXBvcnQge1NwYWNlfSBmcm9tICcuLi9TcGFjZS9TcGFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGQge1xyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdGxldCBzcGFjZSA9IG5ldyBTcGFjZSgpO1xyXG5cdFx0dGhpcy50ZXh0ID0gc3BhY2UudGV4dCArICdXb3JsZCEnO1xyXG5cdH1cclxufSIsImltcG9ydCB7V29ybGR9IGZyb20gJy4uL1dvcmxkL1dvcmxkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWxsbyB7XHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0bGV0IHdvcmxkID0gbmV3IFdvcmxkKCk7XHJcblx0XHR0aGlzLnRleHQgPSAnSGVsbG8nICsgd29ybGQudGV4dCArICBNYXRoLnJhbmRvbSgpO1xyXG5cdH1cclxuXHRzYXlTb21ldGhpbmcoKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIVwiKVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBIZWxsbyB9IGZyb20gJy4vSGVsbG8vSGVsbG8nO1xuXG5leHBvcnQgbGV0IGhlbGxvID0gbmV3IEhlbGxvKCk7XG5jb25zb2xlLmxvZyhoZWxsby5zYXlTb21ldGhpbmcoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBQ2xhc3Mge1xuXG59XG4iLCJpbXBvcnQgQUNsYXNzIGZyb20gJy4uL2Jhci9hJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQkNsYXNzIGV4dGVuZHMgQUNsYXNzIHtcblxufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5jb25zb2xlLmxvZyhcIkkgYW0gY29uc3VtZWQgKENvbnRyb2xsZXIpXCIpOyJdfQ==
