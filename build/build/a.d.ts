declare module "Other" {
    export class Other {
        name: string;
        constructor(name: string);
    }
}
declare module "Space/Space" {
    import { Other } from "Other";
    export class Space {
        text: string;
        a: Other;
    }
}
declare module "World/World" {
    export class World {
        text: string;
        constructor();
    }
}
declare module "Hello/Hello" {
    export class Hello {
        text: string;
        constructor();
        saySomething(): void;
    }
}
declare module "root" {
    import { Hello } from "Hello/Hello";
    export let hello: Hello;
}
declare module "bar/a" {
    export default class AClass {
    }
}
declare module "foo/b" {
    import AClass from "bar/a";
    export default class BClass extends AClass {
    }
}
