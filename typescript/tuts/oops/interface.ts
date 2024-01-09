// interface is a way to define a contract for the shape of an object.


// interface for objects
interface Person111{
    firstName : string;
    lastName : string;
    gender : string;
}

const person : Person111 = {
    firstName :  "Pratik",
    lastName : "Rai",
    gender : "Male"
}

// interface for functions

interface add{
    (x : number , y : number) : number
}

// function addFunction(x , y) : add{
//     return x + y;
// }

// console.log(addFunction(10,20));

const addFunction : add = (x , y) => x + y;

console.log(addFunction(10,20));

function performAddition(operation: add, a: number, b: number): number {
    return operation(a, b);
}

console.log(performAddition(addFunction, 10, 20));