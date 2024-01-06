// function parameter annotation in ts are used to specify the exwpected type of 
// the parameter in a function

// regular function

function add(num1 : number , num2 : number){
    return num1 + num2;
}

console.log(add(10, 20));


// arrow function

const addArrow = (num1 : number , num2 : number) => num1 + num2;
console.log(addArrow(10, 20));

const double = (num : number) => num * 2;
console.log(double(10));


// function with default parameter

function greet(name : string = 'user'){
    return `Hello ${name}`;
}

console.log(greet());

// function with return type

function returnName(name1 : string , name2 : string) : string[]  {
    return [name1 , name2];
}

const names = returnName('John' , 'Doe');

console.log(names);