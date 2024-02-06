// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }

class createUser {
    constructor(firstName, lastName, email, age, address) {
        // createUser.prototype is the object that will be used as the prototype for the objects created by the function
        // const user = Object.create(createUser.prototype);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;

    }
    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18() {
        return this.age >= 18;
    }
}

// function createUser(firstName, lastName, email, age, address) {
//     // createUser.prototype is the object that will be used as the prototype for the objects created by the function
//     // const user = Object.create(createUser.prototype);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;

// }

// createUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old.`;
// };

// createUser.prototype.is18 = function () {
//     return this.age >= 18;
// };


// stepwise process which happens after using new keyword
// 1. use the new keyword
// 2. a new empty object is created
// 3. the new object  gets linked to the prototype property of the constructor function
// 4. the constructor function is called with the arguments that are passed
// 5. the new object is returned if the constructor function does not return anything


const user1 = new createUser('patrick', 'rai', 'harshit@gmail.com', 19, "my address");
const user2 = new createUser('pratik', 'raii', 'harshit@gmail.com', 19, "my address");
const user3 = new createUser('ankit', 'raiii', 'harshit@gmail.com', 19, "my address");

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());

console.log(user1.__proto__.about());


// __proto__ , [[prototype]]
// __proto__ is a refrence to object in a function call

function hello1() {
    console.log("hello world");
}

console.log(hello1.name);