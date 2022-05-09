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


// call apply and bind 

function about(hobby , favouriteMusician){
    console.log(this.firstName ,this.age , hobby ,favouriteMusician) ;
}


const user1 = {
    firstName : "Pratik" , 
    age : 22 ,
    about: function(hobby , favouriteMusician){
        console.log(this.firstName ,this.age , hobby ,favouriteMusician) ;
    }
}
const user2 = {
    firstName : "Ankit" , 
    age : 21  
}


// user1.about() ;
// call --> Calls a method of an object, substituting another object for the current object.
user1.about.call(user2 , "writing" , "no") ; //this method for this function is for user2 object 

// apply method -->Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
about.apply(user1 , ["books" ,"nonone"]) ;


// bind
/* For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters. */
const func =about.bind(user1, "books" , "again") ;
func() ;