import { Hello } from './Hello/Hello';
console.log("I AM THE EXPOSED MODULE");
export let hello = new Hello();
console.log(hello.saySomething());
