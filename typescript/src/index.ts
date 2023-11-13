// Code snippet: ts-arr
interface Person{
    name:string;
    age:number;
    canDrive:boolean;
}

interface speech{
    sayHello(name:string) : string;
}

let p1: Person ={
    name:"Pratik",
    age: 21,
    canDrive: true
}

let p2: Person ={
    name:"Pratik",
    age: 21,
    canDrive: true
}

let say : speech = {
    sayHello : (name:string) => `Hello ${name}`
}

function helloo(name:string):string{
    return `Hello ${name}`;
}

// function with arrow function

const hellllll = (number:number) => {
    `hello bhai ${number}`
}

// lets write a function that takes optional parameter
function optional(name:string, age?:number):string{
    return `Hello ${name} your age is ${age}`;
}



console.log(p1 === p2); // false
console.log(say.sayHello("Pratik")); // Hello Pratik
console.log(helloo("Pratik")); // Hello Pratik
console.log(hellllll(10)); // hello bhai
console.log(optional("Pratik",22)); // Hello Pratik your age is undefined