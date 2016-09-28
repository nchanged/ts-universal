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
