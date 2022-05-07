// funtion expression

const addNum = function(a, b) {
    return a + b;
}
console.log(addNum(1, 2));

// arrow function creation

const addNum1 = (a, b) => {
    return a + b;
}

console.log(addNum1(2, 2));

const isEven = (a) => {
    return (a % 2 === 0);
}

const firstChar = anyName => anyName[0];

console.log(firstChar("Pratik"));

console.log(isEven(5));

// function inside functions 

function multiple() {
    let myFunc = () => {
        console.log("Creating a function")
    }

    let addNumber = (a, b) => {
        return a + b;
    }
    console.log("Nested Functions");
    myFunc();
    console.log(addNumber(1, 2));
}

multiple();

function restFunc(a, b, ...c) {
    console.log(`a b and c are `, a, b, "and", c, "respectively .");
}

restFunc(1, 2, 4, 5, 6, 7, 3);

function sum(...c) {
    let sum1 = 0;
    for (let i of c) {
        sum1 += i;
    }
    console.log(sum1);
}

// let sum = [1,2,3,4,5,6] ;

sum(1, 2, 3, 4, 5);

// callback functions --> paasing one function as parameter to another function

function add(a, b) {
    console.log("adding");
    console.log(a + b);
    console.log(typeof(a, b));
}

function myFunc(a) {
    a(2, 3);
}

myFunc(add);

// function inside functions 

function myfunc() {
    return hello = () => {
        console.log("Higher order function");
    }
}

const ans = myfunc();
ans();