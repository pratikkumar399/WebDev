"use strict";
let p1 = {
    name: "Pratik",
    age: 21,
    canDrive: true
};
let p2 = {
    name: "Pratik",
    age: 21,
    canDrive: true
};
let say = {
    sayHello: (name) => `Hello ${name}`
};
function helloo(name) {
    return `Hello ${name}`;
}
// function with arrow function
const hellllll = (number) => {
    `hello bhai ${number}`;
};
// lets write a function that takes optional parameter
function optional(name, age) {
    return `Hello ${name} your age is ${age}`;
}
console.log(p1 === p2); // false
console.log(say.sayHello("Pratik")); // Hello Pratik
console.log(helloo("Pratik")); // Hello Pratik
console.log(hellllll(10)); // hello bhai
console.log(optional("Pratik", 22)); // Hello Pratik your age is undefined
